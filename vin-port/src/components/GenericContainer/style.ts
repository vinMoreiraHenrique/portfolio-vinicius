"use client";
import { theme } from "@/app/styles/theme";
import styled from "styled-components";

interface IStyledGenericContainerProps {
  htmlTag?: "div" | "section";
  flexdirection?: "column" | "row";
  
}

export const StyledGenericContainer = styled.div<IStyledGenericContainerProps>`
display: flex;
flex-direction: ${props=> props.flexdirection? "column":"row"};
width: fit-content;
padding: 40px 20px;
gap: 40px;
background-color: ${theme.colors.primary};
h2{
    color: ${theme.colors.secondary};
    font-weight: bolder;
    font-size: 32px;
    width: 500px;
}
`
