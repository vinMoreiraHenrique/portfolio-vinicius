"use client";
import { theme } from "@/app/styles/theme";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

interface ISpan {
  fade: boolean;
}

export const StyledImg = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: 0px -50px;
  transform: scale(1);
  border: 5px solid ${theme.colors.quaternary};
`;

const slideDown = keyframes`
  0%, 100% {
    transform: translateY(-100%);
    opacity: 1;
  }
  50% {
    transform: translateY(0);
    opacity: 0;
  }
`;

// export const TextContainer = styled.div`
//   position: relative;
//   height:200px;
// `;

export const Text = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* animation: ${slideDown} 1s ease-in-out forwards; */
`;

export const StyledText = styled.h2<ISpan>`
overflow: hidden;
  height: 71px;
  span {
    display: inline-block;
    color: yellow;
    animation: ${(props) => (props.fade ? theme.animations.fadeOut : theme.animations.fadeIn)} 1s ease-in-out
    forwards;
    transform: translateY(0px);
    
    
  }
`;