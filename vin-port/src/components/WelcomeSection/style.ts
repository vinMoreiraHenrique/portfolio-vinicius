"use client"
import { theme } from "@/app/styles/theme";
import Image from "next/image";
import styled from "styled-components";

export const StyledImg = styled(Image)`
border-radius: 50%;
object-fit: cover;
object-position: 0px -50px;
transform: scale(1);
border: 5px solid ${theme.colors.quaternary};
`