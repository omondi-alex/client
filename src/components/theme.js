import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: ".875rem", // Set the base font size
    h1: {
      fontSize: "2rem", // Example heading font size
    },
    body1: {
      fontSize: ".875rem", // Example body text font size
    },
    body2: {
      fontSize: 18, // Example body text font size
    },
    // Additional styles for other typography variants
  },
});

export default theme;
