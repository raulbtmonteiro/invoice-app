import { createGlobalStyle } from "styled-components";
import SpartanRegular from "../assets/fonts/Spartan-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SpartanRegular";
    src: url(${SpartanRegular}) format("ttf")
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SpartanRegular', sans-serif;
  }
`;
