import { Inter } from "next/font/google";
import { keyframes } from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export const theme = {
  colors: {
    primary: "#101D42",
    secondary: "#496DDB",
    tertiary: "#6DC0D5",
    quaternary: "#BEEDAA",
    quinary: "#136F63",
    white: "#FFFFFF",
    transparent: "transparent",
    buttonGradient: `linear-gradient(90deg, #BEEDAA 50%, #101D42 50%)`,
  },

  fonts: {
    inter: inter.style.fontFamily,
  },

  fontSizes: {},

  buttonSizes: {
    sm: "50px",
    md: "120px",
    bg: "200px;",
  },

  gradients: {},

  animations: {
    appear: keyframes` 
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
      `,

    fadeOut: keyframes`
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        `,

    fadeIn: keyframes`
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          50%{
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        `,
  },
};
