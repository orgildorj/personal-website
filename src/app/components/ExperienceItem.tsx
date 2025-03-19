import Image, { StaticImageData } from "next/image";
import IsTabletOrLarger from "../hooks/IsTabletOrLarger";
import { Box, Grid2, Typography } from "@mui/material";
import { motionProps } from "./motionProps";
import { styles } from "./styles";

type ExperenceItemProps = {
  logoSrc: string | StaticImageData;
  logoWidth: number;
  position: string;
  desc: string;
  timePeriod: string;
  motionLeft?: boolean;
};

function ExperienceItem({
  logoSrc,
  logoWidth,
  position,
  desc,
  timePeriod,
  motionLeft = true,
}: ExperenceItemProps) {
  const isTabletOrLarger = IsTabletOrLarger();

  return (
    <Box
      bgcolor={styles.lightGray}
      borderRadius="10px"
      width="100%"
      padding={4}
      marginY={3}
      sx={{ boxShadow: "0px 1px 15px rgba(161, 164, 230, 0.33)" }}
      {...(motionLeft ? motionProps.fromLeft : motionProps.fromRight)}
      viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <Grid2
        container
        columns={24}
        flexDirection={isTabletOrLarger ? "row" : "column"}
        rowGap={isTabletOrLarger ? 0 : 2}
      >
        <Grid2
          size={isTabletOrLarger ? 7 : 24}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={logoSrc}
            alt="Company logo"
            width={logoWidth}
            height={0}
          />
        </Grid2>
        <Grid2
          size={isTabletOrLarger ? 10 : 24}
          display="flex"
          flexDirection="column"
          rowGap={2}
        >
          <Typography
            fontSize={20}
            fontWeight={550}
            color={styles.secondaryColor}
          >
            {position}
          </Typography>
          <Typography fontSize={16}>{desc}</Typography>
        </Grid2>
        <Grid2 size={isTabletOrLarger ? 7 : 24}>
          <Typography
            fontSize={16}
            sx={{ opacity: ".6" }}
            textAlign={isTabletOrLarger ? "end" : "start"}
          >
            {timePeriod}
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default ExperienceItem;
