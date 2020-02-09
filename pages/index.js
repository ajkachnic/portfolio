
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
    gutterWidth: "12px",
    gutterHeight:"1rem"
  },
  fontFamily: {
    primary: "Inter",
  }
};
export default () => {
  return (
    <ThemeProvider theme={theme}>

      <StyleReset/>
      <App/>
    </ThemeProvider>
  )
}
