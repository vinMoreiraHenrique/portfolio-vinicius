import { StyledButton } from "./style";

interface ICommonButton {
  text: string;
  width?: string;
}

const CommonButton = ({ text, width }: ICommonButton) => {
  return (
    <StyledButton width={width}>
      <p>{text}</p>
    </StyledButton>
  );
};

export default CommonButton;
