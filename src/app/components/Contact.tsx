"use client";

import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import email_logo from "../pictures/email_logo.png";
import contact_bg from "../pictures/contact_bg.png";
import prof_pic from "../pictures/contact-prof-pic.png";

function Contact() {
  const isTabletOrLarger = useMediaQuery("(min-width:768px)");

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="#111827"
    >
      <Container>
        <Grid2
          container
          columns={isTabletOrLarger ? 12 : 6}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid2
            size={6}
            display="flex"
            flexDirection="column"
            alignItems={isTabletOrLarger ? undefined : "center"}
            justifyContent="center"
          >
            <Typography fontSize={40} fontWeight="bold">
              Contact
            </Typography>
            <Typography
              fontSize={18}
              sx={{ opacity: ".6" }}
              marginY={isTabletOrLarger ? 8 : 2}
            >
              You can contact me via my email.
            </Typography>
            <Box marginY={4} display="flex" columnGap={4}>
              <Image src={email_logo} alt="email" width={70} height={0} />
              <Box>
                <Typography fontSize={16} sx={{ opacity: ".6" }}>
                  Email
                </Typography>
                <Typography fontSize={20} fontWeight={550}>
                  orgil.dorj720@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            size={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            position="relative"
          >
            <Image src={contact_bg} alt="" style={{ position: "absolute" }} />
            <Box
              width={259}
              height={121}
              borderRadius={2}
              bgcolor="rgba(255, 255, 255, 0.05)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding={3}
              position="relative"
              top="30%"
            >
              <Typography>
                &quot;&quot;I would be very happy to receive a message from
                you.&quot;&quot;
              </Typography>
            </Box>
            <Box
              width={110}
              height={110}
              borderRadius="50%"
              bgcolor="rgba(255, 255, 255, 0.05)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              bottom="-40%"
              left="30%"
            >
              <Box
                width={84}
                height={84}
                borderRadius="50%"
                bgcolor="rgba(255, 255, 255, 0.05)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={prof_pic}
                  alt=""
                  width={60}
                  height={0}
                  style={{ borderRadius: "50%", overflow: "hidden" }}
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Contact;
