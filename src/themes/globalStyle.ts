import SpartanRegular from "../assets/fonts/Spartan-Regular.ttf";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Spartan";
    font-style: normal;
    src: url(${SpartanRegular});
    font-display: swap;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spartan', sans-serif;
  }

  body{
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }: any) => theme.colors.textHighlight};
      border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${({ theme }: any) => theme.colors.body};
    }
  }
`;
