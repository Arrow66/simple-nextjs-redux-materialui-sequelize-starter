import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    // Customize Material-UI with your theme
    // See more here: https://material-ui.com/customization/themes/
    primary: {
      main: "#0084ce",
      light: "#0094ce",
      dark: "#0073ce"
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#cccccc"
    },
    third: {
      main: "#cccccc"
    }
  }
});

export default responsiveFontSizes(theme);
