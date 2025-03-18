"use client";

import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import bsd_energy from "../pictures/bsd_energy.png";
import itestra from "../pictures/itestra.png";
import { motion } from "motion/react";

function Experience() {
  const isTabletOrLarger = useMediaQuery("(min-width:768px)");

  return (
    <Box
      // bgcolor="#111827"
      height={isTabletOrLarger ? "100vh" : undefined}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingY={8}
    >
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            fontSize={40}
            fontWeight="bold"
            component={motion.div}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
            transition={{ duration: 2, ease: "easeOut" }}
            textAlign="center"
          >
            Job Experence so far
          </Typography>
          <Typography
            fontSize={20}
            sx={{ opacity: ".6" }}
            width={isTabletOrLarger ? "50%" : "100%"}
            textAlign="center"
            marginBottom={2}
            component={motion.div}
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            I have limited job experience but am eager to learn and grow. I am
            open to new opportunities and excited to develop new skills.
          </Typography>
          <ExperenceItem
            logoSrc={bsd_energy}
            logoWidth={195}
            position="Technical Support"
            desc="Maintenance of internal company systems, network and monitoring systems, drawing diagrams for photovoltaic systems and maintaining internal departmental documentation."
            timePeriod="Nov 2023 - Jul 2024"
            initialX="-100%"
          />
          <ExperenceItem
            logoSrc={itestra}
            logoWidth={170}
            position="Backend Working Student"
            desc="Worked on a project that involved developing a Java Spring software program based on an old C-based program."
            timePeriod="Nov 2022 - Feb 2023"
            initialX="100%"
          />
        </Box>
      </Container>
    </Box>
  );
}

type ExperenceItemProps = {
  logoSrc: string | StaticImageData;
  logoWidth: number;
  position: string;
  desc: string;
  timePeriod: string;
  initialX: string;
};

function ExperenceItem({
  logoSrc,
  logoWidth,
  position,
  desc,
  timePeriod,
  initialX,
}: ExperenceItemProps) {
  const isTabletOrLarger = useMediaQuery("(min-width:1024px)");

  return (
    <Box
      bgcolor="#1F2937"
      borderRadius="10px"
      width="100%"
      padding={4}
      marginY={3}
      sx={{ boxShadow: "0px 25px 25px rgba(0, 0, 0, 0.15)" }}
      component={motion.div}
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <Grid2
        container
        columns={24}
        flexDirection={isTabletOrLarger ? "row" : "column"}
        rowGap={isTabletOrLarger ? 0 : 2}
      >
        <Grid2 size={isTabletOrLarger ? 7 : 24}>
          <Image
            src={logoSrc}
            alt="Company logo"
            width={logoWidth}
            height={0}
          />
        </Grid2>
        <Grid2
          size={isTabletOrLarger ? 10 : 24}
          display="flex"
          flexDirection="column"
          rowGap={2}
        >
          <Typography fontSize={20} fontWeight={550}>
            {position}
          </Typography>
          <Typography fontSize={16}>{desc}</Typography>
        </Grid2>
        <Grid2 size={isTabletOrLarger ? 7 : 24}>
          <Typography
            fontSize={16}
            sx={{ opacity: ".6" }}
            textAlign={isTabletOrLarger ? "end" : "start"}
          >
            {timePeriod}
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Experience;
