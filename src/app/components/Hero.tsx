"use client";

import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import mongolia_flag from "../pictures/mongolia_flag.png";
import selfie from "../pictures/selfie.svg";
import { motion } from "motion/react";

function Hero() {
  return (
    <Container>
      <Grid2
        container
        height="100vh"
        display="flex"
        alignItems="center"
        sx={{ transform: "translateY(-5%)" }}
      >
        <Grid2
          size={7}
          component={motion.div}
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Typography fontSize={40}>
            Hi, I am
            <br />
            <b>Orgil Dorj!</b>
          </Typography>
          <Typography fontSize={18} sx={{ opacity: ".6" }} marginY={2.5}>
            I’m currently studying for a master’s degree in Information Systems
            at Technical University of Munich and now in my last semester. I am
            looking for a master’s thesis topic as well as a working student
            job. My goal is to work as a full-stack developer in the future.
            However, I am also open to other possibilities.
          </Typography>
          <Box>
            <Typography fontSize={12} sx={{ opacity: ".6" }}>
              NATIONALITY
            </Typography>
            <Box display="flex" alignItems="center" columnGap={0}>
              <Typography fontSize={24} fontWeight={500}>
                MGL
              </Typography>
              <Image
                src={mongolia_flag}
                alt="Mongolian flag"
                width={20}
                height={20}
              />
            </Box>
          </Box>
        </Grid2>
        <Grid2
          size={5}
          display="flex"
          justifyContent="flex-end"
          component={motion.div}
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src={selfie}
            alt="selfie"
            width={440}
            style={{
              boxShadow: "20px 20px 0 rgba(17, 24, 39, 1)",
            }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Hero;
