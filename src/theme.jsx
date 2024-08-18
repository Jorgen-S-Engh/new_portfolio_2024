import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FD6C03",
    },
    background: {
      default: "#000000",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#AAAAAA",
    },
  },
});

export default theme;
