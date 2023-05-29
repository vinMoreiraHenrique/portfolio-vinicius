"use client";
import { theme } from "@/app/styles/theme";
import styled from "styled-components";

interface IStyledGenericContainerProps {
  as: "section" | "div" | "aside";
  flexdirection?: "column" | "row";
  containerWidth?: string;
}

export const StyledGenericContainer = styled.div<IStyledGenericContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.flexdirection ? "column" : "row")};
  width: ${(props) =>
    props.containerWidth ? props.containerWidth : "fit-content"};
  padding: ${(props) => (props.as == "section" ? "40px 20px" : "20px 20px")};
  gap: 30px;
  background-color: ${theme.colors.primary};
  align-items: center;
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
