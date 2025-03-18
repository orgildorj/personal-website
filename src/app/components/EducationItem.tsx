import { Box, Grid2, Typography } from "@mui/material";
import { motionProps } from "./motionProps";
import Image from "next/image";
import IsTabletOrLarger from "../hooks/IsTabletOrLarger";

type EducationItemProps = {
  degree: string;
  uni: string;
  timePeriod: string;
  logo: string;
  reverse: boolean;
};

function EducationItem({
  degree,
  uni,
  timePeriod,
  logo,
  reverse,
}: EducationItemProps) {
  const isTabletOrLarger = IsTabletOrLarger();

  return (
    <Grid2
      container
      columns={5}
      width="100%"
      {...(reverse ? motionProps.fromRight : motionProps.fromLeft)}
      viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
      flexDirection={reverse && isTabletOrLarger ? "row-reverse" : "row"}
    >
      <Grid2
        size={isTabletOrLarger ? 2 : 4}
        display="flex"
        justifyContent={
          isTabletOrLarger ? (reverse ? "flex-start" : "flex-end") : "center"
        }
        alignItems="center"
        order={isTabletOrLarger ? 1 : 2}
      >
        <Grid2 container display="flex" alignItems="center">
          <Grid2 order={reverse ? 2 : 1}>
            <Box
              bgcolor="#E7E7E7"
              borderRadius="10px"
              height={{ xs: 90, md: 107 }}
              width={{ xs: 260, md: 293 }}
              sx={{ boxShadow: "0px 4px 0px rgba(255, 255, 255, 0.5)" }}
              padding={{ xs: 1.5, md: 2.5 }}
            >
              <Typography color="#1841C9" fontSize={18} fontWeight={550}>
                {degree}
              </Typography>
              <Typography color="black" fontSize={14} fontWeight={550}>
                {uni}
              </Typography>
              <Typography color="black" sx={{ opacity: ".6" }} fontSize={12}>
                {timePeriod}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 order={reverse ? 1 : 2}>
            <Box
              width={0}
              height={0}
              sx={{
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderLeft: reverse ? "" : "20px solid #E7E7E7",
                borderRight: reverse ? "20px solid #E7E7E7" : "",
              }}
              display={isTabletOrLarger ? undefined : "none"}
            />
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2
        size={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        order={isTabletOrLarger ? 2 : 1}
      >
        <LogoCircle logoSrc={logo} />
      </Grid2>
    </Grid2>
  );
}

type LogoCircleProp = {
  logoSrc: string;
};

function LogoCircle({ logoSrc }: LogoCircleProp) {
  const isTabletOrLarger = IsTabletOrLarger();

  return (
    <Box
      width={{ xs: 70, md: 130 }}
      height={{ xs: 70, md: 130 }}
      borderRadius="50%"
      bgcolor="#E7E7E7"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ border: "5px solid gray" }}
    >
      <Image
        src={logoSrc}
        alt=""
        width={isTabletOrLarger ? 98 : 50}
        height={0}
      />
    </Box>
  );
}

export default EducationItem;
