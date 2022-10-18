import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
    scroll-behavior: smooth;
  }

  ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    
  }
`;
