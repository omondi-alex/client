import React, { useState, useEffect } from "react";
import Project from "./Project";
import { Container, Divider, Grid, Skeleton, Typography, Box } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ScreenHeading from "./ScreenHeading/ScreenHeading";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

const Projects = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const skeletonVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    pulse: {
      scale: [1, 1.02, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, var(--secondary-color), transparent)",
              animation: "gradientFlow 3s ease infinite",
            },
            "@keyframes gradientFlow": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            }
          }}
        >
          <ScreenHeading
            title="Services"
            subHeading="Services Courtesy of DomainTechnologies"
          />
        </Box>
      </motion.div>

      {data.length === 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={3} my={2}>
            {[1, 2, 3, 4].map((i) => (
              <Grid container spacing={3} my={2} key={i}>
                <Grid item xs={12} md={5}>
                  <motion.div
                    variants={skeletonVariants}
                    animate="pulse"
                  >
                    <Skeleton
                      sx={{ 
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.15)",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                        }
                      }}
                      variant="rectangular"
                      width="100%"
                      height="100%"
                    />
                  </motion.div>
                </Grid>
                <Grid container item xs={12} md={7}>
                  <motion.div
                    variants={skeletonVariants}
                    animate="pulse"
                  >
                    <Skeleton
                      variant="text"
                      width="80%"
                      sx={{ 
                        fontSize: "1rem",
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                      }}
                    />
                    <Skeleton
                      variant="text"
                      width="80%"
                      height="20px"
                      sx={{ 
                        fontSize: ".875rem",
                        bgcolor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "8px",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </motion.div>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y }}
      >
        <AnimatePresence>
          {data &&
            data?.slice(0, 6).map((work, i) => (
              <motion.div
                style={{ marginBottom: "30px" }}
                key={i}
                variants={itemVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={hoveredIndex === i ? "hover" : "visible"}
                exit={{ 
                  opacity: 0,
                  y: -50,
                  transition: { duration: 0.2 }
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(45deg, var(--secondary-color), var(--accent-color))",
                      opacity: hoveredIndex === i ? 0.15 : 0,
                      transition: "opacity 0.3s ease",
                      borderRadius: "12px",
                      zIndex: -1,
                      filter: "blur(10px)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: "2px solid transparent",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                      opacity: hoveredIndex === i ? 1 : 0,
                      background: "linear-gradient(45deg, var(--secondary-color), var(--accent-color))",
                      WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      maskComposite: "exclude",
                      transform: hoveredIndex === i ? "scale(1.02)" : "scale(1)",
                      boxShadow: hoveredIndex === i ? "0 10px 30px rgba(0,0,0,0.2)" : "none",
                    },
                  }}
                >
                  <Project data={work} />
                </Box>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: '2px',
            my: 6,
            mx: -8,
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, var(--secondary-color), var(--accent-color), var(--secondary-color), transparent)',
              animation: 'flowingLine 3s linear infinite',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'var(--secondary-color)',
              boxShadow: '0 0 20px var(--secondary-color)',
              animation: 'pulse 2s infinite',
            },
            '@keyframes flowingLine': {
              '0%': { backgroundPosition: '200% 0' },
              '100%': { backgroundPosition: '-200% 0' },
            },
            '@keyframes pulse': {
              '0%': { 
                boxShadow: '0 0 0 0 rgba(var(--secondary-color-rgb), 0.4)',
                transform: 'translate(-50%, -50%) scale(1)'
              },
              '70%': { 
                boxShadow: '0 0 0 15px rgba(var(--secondary-color-rgb), 0)',
                transform: 'translate(-50%, -50%) scale(1.2)'
              },
              '100%': { 
                boxShadow: '0 0 0 0 rgba(var(--secondary-color-rgb), 0)',
                transform: 'translate(-50%, -50%) scale(1)'
              },
            },
          }}
        />
      </motion.div>
    </Container>
  );
};

export default Projects;
