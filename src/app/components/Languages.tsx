"use client";

import { Box, Typography } from "@mui/material";
import { styles } from "./styles";
import { DE, GB, MN } from "country-flag-icons/react/3x2";
import { motionProps } from "./motionProps";
import IsTabletOrLarger from "../hooks/IsTabletOrLarger";

function Languages() {
  const isTabletOrLarger = IsTabletOrLarger();

  return (
    <Box
      height="20vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        sx={styles.sectionTitle}
        {...motionProps.fromLeft}
        viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
      >
        Language
      </Typography>
      <Typography
        sx={styles.sectionSubTitle}
        {...motionProps.fromRight}
        viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
      >
        I speak these languages fluently.
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        columnGap={5}
        marginY={2}
        {...motionProps.appear}
        viewport={isTabletOrLarger ? { amount: 0.2 } : undefined}
      >
        <Box display="flex" flexDirection="row" columnGap={1}>
          <GB title="English" style={{ height: "25px" }} />
          <Typography fontSize={18}>English</Typography>
        </Box>
        <Box display="flex" flexDirection="row" columnGap={1}>
          <DE title="German" style={{ height: "25px" }} />
          <Typography fontSize={18}>German</Typography>
        </Box>
        <Box display="flex" flexDirection="row" columnGap={1}>
          <MN title="Mongolian" style={{ height: "25px" }} />
          <Typography fontSize={18}>Mongolian</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Languages;
