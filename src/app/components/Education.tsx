"use client";

import { Box, Container, Grid2, Typography } from "@mui/material";
import { styles } from "./styles";
import { motionProps } from "./motionProps";
import EducationItem from "./EducationItem";
import IsTabletOrLarger from "../hooks/IsTabletOrLarger";

function Education() {
  const isTabletOrLarger = IsTabletOrLarger();
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
            sx={styles.sectionTitle}
            {...motionProps.fromLeft}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
          >
            Education
          </Typography>
          <Typography
            sx={styles.sectionSubTitle}
            textAlign="center"
            marginBottom={4}
            {...motionProps.fromRight}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
          >
            Summary of my academic journey.
          </Typography>
          <EducationItemLine height={10} />
          <EducationItem
            degree="Information Systems MSc"
            uni="Technical University of Munich"
            timePeriod="Oct 2022 - Current"
            timeCircleText="Now"
            reverse={false}
          />
          <EducationItemLine height={isTabletOrLarger ? 50 : 100} />

          <EducationItem
            degree="Exchange Student"
            uni="KAIST School of Computing"
            timePeriod="Sep 2024 - Dec 2024"
            timeCircleText="2024"
            reverse={true}
          />
          <EducationItemLine height={isTabletOrLarger ? 50 : 100} />

          <EducationItem
            degree="Information Systems BSc"
            uni="Technical University of Munich"
            timePeriod="Oct 2019 - Aug 2022"
            timeCircleText="2022"
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
  const isTabletOrLarger = IsTabletOrLarger();

  return (
    <Grid2 container columns={5} width="100%">
      <Grid2
        size={isTabletOrLarger ? 5 : 1}
        display="flex"
        justifyContent="center"
      >
        <Box
          sx={{
            width: 2,
            height: height,
            backgroundColor: `${styles.secondaryColor}`,
          }}
        />
      </Grid2>
    </Grid2>
  );
}

export default Education;
