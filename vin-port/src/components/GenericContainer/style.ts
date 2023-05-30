"use client";
import { theme } from "@/app/styles/theme";
import styled from "styled-components";

interface IStyledGenericContainerProps {
  htmlTag?: "div" | "section";
  containerFlexDirection?: "column" | "row";
  containerWidth?: string;
  justifyContainer?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "space-evenly";
  alignContainer?: "center" | "flex-start" | "flex-end";
  containerHeight?: string;
}

export const StyledGenericContainer = styled.div<IStyledGenericContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.containerFlexDirection || "row"};
  width: ${(props)=> props.containerWidth? props.containerWidth:"fit-content"};
  height: ${(props)=> props.containerHeight? props.containerHeight:"auto"};
  justify-content: ${(props)=> props.justifyContainer? props.justifyContainer : "flex-start"};
  align-items: ${(props)=>props.alignContainer? props.alignContainer: "flex-start"};
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
