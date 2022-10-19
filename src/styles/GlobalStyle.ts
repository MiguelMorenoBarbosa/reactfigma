import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#455a64",
  secondary: "#951212",
  third: "#ffb74d",
  thirdLight: "#FFD56A",
  white: "#ffffff",
  black: "#000000",
  success: "#50ba9e",
  danger: "#660000"
}
