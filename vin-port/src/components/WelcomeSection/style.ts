"use client";
import { theme } from "@/app/styles/theme";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

interface ISpan {
  $fade: boolean;
}

const rotate = keyframes`
100%{
  transform:translateX(0px);
  opacity: 1;
}`;

export const StyledImg = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: 0px -50px;
  transform: scale(1);
  border: 5px solid ${theme.colors.quaternary};
  transform: translateX(-110px);
  opacity: 0;
  animation: ${rotate} 0.7s ease-in-out forwards;
`;

export const StyledText = styled.h2<ISpan>`
  overflow: hidden;
  height: 69px;
  vertical-align: text-bottom;
  span {
    display: inline-block;
    color: yellow;
    animation: ${(props) =>
        props.$fade ? theme.animations.fadeOut : theme.animations.fadeIn}
      1s ease-in-out forwards;
    transform: translateY(0px);
  }
`;
