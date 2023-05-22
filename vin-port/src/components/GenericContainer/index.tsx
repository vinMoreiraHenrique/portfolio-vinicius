import { StyledGenericContainer } from "./style"
type GenericContainerProps = {
    children: React.ReactNode;
    flexdirection?: "row" | "column";
    as: "section" | "div" | "aside";
  };
const GenericContainer = ({ children, flexdirection, as }: GenericContainerProps) => {
    return(
        <StyledGenericContainer flexdirection={flexdirection} as={as}>
            {children}
        </StyledGenericContainer>
    )
}

export default GenericContainer;