import { Box, Container, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import email_logo from "../pictures/email_logo.png";
import contact_bg from "../pictures/contact_bg.png";

function Contact() {
  return (
    <Box marginY={12}>
      <Container>
        <Grid2 container>
          <Grid2 size={6}>
            <Typography fontSize={40} fontWeight="bold">
              Contact
            </Typography>
            <Typography fontSize={18} sx={{ opacity: ".6" }} marginY={8}>
              You can contact me via the two contacts below.
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
              ></Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Contact;
