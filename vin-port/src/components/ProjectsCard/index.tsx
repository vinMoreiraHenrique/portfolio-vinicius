"use client";
import { api } from "@/api";
import GenericContainer from "../GenericContainer";
import { StyledText } from "../StyledText/style";
import { StyledProjectsCard } from "./style";
import { useEffect, useState } from "react";
import { theme } from "@/app/styles/theme";

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
      <GenericContainer as="div" containerFlexDirection="column" overflow="hidden">
        {repos.length > 0 && repos.map((repo: any) => <StyledText as="p" style={{ color: theme.colors.white }} key={repo.id}>{repo.name}</StyledText>)}
      </GenericContainer>
    </StyledProjectsCard>
  );
};

export default ProjectsCard;
