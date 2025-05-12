import React from "react";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

const SocialMedia = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: { xs: 3, sm: 4, md: 5 },
        py: 2,
        "& .MuiIconButton-root": {
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
          },
        },
      }}
    >
      <Tooltip title="LinkedIn" arrow>
        <IconButton
          sx={{
            color: "#0077b5",
            backgroundColor: "rgba(0, 119, 181, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(0, 119, 181, 0.2)",
            },
          }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/omondi-alex/", "_blank")
          }
          size="large"
        >
          <LinkedIn fontSize="medium" />
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub" arrow>
        <IconButton
          sx={{
            color: "#333",
            backgroundColor: "rgba(51, 51, 51, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(51, 51, 51, 0.2)",
            },
          }}
          onClick={() =>
            window.open(
              "https://github.com/omondi-alex?tab=repositories",
              "_blank"
            )
          }
          size="large"
        >
          <GitHub fontSize="medium" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Twitter" arrow>
        <IconButton
          sx={{
            color: "#1da1f2",
            backgroundColor: "rgba(29, 161, 242, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(29, 161, 242, 0.2)",
            },
          }}
          onClick={() => window.open("https://twitter.com/omondi_alex254", "_blank")}
          size="large"
        >
          <Twitter fontSize="medium" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialMedia;
