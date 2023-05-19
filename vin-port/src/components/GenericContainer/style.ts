"use client"
import { theme } from "@/app/styles/theme";
import styled from "styled-components";

export const StyledGenericContainer = styled.section`
display: flex;
width: 100%;
padding: 40px 20px;
background-color: ${theme.colors.primary};
width: 100%;
h2{
    color: ${theme.colors.secondary};
    font-weight: bolder;
    font-size: 32px;
    width: 500px;
}
`

