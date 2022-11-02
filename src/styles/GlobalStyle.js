import { createGlobalStyle } from "styled-components";
import { corFundo } from "./Variaveis";

export const GlobalStyle = createGlobalStyle`

* {
  
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;  
  
  font-family: 'Raleway', sans-serif;
  
  font-style: normal;
  font-weight: 400;
}

body { 
  background: ${corFundo};
  
}

.drop-zone__thumb {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #cccccc;
  background-size: cover;
  position: relative;
}

.drop-zone__thumb::after {
  content: attr(data-label);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px 0;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.75);
  font-size: 14px;
  text-align: center;
}
`