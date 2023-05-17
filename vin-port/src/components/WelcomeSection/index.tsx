import Image from "next/image";

import { StyledImg } from "./style";
import GenericContainer from "../GenericContainer";

const WelcomeSection = () => {
  return (
    <GenericContainer>
      <StyledImg
        src="/images/perfil.jpg"
        alt="Photo of Vinícius"
        width={250}
        height={250}
      />
      
      <h2>Hello! iam Vinícius and i am a FullStack Developer</h2>
    </GenericContainer>
  );
};

export default WelcomeSection;
