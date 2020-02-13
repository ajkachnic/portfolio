
import { StyleReset, ThemeProvider } from 'atomize';
import App from './App';

const theme = {
  grid: {
    containerMaxWidth: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1156px",
        xl: "1656px"
    },
    gutterWidth: "12px"
  },
  fontFamily: {
    primary: "Inter",
    secondary:"sans-serif"
  },
  colors: {
      black900:"#101010"
  }
};
export default () => {
    const darkTheme = {
        mainBg:"dark",
        altBg: "black900",
        accent:"info600",
        textColor:"white"
    }
    const lightTheme = {
        mainBg:"info100",
        altBg: "white",
        accent:"info600",
        textColor:'dark'
    }
  return (
    <ThemeProvider theme={theme}>

      <StyleReset/>
      <App lightTheme={lightTheme} darkTheme={darkTheme}/>
    </ThemeProvider>
  )
}
