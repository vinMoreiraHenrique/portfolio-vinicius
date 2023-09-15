"use client";
import { theme } from "@/app/styles/theme";
import { styled } from "styled-components";

interface IText {
  $fade?: boolean;
  as?: string;
  textWidth?: string;
}

export const StyledText = styled.h2<IText>`
  height: 100%;
  vertical-align: text-bottom;
  width: ${(props) => (props.textWidth ? props.textWidth : "auto")};
  color: ${(props) =>
    props.as == "p" ? theme.colors.white : theme.colors.secondary};
  .content-wrapper {
    display: inline-block;
    overflow: hidden;
    vertical-align: text-bottom;
    padding-bottom: 0px;
  }
  .content-span {
    display: inline-block;
    color: yellow;
    animation: ${(props) =>
        props.$fade ? theme.animations.fadeOut : theme.animations.fadeIn}
      1s ease-in-out forwards;
    transform: translateY(0px);
  }
`;
