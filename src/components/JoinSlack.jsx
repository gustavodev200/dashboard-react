import React from "react";
import { darkThemeColor, hoverEffect, themeColor } from "../utils";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const JoinSlack = () => {
  return (
    <JoinChannel>
      <CardContent flex={true}>
        <Slack>
          <SlackLogo>
            <AiOutlineGithub />
          </SlackLogo>
          <SlackText>
            <SlackHead>GitHub dos Projetos</SlackHead>
            <SlackFoot>Navegar para página</SlackFoot>
          </SlackText>
        </Slack>
        <SlackJoin>Entrar</SlackJoin>
      </CardContent>
    </JoinChannel>
  );
};

const JoinChannel = styled.div`
  background: ${darkThemeColor};
  height: 80%;
  margin-top: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: .4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Slack = styled.div`
  display: flex;
`;

const SlackLogo = styled.div`
  margin-right: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    height: 3rem;
    width: 3rem;
  }
`;

const SlackText = styled.div`
  color: white;
`;

const SlackHead = styled.h2`
  font-weight: 500;
`;

const SlackFoot = styled.h5`
  color: #e4e4e4;
  font-weight: normal;
`;

const SlackJoin = styled.button`
  background: ${themeColor};
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export default JoinSlack;
