import { StyledGenericContainer } from "./style"
type GenericContainerProps = {
    children: React.ReactNode;
    flexdirection?: "row" | "column";
    containerWidth?: string;
    as: "section" | "div" | "aside";
  };
const GenericContainer = ({ children, flexdirection, containerWidth,as }: GenericContainerProps) => {
    return(
        <StyledGenericContainer flexdirection={flexdirection} as={as} containerWidth={containerWidth}>
            {children}
        </StyledGenericContainer>
    )
}

export default GenericContainer;