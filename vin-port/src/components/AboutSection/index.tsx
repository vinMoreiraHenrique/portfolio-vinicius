"use client"
import GenericContainer from "../GenericContainer";
import ProjectsSection from "../ProjectsSection";
import { StyledProjectsCard } from "../ProjectsSection/style";
import { StyledText } from "../StyledText/style";
import { StyledImg } from "../WelcomeSection/style";

const AboutSection = () => {
  return (
    <GenericContainer
      as="section"
      justifyContainer="center"
      containerWidth="100%"
    >
      <GenericContainer
        as="div"
        alignContainer="center"
        containerFlexDirection="column"
        containerHeight="100vh"
      >
        <StyledImg
          src="/images/perfil.jpg"
          alt="Photo of Vinícius"
          width={250}
          height={250}
        />
        <StyledText as="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          quibusdam vero eum nesciunt odio sint saepe qui perferendis id
          officiis, animi corporis optio sequi molestiae assumenda ab sunt earum
          alias. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio,
          dolorum itaque quidem totam quam fugiat eaque iure provident aperiam
          dolores sed debitis deleniti possimus minima labore exercitationem
          alias eos aspernatur? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Asperiores, officia labore.
        </StyledText>
      </GenericContainer>
      
    </GenericContainer>
  );
};

export default AboutSection;
