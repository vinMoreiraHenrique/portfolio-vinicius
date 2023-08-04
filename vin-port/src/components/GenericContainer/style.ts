"use client";
import { theme } from "@/app/styles/theme";
import styled from "styled-components";

interface IStyledGenericContainerProps {
  htmlTag?: "div" | "section";
  containerflexdirection?: "column" | "row";
  containerwidth?: string;
  justifycontainer?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "space-evenly";
  aligncontainer?: "center" | "flex-start" | "flex-end";
  containerheight?: string;
}

export const StyledGenericContainer = styled.div<IStyledGenericContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.containerflexdirection || "row"};
  width: ${(props)=> props.containerwidth? props.containerwidth:"fit-content"};
  height: ${(props)=> props.containerheight? props.containerheight:"auto"};
  justify-content: ${(props)=> props.justifycontainer? props.justifycontainer : "flex-start"};
  align-items: ${(props)=>props.aligncontainer? props.aligncontainer: "flex-start"};
  @media (max-width: 865px) {
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
  button {
    align-self: start;
  }
  h2 {
    color: ${theme.colors.secondary};
    font-weight: bolder;
    font-size: 2rem;
    text-align: justify;
    max-width: 500px;
    min-width: 50px;
  }
`;
