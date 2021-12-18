import React from "react";

import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect, themeColor } from "../utils";

const Info = () => {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>98</Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <SubTitle>Nos 20% principais</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Row>
            <Digit>32</Digit>
            <InfoContainer>
              <Title>Projetos</Title>
              <SubTitle>2 neste mês</SubTitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badge content="App Mobile" glow />
            <Badge content="Marca" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
};

const InfoCard = styled.div`
    height: 100%;
    width: 14rem;
    background: white;
    border-radius: 1rem;
    padding: 1rem;
    color: white;
    box-shadow: ${cardShadow}

  transition: 0.4s ease-in-out;

  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const Card = styled.div`
  background: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({ justify }) =>
    justify &&
    `
        justify-content: space-around;
        width: 90%;
    `}
`;
const Digit = styled.div`
  background: ${themeColor};
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;

const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;

const Title = styled.h3`
  color: black;
`;

const SubTitle = styled.h5`
  color: #333;
  font-weight: normal;
`;

export default Info;
