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
        to="https://firebasestorage.googleapis.com/v0/b/portfolio-95467.appspot.com/o/Resume_OmondiAlex.pdf?alt=media&token=ff87daad-1c04-4852-b21b-e41e75e074e8"
        target="_blank"
      >
        View Resume <CallMadeIcon />
      </Typography>
    </div>
  );
};

export default Resume;
