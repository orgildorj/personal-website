"use client";

import { Box, Container, Typography } from "@mui/material";
import bsd_energy from "../pictures/bsd_energy.png";
import itestra from "../pictures/itestra.png";
import IsTabletOrLarger from "../hooks/IsTabletOrLarger";
import ExperienceItem from "./ExperienceItem";
import { styles } from "./styles";
import { motionProps } from "./motionProps";

function Experience() {
  const isTabletOrLarger = IsTabletOrLarger();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            sx={styles.sectionTitle}
            {...motionProps.fromLeft}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Experience
          </Typography>
          <Typography
            sx={styles.sectionSubTitle}
            marginBottom={2}
            {...motionProps.fromRight}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
          >
            Experience in Software Development & Technology
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
            logoWidth={150}
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
