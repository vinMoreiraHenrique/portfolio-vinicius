"use client";
import { theme } from "@/app/styles/theme";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  background-color: ${theme.colors.primary};
  width: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:0;
  right: 0;
  z-index: 10;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 1280px;
  padding: 10px 10px;
  align-items: center;
  justify-content: space-between;
  
  h1{
    font-size: 40px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 60%;
    align-items: center;
    li{
      font-family: ${theme.fonts.inter};
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;
