"use client";
import { StyledImg, StyledText } from "./style";
import GenericContainer from "../GenericContainer";
import { useEffect, useRef, useState } from "react";
import { keyframes } from "styled-components";
import { css } from "styled-components";
import CommonButton from "../CommonButton";

const textArray = ["Full-stack", "Front-end", "Back-end"];
const WelcomeSection = () => {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((index) => (index + 1) % textArray.length);
        setFade(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <GenericContainer>
      <StyledImg
        src="/images/perfil.jpg"
        alt="Photo of Vinícius"
        width={250}
        height={250}
      />
      
        <StyledText fade={fade}>
          Hello! I am Vinícius and I am a{" "}
          <span ref={textRef}>{textArray[index]}</span> developer.
        </StyledText>

        <CommonButton text="aloooooo" />
  
    </GenericContainer>
  );
};

export default WelcomeSection;
