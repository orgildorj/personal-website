"use client";

import { Container, Grid2, Typography } from "@mui/material";
// import Image from "next/image";
import { motionProps } from "./motionProps";
// import mongolia_flag from "../pictures/mongolia_flag.png";
// import selfie from "../pictures/selfie.png";
// import self_portrait from "../pictures/self_portrait.png";
// import self_portrait2 from "../pictures/self_portrait(1).png";
// import { useState } from "react";
import IsTabletOrLarger from "../hooks/IsTabletOrLarger";

function Hero() {
  const isTabletOrLarger = IsTabletOrLarger();
  // const [scale, setScale] = useState(1);
  // const [imageBorder, setImageBorder] = useState("white");

  return (
    <Container>
      <Grid2
        container
        display="flex"
        alignItems="center"
        sx={{ height: { md: "90vh" }, transform: { md: "translateY(-5%)" } }}
      >
        <Grid2
          size={{ xs: 12, md: 7 }}
          {...motionProps.fromLeft}
          viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
          marginBottom={2}
        >
          <Typography fontSize={40}>Hi, I am</Typography>
          <Typography
            fontSize={40}
            marginBottom={1}
            fontWeight="bold"
            color="#1f42b4"
          >
            Orgil Dorj
          </Typography>
          <Typography sx={{ fontSize: 20, opacity: 0.6 }}>
            Thank you for visiting my site!
            <br />I am a master’s student at TUM, seeking a company to
            collaborate with on my master’s thesis. My goal is to build a career
            as a full-stack developer. If you’re offering a working student
            position or a master’s thesis opportunity, I’d love to connect and
            explore how I can contribute to your team.
          </Typography>

          {/* <Box marginY={2}>
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
          </Box> */}
        </Grid2>
        {/* <Grid2
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
        </Grid2> */}
      </Grid2>
    </Container>
  );
}

export default Hero;
