import { StyledText } from "./style"

interface ICustomText{
as: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
const CustomText = ({as}: ICustomText) => {
    return (
        <StyledText as={as}>

        </StyledText>
    )
}