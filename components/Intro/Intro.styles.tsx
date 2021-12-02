import styled from "styled-components";

export const Intro = styled.div`
  text-align: center;
  max-width: 35ch;
  margin: 0 auto;

  margin-top: 2rem;
  position: relative;
`;

export const IntroTitle = styled.h2`
  font-size: 1.2rem;
  color: palevioletred;
`;

export const IntroBadge = styled.div`
  position: absolute;
  left: 50%;
  top: -2rem;
  transform: translate(-50%, -50%);
  border: 1px solid white;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  background: black;
`;

export const IntroParagraph = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const IntroSocialLinks = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  column-gap: 0.5rem;

  margin-top: 0.5rem;
`;
