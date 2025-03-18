"use client";

import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import tum from "../pictures/tum.svg";
import kaist from "../pictures/kaist.svg";
import Image from "next/image";
import { motion } from "motion/react";

function Education() {
  const isTabletOrLarger = useMediaQuery("(min-width:768px)");

  return (
    <Box
      marginY={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            fontSize={40}
            fontWeight="bold"
            component={motion.div}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Education
          </Typography>
          <Typography
            fontSize={20}
            sx={{ opacity: ".6" }}
            width="60%"
            textAlign="center"
            marginBottom={4}
            component={motion.div}
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Summary of my academic journey.
          </Typography>
          <EducationItemLine height={10} />
          <EducationItem
            degree="Information Systems MSc"
            uni="Technical University of Munich"
            timePeriod="Oct 2022 - Current"
            logo={tum}
            reverse={false}
          />
          <EducationItemLine height={isTabletOrLarger ? 200 : 100} />

          <EducationItem
            degree="Exchange Student"
            uni="KAIST School of Computing"
            timePeriod="Sep 2024 - Dec 2024"
            logo={kaist}
            reverse={true}
          />
          <EducationItemLine height={isTabletOrLarger ? 200 : 100} />

          <EducationItem
            degree="Information Systems BSc"
            uni="Technical University of Munich"
            timePeriod="Oct 2019 - Aug 2022"
            logo={tum}
            reverse={false}
          />
          <EducationItemLine height={10} />
        </Box>
      </Container>
    </Box>
  );
}

type EducationItemLineProps = {
  height: number;
};

function EducationItemLine({ height }: EducationItemLineProps) {
  const isTabletOrLarger = useMediaQuery("(min-width:768px)");

  return (
    <Grid2 container columns={5} width="100%">
      <Grid2
        size={isTabletOrLarger ? 5 : 1}
        display="flex"
        justifyContent="center"
      >
        <Box
          sx={{
            width: 4,
            height: height,
            backgroundColor: "gray",
          }}
        />
      </Grid2>
    </Grid2>
  );
}

type EducationItemProps = {
  degree: string;
  uni: string;
  timePeriod: string;
  logo: string;
  reverse: boolean;
};

function EducationItem({
  degree,
  uni,
  timePeriod,
  logo,
  reverse,
}: EducationItemProps) {
  const isTabletOrLarger = useMediaQuery("(min-width:768px)");

  return (
    <Grid2
      container
      columns={5}
      width="100%"
      component={motion.div}
      initial={{ x: reverse ? "100%" : "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
      transition={{ duration: 2, ease: "easeOut" }}
      flexDirection={reverse && isTabletOrLarger ? "row-reverse" : "row"}
    >
      <Grid2
        size={isTabletOrLarger ? 2 : 4}
        display="flex"
        justifyContent={
          isTabletOrLarger ? (reverse ? "flex-start" : "flex-end") : "center"
        }
        alignItems="center"
        order={isTabletOrLarger ? 1 : 2}
      >
        <Grid2 container display="flex" alignItems="center">
          <Grid2 order={reverse ? 2 : 1}>
            <Box
              bgcolor="#E7E7E7"
              borderRadius="10px"
              height={{ xs: 90, md: 107 }}
              width={{ xs: 270, md: 293 }}
              sx={{ boxShadow: "0px 4px 0px rgba(255, 255, 255, 0.5)" }}
              padding={{ xs: 1.5, md: 2.5 }}
            >
              <Typography color="#1841C9" fontSize={18} fontWeight={550}>
                {degree}
              </Typography>
              <Typography color="black" fontSize={14} fontWeight={550}>
                {uni}
              </Typography>
              <Typography color="black" sx={{ opacity: ".6" }} fontSize={12}>
                {timePeriod}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 order={reverse ? 1 : 2}>
            <Box
              width={0}
              height={0}
              sx={{
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderLeft: reverse ? "" : "20px solid #E7E7E7",
                borderRight: reverse ? "20px solid #E7E7E7" : "",
              }}
              display={isTabletOrLarger ? undefined : "none"}
            />
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2
        size={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        order={isTabletOrLarger ? 2 : 1}
      >
        <LogoCircle logoSrc={logo} />
      </Grid2>
    </Grid2>
  );
}

type LogoCircleProp = {
  logoSrc: string;
};

function LogoCircle({ logoSrc }: LogoCircleProp) {
  const isTabletOrLarger = useMediaQuery("(min-width:1024px)");

  return (
    <Box
      width={{ xs: 80, md: 130 }}
      height={{ xs: 80, md: 130 }}
      borderRadius="50%"
      bgcolor="#E7E7E7"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ border: "5px solid gray" }}
    >
      <Image
        src={logoSrc}
        alt=""
        width={isTabletOrLarger ? 98 : 60}
        height={0}
      />
    </Box>
  );
}

export default Education;
