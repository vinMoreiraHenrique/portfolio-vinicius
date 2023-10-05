"use client";
import { api } from "@/api";
import GenericContainer from "../GenericContainer";

import { StyledProjectsCard } from "./style";
import { useEffect, useState } from "react";
import { StyledText } from "../StyledText/style";

const ProjectsSection = () => {
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
    <GenericContainer as="div" containerFlexDirection="row" containerWidth="100%" justifyContainer="center" alignContainer="center">
      {/* <div>
        <StyledText as="p">{console.log(repos[0].name)}</StyledText>
      </div> */}

      {repos.length > 0 &&
        [0, 3, 5].map((index: number) => (
          <StyledProjectsCard key={repos[index].id}>
            <StyledText as="p">{repos[index].name}</StyledText>
            <StyledText as="p">{repos[index].description}</StyledText>
          </StyledProjectsCard>
        ))}
    </GenericContainer>
  );
};

export default ProjectsSection;
