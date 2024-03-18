import { Box, Typography } from "@mui/material";
import React from "react";
import ScreenHeading from "./ScreenHeading/ScreenHeading";

const About = () => {
  return (
    <Box
      className="fade-in"
      textAlign="justify"
      sx={{
        marginTop: "30px",
      }}
    >
      <ScreenHeading title="whoami" subHeading="Get to know me" />
      <Typography variant="body1" mt={2} sx={{ fontWeight: 400 }}>
        "Hello!👋, I'm a tech enthusiast and dedicated Software Developer and Security Engineer
        interested in exploring emerging technologies such as Data science and
        Artificial Intelligence (AI)🚀, Originating from Kenya. I hold a
        Bachelor of Computer Science and have achieved remarkable success in my
        academic and professional pursuits, alongside my leadership journey. I'm
        pursuing my Master's degree in Computer Security at AIMS-Senegal as a
        Bending Spoon's and Master Card Scholar. I am driven to create a
        significant impact in both AI and Cyber Security fields, aiming to
        Inspire future generations to reach for the stars through the power of
        education.👩‍🎓👨‍🎓
      </Typography>
      <Typography variant="body1" mt={2} sx={{ fontWeight: 400 }}>
        As an ALUMNI of The Young Professional Mentorship Program (YPMP), My
        commitment to personal and professional growth is evident. My Software
        Engineering, Android Development, and Virtual Assistance certifications
        further underscore my commitment to staying at the forefront of
        technology trends.
      </Typography>

      <Typography variant="body1" mt={2} sx={{ fontWeight: 400 }}>
        I look forward to embracing new challenges and creating remarkable
        digital experiences with each project. Let's connect and make things
        happen!"
      </Typography>
    </Box>
  );
};

export default About;
