import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: ${theme.fonts.inter};
    vertical-align: baseline;
    box-sizing: border-box;
}

p{
    line-height: 27px;
    max-width: 700px;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
}

a:visited{
    color: inherit
}

body{
    display: flex;
    background-color: ${theme.colors.primary};
    width: 100%;
    align-items: center;
    justify-content: center;
}

main{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.quinary};
    width: 100%;
    margin-top: 68.14px;
}
`;
