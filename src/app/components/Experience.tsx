"use client";

import { Box, Container, Typography } from "@mui/material";
import bsd_energy from "../pictures/bsd_energy.png";
import itestra from "../pictures/itestra.png";
import { motion } from "motion/react";
import IsTabletOrLarger from "../hooks/IsTabletOrLarger";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  const isTabletOrLarger = IsTabletOrLarger();

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
            Summary of my job experiences so far.
          </Typography>
          <ExperienceItem
            logoSrc={bsd_energy}
            logoWidth={195}
            position="Technical Support"
            desc="Maintenance of internal company systems, network and monitoring systems, drawing diagrams for photovoltaic systems and maintaining internal departmental documentation."
            timePeriod="Nov 2023 - Jul 2024"
          />
          <ExperienceItem
            logoSrc={itestra}
            logoWidth={170}
            position="Backend Working Student"
            desc="Worked on a project that involved developing a Java Spring software program based on an old C-based program."
            timePeriod="Nov 2022 - Feb 2023"
            motionLeft={false}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;
