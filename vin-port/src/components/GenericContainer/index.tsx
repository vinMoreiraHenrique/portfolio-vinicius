import { StyledGenericContainer } from "./style";
type GenericContainerProps = {
  children: React.ReactNode;
  containerFlexDirection?: "row" | "column";
  containerWidth?: string;
  justifyContainer?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  as: "section" | "div" | "aside";
  containerHeight?: string;
  alignContainer?: "center" | "flex-start" | "flex-end";
  borderColor?: string;
  borderWidth?:"3px";
  overflow?: "hidden";
};
const GenericContainer = ({
  children,
  containerFlexDirection,
  containerWidth,
  justifyContainer,
  as,
  containerHeight,
  alignContainer,
  borderColor,
  borderWidth,
  overflow
}: GenericContainerProps) => {
  return (
    <StyledGenericContainer
      containerflexdirection={containerFlexDirection}
      containerwidth={containerWidth}
      justifycontainer={justifyContainer}
      as={as}
      containerheight={containerHeight}
      aligncontainer={alignContainer}
      bordercolor={borderColor}
      borderwidth={borderWidth}
      overflow={overflow}
    >
      {children}
    </StyledGenericContainer>
  );
};


export default GenericContainer;
