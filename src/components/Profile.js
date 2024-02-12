import { Box, Typography } from "@mui/material";
import React from "react";
import fazitech from "../assets/imgs/fazitech.png";
import SocialMedia from "./SocialMedia";

const Profile = ({ isActive, menus }) => {
  return (
    <Box className="profile">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "180px",
            height: "260px",
            borderRadius: "50%",
            backgroundSize: "cover",
            backgroundImage: `url(${fazitech})`,
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box my={2} textAlign="center">
          <Typography
            className="title-heading"
            variant="h4"
            component="h3"
            sx={{ fontWeight: 900, color: "var(--secondary-color)" }}
          >
            OMONDI ALEX
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            (DomainTechnologies)
          </Typography>
          <Typography
            variant="h6"
            component="h5"
            my={1}
            sx={{ fontWeight: 900, color: "var(--secondary-color)" }}
          >
            The Solution To All Your Software Needs | Simplifying Your Digital
            Journey.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Dive into a world of innovation and excellence with me! I'm all
            about creating amazing online experiences that help businesses
            thrive. Boost your brand with a website that goes beyond your
            expectations, leaving a lasting impression on your audience. Let's
            make your digital journey extraordinary!
          </Typography>
        </Box>
      </Box>
      <SocialMedia />
    </Box>
  );
};

export default Profile;
