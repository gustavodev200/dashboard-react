import React from "react";

import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect } from "../utils";
import AvatarImg4 from "../assets/AvatarImage4.png";
import AvatarImg5 from "../assets/AvatarImage5.png";

const Invoices = () => {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImg4} alt="Projeto feito em SASS" />
            </Avatar>
            <TextContainer>
              <Title>Galeria Imagens</Title>
              <SubTitle>Projeto em SASS</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="#SASS" paid />
          </Container>
        </Invoice>

        <Invoice>
          <Info>
            <Avatar>
              <img
                src={AvatarImg5}
                alt="Projeto para Gerenciamento de projetos."
              />
            </Avatar>
            <TextContainer>
              <Title>Gerenciamento de Projetos</Title>
              <SubTitle>Projeto em React JS</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="#REACT" late />
          </Container>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  );
};

const InvoicesContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background: white;
  height: 140%;

  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div``;

const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: .4rem;
  padding: 0.6rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const Avatar = styled.div`
  img {
    height: 4rem;
    width: 6rem;
    border-radius: 0.6rem;
  }
`;

const TextContainer = styled.div`
  margin-left: 1rem;
`;

const Title = styled.h4``;

const SubTitle = styled.h5`
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Invoices;
