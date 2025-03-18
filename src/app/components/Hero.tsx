"use client";

import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import mongolia_flag from "../pictures/mongolia_flag.png";
import selfie from "../pictures/selfie.png";
import { motion } from "motion/react";
import { useState } from "react";

function Hero() {
  const isLaptopOrLarger = useMediaQuery("(min-width:1024px)");
  const isTabletOrLarger = useMediaQuery("(min-width:768px)");

  const [scale, setScale] = useState(1);
  const [imageBorder, setImageBorder] = useState("white");

  return (
    <Container>
      <Grid2
        container
        display="flex"
        alignItems="center"
        sx={{ md: { height: "100vh", transform: "translateY(-5%)" } }}
      >
        <Grid2
          size={{ xs: 12, md: 7 }}
          component={motion.div}
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={isLaptopOrLarger ? { amount: 0.2 } : undefined}
          transition={{ duration: 2, ease: "easeOut" }}
          marginBottom={2}
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
          size={{ xs: 12, md: 5 }}
          display="flex"
          justifyContent="center"
          component={motion.div}
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src={selfie}
            alt="selfie"
            width={isTabletOrLarger ? 440 : 330}
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
