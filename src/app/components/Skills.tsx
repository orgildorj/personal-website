"use client";

import { Box, Container, Typography, useMediaQuery } from "@mui/material";
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
import { motion } from "motion/react";

function Skills() {
  const isLaptopOrLarger = useMediaQuery("(min-width:1024px)");

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
            fontSize={40}
            fontWeight="bold"
            component={motion.div}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={isLaptopOrLarger ? { amount: 0.2 } : undefined}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Technical Skills
          </Typography>
          <Typography
            fontSize={20}
            sx={{ opacity: ".6" }}
            width={isLaptopOrLarger ? "50%" : "100%"}
            textAlign="center"
            component={motion.div}
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={isLaptopOrLarger ? { amount: 0.2 } : undefined}
            transition={{ duration: 2, ease: "easeOut" }}
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
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={isLaptopOrLarger ? { amount: 0.2 } : undefined}
            transition={{ duration: 2, ease: "easeOut" }}
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
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={isLaptopOrLarger ? { amount: 0.2 } : undefined}
            transition={{ duration: 2, ease: "easeOut" }}
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
