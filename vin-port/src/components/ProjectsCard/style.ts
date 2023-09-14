"use client";
import { theme } from "@/app/styles/theme";
import { styled } from "styled-components";

export const StyledProjectsCard = styled.div<any>`
  display: flex;
  flex-direction: column;
  border: 2px solid ${theme.colors.secondary};
  width: 300px;
  height: 400px;
`;
