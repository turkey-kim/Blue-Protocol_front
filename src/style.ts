import { createGlobalStyle, DefaultTheme } from "styled-components";
import "./App.css";

export interface Icolor {
  bg50: string;
  bg100: string;
  bg150: string;
  bg200: string;
  dark100: string;
  dark150: string;
  dark200: string;
  white: string;
  black: string;
  lightGreen: string;
  green: string;
}

export interface IfontSize {
  small: string;
  mediumSmall: string;
  medium: string;
  large: string;
  extraLarge: string;
}

interface Theme {
  color: Icolor;
  fontSize: IfontSize;
}

const color = {
  bg50: "#b2dfe1",
  bg100: "#b2dfe1",
  bg150: "#b2dfe1",
  bg200: "#b2dfe1",
  dark100: "#585858",
  dark150: "#404040",
  dark200: "#333333",
  white: "#FFFFFF",
  black: "#262626",
  lightGreen: "#4ef037",
  green: "#00bd56",
};

const fontSize = {
  small: "5px",
  mediumSmall: "10px",
  medium: "15px",
  large: "20px",
  extraLarge: "25px",
};

export const myTheme: DefaultTheme = {
  color,
  fontSize,
};

export const MyGlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.color?.white};
        font-size : ${(props) => props.theme.fontSize?.medium};
        color : ${(props) => props.theme.color?.black};
        
    }
`;
