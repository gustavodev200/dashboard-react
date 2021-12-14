import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImg from "../assets/avatar.jpg";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { darkThemeColor } from "../utils";

const Sidebar = () => {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImg} />
        <Name>Gustavo Lage</Name>
        <Badge content="Frontend" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Página Inicial</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Projetos</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Tecnologias</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Portifólio</h3>
          </Link>
        </Links>

        <ContactContainer>
          <span>Está tendo problemas?</span>
          <a href="#">Contate-nos</a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 20%;
  height: 100%;
  border-radius: 2rem;
  background: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  padding-top: 2rem;
  height: 60%;
  flex-direction: column;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;

  h3 {
    font-weight: 300;
  }

  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

export default Sidebar;
