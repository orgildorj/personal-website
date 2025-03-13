import { Box, Container, Grid2, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import bsd_energy from "../pictures/bsd_energy.png";
import itestra from "../pictures/itestra.png";

function Experience() {
  return (
    <Box bgcolor="#111827" paddingY={8}>
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography fontSize={40} fontWeight="bold">
            Job Experence so far
          </Typography>
          <Typography
            fontSize={20}
            sx={{ opacity: ".6" }}
            width="50%"
            textAlign="center"
            marginBottom={2}
          >
            I have limited job experience but am eager to learn and grow. I am
            open to new opportunities and excited to develop new skills.
          </Typography>
          <ExperenceItem
            logoSrc={bsd_energy}
            position="Technical Support"
            desc="Maintenance of internal company systems, network and monitoring systems, drawing diagrams for photovoltaic systems and maintaining internal departmental documentation."
            timePeriod="Nov 2023 - Jul 2024"
          />
          <ExperenceItem
            logoSrc={itestra}
            position="Backend Working Student"
            desc="Worked on a project that involved developing a Java Spring software program based on an old C-based program."
            timePeriod="Nov 2022 - Feb 2023"
          />
        </Box>
      </Container>
    </Box>
  );
}

type ExperenceItemProps = {
  logoSrc: string | StaticImageData;
  position: string;
  desc: string;
  timePeriod: string;
};

function ExperenceItem({
  logoSrc,
  position,
  desc,
  timePeriod,
}: ExperenceItemProps) {
  return (
    <Box
      bgcolor="#1F2937"
      borderRadius="10px"
      width="100%"
      padding={4}
      marginY={3}
      sx={{ boxShadow: "0px 25px 25px rgba(0, 0, 0, 0.15)" }}
    >
      <Grid2 container columns={24} flexDirection="row">
        <Grid2 size={7}>
          <Image src={logoSrc} alt="Company logo" width={195} height={0} />
        </Grid2>
        <Grid2 size={10} display="flex" flexDirection="column" rowGap={2}>
          <Typography fontSize={20} fontWeight={550}>
            {position}
          </Typography>
          <Typography fontSize={16}>{desc}</Typography>
        </Grid2>
        <Grid2 size={7}>
          <Typography fontSize={16} sx={{ opacity: ".6" }} textAlign="end">
            {timePeriod}
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Experience;
