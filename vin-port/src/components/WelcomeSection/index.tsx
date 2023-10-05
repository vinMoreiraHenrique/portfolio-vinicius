"use client";
import { StyledImg } from "./style";
import { useEffect, useRef, useState } from "react";
import CommonButton from "../CommonButton";
import { StyledText } from "../StyledText/style";
import GenericContainer from "../GenericContainer";

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
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <GenericContainer
      as="section"
      containerWidth="100%"
      justifyContainer="center"
      containerHeight="90vh"
      alignContainer="center"
    >

      <StyledImg
        src="/images/perfil.jpg"
        alt="Photo of Vinícius"
        width={250}
        height={250}
      />
      <GenericContainer as="div" containerFlexDirection="column" containerHeight="fit-content" alignContainer="center">
        <StyledText $fade={fadeAnimation} as="h1" >
          Hello! I am Vinícius and I am a{" "}
          <span className="content-wrapper">
            <span className="content-span" ref={textRef}>
              {textArray[index]}
            </span>
          </span>{" "}
          developer.
        </StyledText>
        <CommonButton text="Hire me" />
      </GenericContainer>
    </GenericContainer>
  );
};

export default WelcomeSection;
