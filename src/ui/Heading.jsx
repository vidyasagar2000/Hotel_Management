import styled, { css } from "styled-components";

const test = css`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 400;
    `}
  ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 1rem;
      font-weight: 200;
    `}

  line-height: 1.4;
`;

export default Heading;
