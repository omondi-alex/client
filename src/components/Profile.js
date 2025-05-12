import { Box, Typography, keyframes } from "@mui/material";
import React, { useEffect, useRef } from "react";
import fazitech from "../assets/imgs/fazitech.png";
import SocialMedia from "./SocialMedia";

// Animations for the profile image
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-8px) rotate(1deg); }
  50% { transform: translateY(0px) rotate(0deg); }
  75% { transform: translateY(8px) rotate(-1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); }
  50% { box-shadow: 0 10px 30px var(--secondary-color); }
  100% { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); }
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

const highlightAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const particleFloat = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
`;

const rotate3D = keyframes`
  0% { transform: perspective(1000px) rotateY(0deg); }
  100% { transform: perspective(1000px) rotateY(360deg); }
`;

const pulseScale = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Profile = ({ isActive, menus, profileImage = fazitech }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--secondary-color);
        border-radius: 50%;
        pointer-events: none;
        animation: ${particleFloat} 3s ease-out forwards;
      `;
      
      // Random position around the profile image
      const angle = Math.random() * Math.PI * 2;
      const radius = 120;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      particle.style.left = `calc(50% + ${x}px)`;
      particle.style.top = `calc(50% + ${y}px)`;
      
      containerRef.current?.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 3000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="profile" sx={{ textAlign: "center" }}>
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          pt: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Profile Image Container */}
        <Box
          sx={{
            position: "relative",
            width: "220px",
            height: "220px",
            perspective: "1000px",
            "&:hover": {
              "& .profile-image": {
                transform: "rotateY(180deg)",
              },
              "& .profile-back": {
                transform: "rotateY(0deg)",
              },
            },
          }}
        >
          {/* Front of Profile Image */}
          <Box
            className="profile-image"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundSize: "cover",
              backgroundImage: `url(${profileImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              border: "4px solid var(--secondary-color)",
              animation: `${floatAnimation} 6s ease-in-out infinite, ${glowAnimation} 4s ease-in-out infinite`,
              transition: "transform 0.8s ease-in-out",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              position: "absolute",
            }}
          />
          
          {/* Back of Profile Image */}
          <Box
            className="profile-back"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "linear-gradient(45deg, var(--secondary-color), var(--accent-color))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotateY(180deg)",
              transition: "transform 0.8s ease-in-out",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              position: "absolute",
              animation: `${pulseScale} 2s ease-in-out infinite`,
              "&::before": {
                content: '""',
                position: "absolute",
                width: "80%",
                height: "80%",
                borderRadius: "50%",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                animation: `${rotate3D} 8s linear infinite`,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                width: "60%",
                height: "60%",
                borderRadius: "50%",
                border: "2px solid rgba(255, 255, 255, 0.1)",
                animation: `${rotate3D} 6s linear infinite reverse`,
              },
            }}
          />
        </Box>

        {/* Name & Title */}
        <Box 
          my={1}
          sx={{
            animation: `${fadeInUp} 0.8s ease-out forwards`,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "50px",
              height: "3px",
              background: "linear-gradient(90deg, transparent, var(--secondary-color), transparent)",
            },
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 900,
              letterSpacing: "1px",
              textTransform: "uppercase",
              mb: 0.5,
              background: "linear-gradient(45deg, var(--secondary-color), var(--accent-color))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: `${highlightAnimation} 3s ease infinite`,
              textShadow: "0 0 20px rgba(var(--secondary-color-rgb), 0.3)",
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
              opacity: 0.9,
              transform: "skewX(-5deg)",
              display: "inline-block",
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
            flexWrap: "wrap",
            animation: `${fadeInUp} 0.8s ease-out 0.2s forwards`,
            opacity: 0,
            position: "relative",
            "&::before, &::after": {
              content: '"✧"',
              color: "var(--secondary-color)",
              mx: 1,
              flexShrink: 0,
              animation: `${highlightAnimation} 3s ease infinite, ${rotate3D} 4s linear infinite`,
              display: "inline-block",
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
        <Box
          sx={{
            animation: `${fadeInUp} 0.8s ease-out 0.4s forwards`,
            opacity: 0,
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--secondary-color), transparent)",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              lineHeight: 1.8,
              px: 3,
              maxWidth: "600px",
              position: "relative",
              "& strong": {
                color: "var(--secondary-color)",
                position: "relative",
                display: "inline-block",
                transition: "transform 0.3s ease",
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
                  transition: "transform 0.3s ease",
                },
              },
              "&:hover strong": {
                transform: "translateY(-2px)",
                "&::after": {
                  transform: "scaleX(1)",
                },
              },
            }}
          >
            Welcome to my digital realm! I'm a{" "}
            <strong>visionary developer</strong> and{" "}
            <strong>security architect</strong> who transforms complex challenges
            into elegant solutions. With a passion for both{" "}
            <strong>cutting-edge technology</strong> and{" "}
            <strong>user-centric design</strong>, I build digital experiences that
            don't just function -they <strong>inspire</strong> and{" "}
            <strong>protect</strong>. Whether it's crafting seamless web
            applications or fortifying systems against cyber threats, I thrive at
            the intersection of creativity and security. Let's build something
            extraordinary together!
          </Typography>
        </Box>
      </Box>

      {/* Social Media Links */}
      <Box 
        sx={{ 
          mt: 3,
          animation: `${fadeInUp} 0.8s ease-out 0.6s forwards`,
          opacity: 0,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "30px",
            height: "3px",
            background: "linear-gradient(90deg, transparent, var(--secondary-color), transparent)",
          },
        }}
      >
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default Profile;
