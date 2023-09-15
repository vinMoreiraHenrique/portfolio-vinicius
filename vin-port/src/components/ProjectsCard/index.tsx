"use-client";
import { api } from "@/api";
import GenericContainer from "../GenericContainer";

import { StyledProjectsCard } from "./style";
import { useEffect, useState } from "react";
import { StyledText } from "../StyledText/style";

const ProjectsCard = () => {
  const [repos, setRepos] = useState<any>([]);

  const getRepos = async () => {
    return await api
      .get("/repos")
      .then((response) => {
        setRepos(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRepos();
  }, [repos]);
  return (
    <StyledProjectsCard>
      <GenericContainer as="div" containerFlexDirection="column">
        {repos.length > 0 && repos.map((repo: any) => <StyledText as="p" key={repo.id}>{repo.name}</StyledText>)}
      </GenericContainer>
    </StyledProjectsCard>
  );
};

export default ProjectsCard;
