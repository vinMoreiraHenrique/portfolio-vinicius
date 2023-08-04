// import Image from "next/image";
// import GenericContainer from "../GenericContainer";
// import { StyledText } from "../StyledText/style";
// import { useEffect, useState } from "react";
// import { api } from "@/api";

// const ProjectsCard = () => {
//   const [text, setText] = useState<any>([]);

//   function getApiData() {
//     api.get("").then((response) => console.log(response.data));
//   }

//   useEffect(() => {
//     getApiData();
//     setText()
//   }, []);

//   return (
//     <GenericContainer as="div" containerFlexDirection="column">
//       <StyledText as="h3">name of the project</StyledText>
//       <StyledText as="p">description of the project</StyledText>
//     </GenericContainer>
//   );
// };
