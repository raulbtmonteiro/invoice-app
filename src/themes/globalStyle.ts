import SpartanRegular from "../assets/fonts/Spartan-Regular.ttf";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SpartanRegular";
    font-style: normal;
    src: url(${SpartanRegular}) format("ttf")
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SpartanRegular', sans-serif;
  }
`;
