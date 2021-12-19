import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Text>
        Welcome,
        <span> Gustavo</span>
      </Text>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Pesquisar por projetos" />
      </InputContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 1rem;
    flex-direction: column;
  }

`;

const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }

`;

const InputContainer = styled.div`
  display: flex;
`;
const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  svg {
    color: #555555;
  }
`;
const Input = styled.input`
  border: none;
  background: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  &:focus {
    border: none;
    outline: none;
  }
`;
export default Navbar;
