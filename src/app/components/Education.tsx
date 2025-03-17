"use client";

import { Box, Container, Grid2, Typography } from "@mui/material";
import tum from "../pictures/tum.svg";
import kaist from "../pictures/kaist.svg";
import Image from "next/image";
import { motion } from "motion/react";

function Education() {
  return (
    <Box
      marginY={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 2, ease: "easeOut" }}
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
            viewport={{ amount: 0.2 }}
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
            viewport={{ amount: 0.2 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Summary of my academic journey.
          </Typography>
          <Box
            sx={{ width: 4, height: 10, backgroundColor: "gray" }}
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
          <Grid2
            container
            columns={5}
            width="100%"
            component={motion.div}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Grid2
              size={2}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Box
                bgcolor="#E7E7E7"
                borderRadius="10px"
                height={107}
                width={293}
                sx={{ boxShadow: "0px 4px 0px rgba(255, 255, 255, 0.5)" }}
                padding={2.5}
              >
                <Typography color="#1841C9" fontSize={18} fontWeight={550}>
                  Information Systems MSc
                </Typography>
                <Typography color="black" fontSize={14} fontWeight={550}>
                  Technical University of Munich
                </Typography>
                <Typography color="black" sx={{ opacity: ".6" }} fontSize={12}>
                  Oct 2022 - Current
                </Typography>
              </Box>
              <Box
                width={0}
                height={0}
                sx={{
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "20px solid #E7E7E7",
                }}
              />
            </Grid2>
            <Grid2 size={1} display="flex" justifyContent="center">
              <LogoCircle logoSrc={tum} />
            </Grid2>
          </Grid2>
          <Box sx={{ width: 4, height: 200, backgroundColor: "gray" }} />
          <Grid2
            container
            columns={5}
            width="100%"
            flexDirection="row-reverse"
            component={motion.div}
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Grid2
              size={2}
              display="flex"
              justifyContent="flex-beginning"
              alignItems="center"
            >
              <Box
                width={0}
                height={0}
                sx={{
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderRight: "20px solid #E7E7E7",
                }}
              />
              <Box
                bgcolor="#E7E7E7"
                borderRadius="10px"
                height={107}
                width={293}
                sx={{ boxShadow: "0px 4px 0px rgba(255, 255, 255, 0.5)" }}
                padding={2.5}
              >
                <Typography color="#1841C9" fontSize={18} fontWeight={550}>
                  Exchange Student
                </Typography>
                <Typography color="black" fontSize={14} fontWeight={550}>
                  KAIST School of Computing
                </Typography>
                <Typography color="black" sx={{ opacity: ".6" }} fontSize={12}>
                  Sep 2024 - Dec 2024
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={1} display="flex" justifyContent="center">
              <LogoCircle logoSrc={kaist} />
            </Grid2>
          </Grid2>
          <Box sx={{ width: 4, height: 200, backgroundColor: "gray" }} />
          <Grid2
            container
            columns={5}
            width="100%"
            component={motion.div}
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Grid2
              size={2}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Box
                bgcolor="#E7E7E7"
                borderRadius="10px"
                height={107}
                width={293}
                sx={{ boxShadow: "0px 4px 0px rgba(255, 255, 255, 0.5)" }}
                padding={2.5}
              >
                <Typography color="#1841C9" fontSize={18} fontWeight={550}>
                  Information Systems BSc
                </Typography>
                <Typography color="black" fontSize={14} fontWeight={550}>
                  Technical University of Munich
                </Typography>
                <Typography color="black" sx={{ opacity: ".6" }} fontSize={12}>
                  Oct 2019 - Aug 2022
                </Typography>
              </Box>
              <Box
                width={0}
                height={0}
                sx={{
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "20px solid #E7E7E7",
                }}
              />
            </Grid2>
            <Grid2 size={1} display="flex" justifyContent="center">
              <LogoCircle logoSrc={tum} />
            </Grid2>
          </Grid2>
          <Box sx={{ width: 4, height: 10, backgroundColor: "gray" }} />
        </Box>
      </Container>
    </Box>
  );
}

type LogoCircleProp = {
  logoSrc: string;
};

function LogoCircle({ logoSrc }: LogoCircleProp) {
  return (
    <Box
      width={130}
      height={130}
      borderRadius="50%"
      bgcolor="#E7E7E7"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ border: "5px solid gray" }}
    >
      <Image src={logoSrc} alt="" width={98} height={47} />
    </Box>
  );
}

export default Education;
