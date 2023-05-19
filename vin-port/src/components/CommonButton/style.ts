"use client";

import { theme } from "@/app/styles/theme";
import { styled } from "styled-components";

interface IStyledButtonProps {
  width?: string;
  height?: string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "40px")};
  background-image: ${theme.colors.buttonGradient};
  background-position: 100% 0;
  background-size: 200% 100%;
  color: white;
  font-family: ${theme.fonts.inter};
  font-weight: bold;
  letter-spacing: 1px;
  transition: background-position 0.5s;
  border-radius: 5px;
  border: 3px solid ${theme.colors.quaternary};
  outline: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;
  transform: translateX(-50px);
  animation: ${theme.animations.appear} 0.5s forwards;

  p {
    color: ${theme.colors.quaternary};
    transition: 0.5s;
  }

  &:hover {
    p {
      color: ${theme.colors.white};
    }
    background-position: 0 0;
  }
`;
