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
  const [fadeAnimation, setFadeAnimation] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeAnimation(true);
      setTimeout(() => {
        setIndex((index) => (index + 1) % textArray.length);
        setFadeAnimation(false);
      }, 800);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <GenericContainer as="section">
      <StyledImg
        src="/images/perfil.jpg"
        alt="Photo of Vinícius"
        width={250}
        height={250}
      />
      
        <GenericContainer as="div" flexdirection="column">
          <StyledText $fade={fadeAnimation}>
            Hello! I am Vinícius and I am a {" "}
             <span className="content-wrapper"><span className="content-span" ref={textRef}>{textArray[index]}</span></span> developer.
          </StyledText>
          <CommonButton text="Hire me" />
        </GenericContainer>
  
    </GenericContainer>
  );
};

export default WelcomeSection;
