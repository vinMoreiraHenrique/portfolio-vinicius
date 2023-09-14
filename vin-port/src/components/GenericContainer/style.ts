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
  bordercolor?: string;
  borderwidth?: "3px";
  overflow?: "hidden";
}

export const StyledGenericContainer = styled.div<IStyledGenericContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.containerflexdirection || "row"};
  width: ${(props)=> props.containerwidth? props.containerwidth:"fit-content"};
  height: ${(props)=> props.containerheight? props.containerheight:"auto"};
  justify-content: ${(props)=> props.justifycontainer? props.justifycontainer : "flex-start"};
  align-items: ${(props)=>props.aligncontainer? props.aligncontainer: "flex-start"};
  border-color: ${(props)=> props.bordercolor? props.bordercolor: theme.colors.secondary};
  border-width: ${(props)=> props.borderwidth};
  border-style:${(props)=> props.borderwidth? "solid" : "none"};
  overflow: ${(props)=> props.overflow? props.overflow: "hidden"};
  @media (max-width: 865px) {
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
  button {
    align-self: start;
  }
  padding: 40px 20px;
  gap: 30px;
  background-color: ${theme.colors.primary};
  h1{
    color: ${theme.colors.secondary};
    font-size: 2.5rem;
    font-weight: bolder;
    max-width: 700px;
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
