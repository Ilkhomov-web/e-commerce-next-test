import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { store } from "../store/store";
const theme = createTheme({
  palette: {
    mode: "light", 
    primary: {
      main: "#1976d2", 
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true, 
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
   
  );
}

export default MyApp;
