import { StyledGenericContainer } from "./style"
type GenericContainerProps = {
    children: React.ReactNode;
  };
const GenericContainer = ({ children }: GenericContainerProps) => {
    return(
        <StyledGenericContainer>
            {children}
        </StyledGenericContainer>
    )
}

export default GenericContainer;