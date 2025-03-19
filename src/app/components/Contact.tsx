"use client";

import {
  Box,
  Container,
  Grid2,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
// import email_logo from "../pictures/email_logo.png";
import contact_bg from "../pictures/contact_bg_black.png";
import prof_pic from "../pictures/contact-prof-pic.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import IsTabletOrLarger from "../hooks/IsTabletOrLarger";
import { styles } from "./styles";
import { useState } from "react";

function Contact() {
  const isTabletOrLarger = IsTabletOrLarger();

  const [copied, setCopied] = useState(false);

  const email: string = "orgil.dorj720@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <Box
      // height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor={styles.lightGray}
      paddingY={8}
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

            <Box marginY={2} display="flex" columnGap={2} alignItems="center">
              <EmailOutlinedIcon />

              <Typography fontSize={20}>orgil.dorj720@gmail.com</Typography>

              <Tooltip title={copied ? "Copied!" : "Copy"}>
                <IconButton onClick={handleCopy}>
                  <ContentCopyOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid2>
          <Grid2
            size={6}
            display="flex"
            flexDirection="row"
            alignItems="center"
            position="relative"
          >
            <Image
              src={contact_bg}
              alt=""
              style={{ position: "absolute", height: "100%" }}
            />
            <Box
              width={259}
              height={121}
              borderRadius={2}
              bgcolor="#F5F5F5"
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
                  style={{ borderRadius: "50%" }}
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
