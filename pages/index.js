
import { StyleReset, ThemeProvider } from 'atomize';
import App from './App';
import { useState } from 'react'

const mainTheme = {
  grid: {
    containerMaxWidth: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1156px",
        xl: "10000px"
    },
    gutterWidth: {
      xs:"2px",
      md:"12px"
    }
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
    const [isDark, setDark] = useState(true)

    const lightTheme = {
        ...mainTheme,
        colors : {
            highlight:"#0284FE",
            backgroundColor:"#EEF7FF",
            altBgColor:"#ffffff",
            foregroundColor:"#000000",
            altFgColor:"#151515"
        }
    }
    const darkTheme = {
        ...mainTheme,
        colors : {
            highlight:"#0284FE",
            backgroundColor:"#02070e",
            altBgColor:"#040c17",
            foregroundColor:"#F8FBFF",
            altFgColor:"#EEEEEE"
        }
    }
  return (
    <ThemeProvider theme={isDark?darkTheme:lightTheme}>

      <StyleReset/>
      <App setTheme={setDark} current={isDark}/>
    </ThemeProvider>
  )
}
