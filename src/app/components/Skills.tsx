"use client";

import { Box, Container, Typography } from "@mui/material";
import spring from "../pictures/Spring Java.svg";
import python from "../pictures/python.svg";
import react from "../pictures/react.svg";
import nodejs from "../pictures/nodejs.svg";
import sql from "../pictures/SQL.svg";
import mongodb from "../pictures/mongodb.svg";
import solidity from "../pictures/solidity.svg";
import iot from "../pictures/iot.svg";
import express from "../pictures/express.svg";
import nextjs from "../pictures/nextjs.svg";
import Image from "next/image";
import { styles } from "./styles";
import { motionProps } from "./motionProps";
import IsTabletOrLarger from "../hooks/IsTabletOrLarger";

function Skills() {
  const isTabletOrLarger = IsTabletOrLarger();

  return (
    <Box
      // bgcolor="#111827"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingY={8}
    >
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography
            sx={styles.sectionTitle}
            fontWeight="bold"
            {...motionProps.fromLeft}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
          >
            Technical Skills
          </Typography>
          <Typography
            width={isTabletOrLarger ? "50%" : "100%"}
            textAlign="center"
            sx={styles.sectionSubTitle}
            {...motionProps.fromRight}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
          >
            This is an overview of my technical skills. Of course, I am always
            open for learning new skills.
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            width="100%"
            marginY={4}
            {...motionProps.appear}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
          >
            <SkillComponent imageSrc={spring} desc="Spring" />
            <SkillComponent imageSrc={python} desc="Python" />
            <SkillComponent imageSrc={react} desc="React" />
            <SkillComponent imageSrc={nodejs} desc="Node.js" />
            <SkillComponent imageSrc={sql} desc="SQL" />
          </Box>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            width="100%"
            marginY={4}
            {...motionProps.appear}
            viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
          >
            <SkillComponent imageSrc={mongodb} desc="MongoDB" />
            <SkillComponent imageSrc={solidity} desc="Solidity" />
            <SkillComponent imageSrc={iot} desc="IoT" />
            <SkillComponent imageSrc={express} desc="Express.js" />
            <SkillComponent imageSrc={nextjs} desc="Next.js" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

type SkillComponentProp = {
  imageSrc: string;
  desc: string;
};

function SkillComponent({ imageSrc, desc }: SkillComponentProp) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Image src={imageSrc} alt="" height={64} width={64} />
      <Typography>{desc}</Typography>
    </Box>
  );
}

export default Skills;
