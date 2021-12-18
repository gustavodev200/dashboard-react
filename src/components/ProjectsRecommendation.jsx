import React from "react";

import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect } from "../utils";
import AvatarImg6 from "../assets/AvatarImage6.png";

const ProjectsRecommendation = () => {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImg6} alt="Organização de Freelancers" />
            </Avatar>
            <Info>
              <InfoName>Space Owls</InfoName>
              <InfoUpdate>Buscamos nome no mercado de Freelancers</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Organização" />
        </Detail>
        <Title>Space Owls - Freelancers no tempo livre.</Title>
        <ProjectInfo>
          Somos um grupo de desenvolvedores, tanto Frontend quanto Backend, e no
          tempo livre fazemos freelacers.
        </ProjectInfo>
        <PriceContainer>
          <Price>R$15,00/Hora</Price>
          <Badge content="Contato" clean />
        </PriceContainer>
      </CardContent>
    </RecommendProject>
  );
};

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 135%;
  padding: 1rem;
  width: 30rem;

  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div`
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const InfoContainer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  margin-right: 1rem;

  img {
    background: black;
    height: 5rem;
    width: 5rem;
    border-radius: 5rem;
  }
`;

const Info = styled.div``;

const InfoName = styled.h3`
  font-weight: 500;
`;

const InfoUpdate = styled.h5`
  font-weight: 300;
`;

const Title = styled.h4`
  margin-top: 2rem;
  font-weight: 500;
`;

const ProjectInfo = styled.div`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 3rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background: rgba(146, 166, 255, 0.3);
`;

const Price = styled.div``;

export default ProjectsRecommendation;
