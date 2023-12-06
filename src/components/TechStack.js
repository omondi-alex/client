import { Box, Typography } from "@mui/material";
import React from "react";

const TechStack = ({ tech }) => {
  return (
    <Box
      sx={{
        padding: "3px 20px",
        marginRight: "5px",
        color: "rgb(94 234 212)",
        backgroundColor: "var(--alternative-color)",
        borderRadius: "50px",
        opacity: "0.9",
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontWeight: 600, color: "var(--secondary-color)" }}
      >
        {tech}
      </Typography>
    </Box>
  );
};

export default TechStack;
