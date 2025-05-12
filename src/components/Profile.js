import { Box, Typography, keyframes } from "@mui/material";
import React from "react";
import fazitech from "../assets/imgs/fazitech.png";
import SocialMedia from "./SocialMedia";

// Animation for the profile image hover effect
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const Profile = ({ isActive, menus }) => {
  return (
    <Box className="profile" sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          pt: 10, // Added top padding to push content down
        }}
      >
        {/* Animated Profile Image */}
        <Box
          sx={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            backgroundSize: "cover",
            backgroundImage: `url(${fazitech})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            border: "4px solid var(--secondary-color)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              animation: `${floatAnimation} 3s ease-in-out infinite`,
            },
          }}
        ></Box>

        {/* Name & Title */}
        <Box my={1}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 900,
              color: "var(--secondary-color)",
              letterSpacing: "1px",
              textTransform: "uppercase",
              mb: 0.5,
            }}
          >
            OMONDI ALEX
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              color: "var(--accent-color)",
              fontStyle: "italic",
            }}
          >
            (DomainTechnologies)
          </Typography>
        </Box>

        {/* Tagline */}
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 700,
            color: "var(--dark-orange)",

            mb: 2,
            px: 2,
            lineHeight: 1.4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap", // Allows wrapping if needed
            "&::before, &::after": {
              content: '"✧"',
              color: "var(--secondary-color)",
              mx: 1,
              flexShrink: 0,
            },
            "@media (max-width: 400px)": {
              fontSize: "0.9rem",
              "&::before": {
                alignSelf: "flex-start",
                mt: "0.3em",
              },
              "&::after": {
                alignSelf: "flex-start",
                mt: "0.3em",
              },
            },
          }}
        >
          Crafting Digital Excellence | Where Innovation Meets Security
        </Typography>

        {/* Introduction */}
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            lineHeight: 1.8,
            px: 3,
            maxWidth: "600px",
            "& strong": {
              color: "var(--secondary-color)",
            },
          }}
        >
          Welcome to my digital realm! I’m a{" "}
          <strong>visionary developer</strong> and{" "}
          <strong>security architect</strong> who transforms complex challenges
          into elegant solutions. With a passion for both{" "}
          <strong>cutting-edge technology</strong> and{" "}
          <strong>user-centric design</strong>, I build digital experiences that
          don’t just function -they <strong>inspire</strong> and{" "}
          <strong>protect</strong>. Whether it’s crafting seamless web
          applications or fortifying systems against cyber threats, I thrive at
          the intersection of creativity and security. Let’s build something
          extraordinary together!
        </Typography>
      </Box>

      {/* Social Media Links */}
      <Box sx={{ mt: 3 }}>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default Profile;
