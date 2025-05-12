import { Box, Typography, keyframes } from "@mui/material";
import React from "react";
import ScreenHeading from "./ScreenHeading/ScreenHeading";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const underlineAnimation = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const About = () => {
  return (
    <Box
      className="fade-in"
      sx={{
        marginTop: "30px",
        animation: `${fadeIn} 1s ease-out`,
        textAlign: { xs: "center", sm: "center", md: "justify" },
        maxWidth: { xs: '100%', sm: 600, md: 'none' },
        mx: { xs: 0, sm: 'auto', md: 0 },
        px: { xs: 0, sm: 4 },
      }}
    >
      <ScreenHeading title="whoami" subHeading="Get to know me" />
      <Typography
        variant="body1"
        mt={2}
        sx={{ 
          fontWeight: 400,
          lineHeight: 1.8,
          paddingY: "15px",
          paddingX: { xs: 0, sm: 2 },
          borderRadius: "8px",
          transition: "all 0.3s ease",
          opacity: 0,
          animation: `${fadeInUp} 0.8s ease-out 0s forwards`,
          "&:hover": {
            backgroundColor: "rgba(var(--secondary-color-rgb), 0.05)",
            transform: "translateX(5px)",
          },
          "& strong": {
            color: "var(--secondary-color)",
            position: "relative",
            display: "inline-block",
            transition: "color 0.3s ease, transform 0.3s ease",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "2px",
              background: "linear-gradient(90deg, var(--secondary-color), transparent)",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.3s ease, background 0.3s ease",
            },
          },
          "&:hover strong": {
            color: "var(--accent-color)",
            transform: "translateY(-2px)",
            "&::after": {
              transform: "scaleX(1)",
              background: "linear-gradient(90deg, var(--accent-color), transparent)",
            },
          },
        }}
      >
        I'm a <strong>Cybersecurity Solutions Developer</strong> and{" "}
        <strong>Full-Stack Engineer</strong>, currently designing and developing
        secure systems at <strong>Enovice Group</strong>. There, I implement
        robust security solutions while staying at the forefront of threat
        detection. I also manage their web infrastructure - handling backups, CMS
        optimization, and security hardening. As a{" "}
        <strong>MasterCard Scholar</strong> pursuing my MSc in Computer Security
        at AIMS-Senegal, I bridge theory and practice, with my research on{" "}
        <strong>FinTech security frameworks</strong> published in IJRP/IJRAS and
        presented at Kirinyaga University's 8th Annual International Conference.
      </Typography>

      <Typography 
        variant="body1" 
        mt={2} 
        sx={{ 
          fontWeight: 400,
          lineHeight: 1.8,
          paddingY: "15px",
          paddingX: { xs: 0, sm: 2 },
          borderRadius: "8px",
          transition: "all 0.3s ease",
          opacity: 0,
          animation: `${fadeInUp} 0.8s ease-out 0.2s forwards`,
          "&:hover": {
            backgroundColor: "rgba(var(--secondary-color-rgb), 0.05)",
            transform: "translateX(5px)",
          },
          "& strong": {
            color: "var(--secondary-color)",
            position: "relative",
            display: "inline-block",
            transition: "color 0.3s ease, transform 0.3s ease",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "2px",
              background: "linear-gradient(90deg, var(--secondary-color), transparent)",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.3s ease, background 0.3s ease",
            },
          },
          "&:hover strong": {
            color: "var(--accent-color)",
            transform: "translateY(-2px)",
            "&::after": {
              transform: "scaleX(1)",
              background: "linear-gradient(90deg, var(--accent-color), transparent)",
            },
          },
        }}
      >
        Beyond development, I'm passionate about{" "}
        <strong>Mentorship and Volunteering</strong>. At the Young Professional
        Mentorship Program, I served as a Mentor for the Class of 2024. I
        currently hold dual roles as <strong>Web Manager</strong> (overseeing
        site maintenance, content updates, and performance analytics) and{" "}
        <strong>Graphic Designer</strong>, creating compelling visuals for their
        social media platforms. As a former ICT Officer for Kenya's Ministry of
        Education, I trained pupils, students, and educators in Digital
        Literacy, cyber resilience, and secure IT practices - bridging the gap
        between technology and end-users. Additionally, I developed and
        delivered a comprehensive{" "}
        <strong>ICT/Digital Literacy Curriculum and Policies</strong> for
        educators and students.
      </Typography>

      <Typography 
        variant="body1" 
        mt={2} 
        sx={{ 
          fontWeight: 400,
          lineHeight: 1.8,
          paddingY: "15px",
          paddingX: { xs: 0, sm: 2 },
          borderRadius: "8px",
          transition: "all 0.3s ease",
          opacity: 0,
          animation: `${fadeInUp} 0.8s ease-out 0.4s forwards`,
          "&:hover": {
            backgroundColor: "rgba(var(--secondary-color-rgb), 0.05)",
            transform: "translateX(5px)",
          },
          "& strong": {
            color: "var(--secondary-color)",
            position: "relative",
            display: "inline-block",
            transition: "color 0.3s ease, transform 0.3s ease",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "2px",
              background: "linear-gradient(90deg, var(--secondary-color), transparent)",
              transform: "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 0.3s ease, background 0.3s ease",
            },
          },
          "&:hover strong": {
            color: "var(--accent-color)",
            transform: "translateY(-2px)",
            "&::after": {
              transform: "scaleX(1)",
              background: "linear-gradient(90deg, var(--accent-color), transparent)",
            },
          },
        }}
      >
        My technical versatility spans:
        <br />• <strong>Web Development & Management</strong> (Full-stack
        solutions, CMS optimization)
        <br />• <strong>Management Solutions Development</strong> (Custom ERP
        systems, workflow automation)
        <br />• <strong>Cross-Platform Mobile Applications</strong>{" "}
        (Android/Kotlin with security focus)
        <br />• <strong>ICT Capacity Building</strong> (Cybersecurity best
        practices to digital literacy)
        <br />
        <br />
        Whether you need to <strong>secure systems</strong>,{" "}
        <strong>optimize web presence</strong>, or{" "}
        <strong>build technical capacity</strong>, I bring both engineering
        precision and educational clarity to every project.
      </Typography>
    </Box>
  );
};

export default About;
