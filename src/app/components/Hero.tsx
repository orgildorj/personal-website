"use client";

import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import { styles } from "./styles.js";
import { motionProps } from "./motionProps";
import mongolia_flag from "../pictures/mongolia_flag.png";
// import selfie from "../pictures/selfie.png";
// import self_portrait from "../pictures/self_portrait.png";
import self_portrait2 from "../pictures/self_portrait(1).png";
import { useState } from "react";
import IsTabletOrLarger from "../hooks/IsTabletOrLarger";

function Hero() {
  const isTabletOrLarger = IsTabletOrLarger();
  const [scale, setScale] = useState(1);
  const [imageBorder, setImageBorder] = useState("white");

  return (
    <Container>
      <Grid2
        container
        display="flex"
        alignItems="center"
        sx={{ height: { md: "100vh" }, transform: { md: "translateY(-5%)" } }}
      >
        <Grid2
          size={{ xs: 12, md: 7 }}
          {...motionProps.fromLeft}
          viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
          marginBottom={2}
        >
          <Typography fontSize={40} marginBottom={1}>
            Hi, I am
            <br />
            <b>Orgil Dorj!</b>
          </Typography>
          <Typography sx={styles.sectionSubTitle}>
            I’m currently studying for a master’s degree in Information Systems
            at Technical University of Munich and now in my last semester. I am
            looking for a master’s thesis topic as well as a working student
            job. My goal is to work as a full-stack developer in the future.
            However, I am also open to other possibilities.
          </Typography>

          <Box marginY={2}>
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
          size={{ xs: 12, md: 5 }}
          display="flex"
          justifyContent="center"
          {...motionProps.fromRight}
          viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
        >
          <Image
            src={self_portrait2}
            alt="selfie"
            width={isTabletOrLarger ? 350 : 330}
            style={{
              boxShadow: "20px 20px 0 rgba(17, 24, 39, 1)",
              border: `1px solid ${imageBorder}`,
              transform: `scale(${scale})`,
              transition: "transform 0.3s ease-out",
            }}
            onMouseEnter={() => {
              setScale(1.01);
              setImageBorder("#7686A7");
            }}
            onMouseLeave={() => {
              setScale(1);
              setImageBorder("white");
            }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Hero;
