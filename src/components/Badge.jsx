import React from "react";
import styled from "styled-components";
import { themeColor } from "../utils";

const Badge = ({ content, glow = false, clean =false, paid = false, late = false }) => {
  return (
    <Div glow={glow} paid={paid} late={late} clean={clean}>
      {content}
    </Div>
  );
};

const Div = styled.div`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background: ${themeColor};
  cursor: pointer;

  ${({ glow }) =>
    glow &&
    `
    font-size: .8rem;
    padding: .2rem .5rem;
    font-weight: normal;
    color: #2f233d;
    background: rgba(109,134,245,0.192);
  `}

${({ clean}) =>
    clean &&
    `
    border: .05rem solid ${themeColor};
    color: ${themeColor};
    background: transparent;
  `}

  ${({ paid }) =>
    paid &&
    `
    background:  #f689fa;
  `}

${({ late }) =>
    late &&
    `
    background:#6d7fd6;
  `}
`;

export default Badge;
