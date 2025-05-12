import React from "react";
import Experience from "./Experience";
import ScreenHeading from "./ScreenHeading/ScreenHeading";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CallMadeIcon from "@mui/icons-material/CallMade";

const Resume = ({ data }) => {
  return (
    <div
      style={{
        paddingY: "10px",
      }}
    >
      <ScreenHeading title="Resume" subHeading="Career Path" />
      {data.slice(0, 5).map((exp, i) => (
        <Experience key={i} data={exp} />
      ))}
      <Typography
        sx={{
          marginTop: "50px",
          textDecoration: "none",
          color: "#fff",
          ":hover": {
            color: "var(--dark-orange)",
            cursor: "pointer",
          },
        }}
        variant="h5"
        component={Link}
        to="https://docs.google.com/document/d/1RmG-OiiYxcYIQZM38R-3hfjc-opxXQPOk9aKTLzWT7s/edit?usp=sharing"
        target="_blank"
      >
        View Resume <CallMadeIcon />
      </Typography>
    </div>
  );
};

export default Resume;
