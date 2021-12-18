import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import AvatarImg from "../assets/AvatarImage2.png";
import AvatarImg2 from "../assets/AvatarImage3.png";

const Projects = () => {
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImg} alt="Projeto Bingo (Open Source)" />
        </Avatar>
        <Detail>
          <Title>Collab Bingo "Open Source"</Title>
          <SubTitle>Projeto com time de desenvolvedores.</SubTitle>
        </Detail>
      </Project>

      <Project>
        <Avatar>
          <img src={AvatarImg2} alt="Tip Calculator" />
        </Avatar>
        <Detail>
          <Title>Tip Calculator - Pessoal</Title>
          <SubTitle>Projeto para gerar Gorjetas</SubTitle>
        </Detail>
      </Project>

      <AllProjects>Mostrar todos projetos</AllProjects>
    </YourProjects>
  );
};

const YourProjects = styled.div`
  width: 30rem;
  height: 65%;
  background: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

const Avatar = styled.div`
  img {
    height: 4rem;
    width: 6rem;
    border-radius: 0.5rem;
  }
`;

const Detail = styled.div`
  margin-left: 1rem;
`;

const Title = styled.h3`
  font-weight: 500;
`;

const SubTitle = styled.h5`
  font-weight: 300;
`;

const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  margin-top: 2rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export default Projects;
