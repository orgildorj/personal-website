import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import mongolia_flag from "../pictures/mongolia_flag.png";

function Hero() {
  return (
    <Container>
      <Grid2 container paddingY={8}>
        <Grid2 size={7}>
          <Typography fontSize={40}>
            Hi, I am
            <br />
            <b>Orgil Dorj!</b>
          </Typography>
          <Typography fontSize={18} sx={{ opacity: ".6" }} marginY={2.5}>
            I’m currently studying for a master’s degree in Information Systems
            at Technical University of Munich.
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
      </Grid2>
    </Container>
  );
}

export default Hero;
