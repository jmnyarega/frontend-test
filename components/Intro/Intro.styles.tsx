import styled from "styled-components";

export const Intro = styled.div`
  text-align: center;
  max-width: 35ch;
  margin: 0 auto;

  margin-top: 4rem;
  position: relative;

  @media (min-width: 50rem) {
    max-width: 50ch;
  }
`;

export const IntroTitle = styled.h2`
  font-size: 1.2rem;
`;

export const IntroBadge = styled.div`
  position: absolute;
  left: 50%;
  top: -4rem;
  transform: translate(-50%, -50%);
  border: 2px solid white;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;

  background-image: url(https://i.pinimg.com/originals/10/d9/65/10d965554ba71a58d4aed3cfee2624bc.png);
  background-position: center;
  background-size: cover;
`;

export const IntroParagraph = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  color: #434344;
`;

export const IntroSocialLinks = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  column-gap: 0.5rem;
  margin-top: 0.5rem;
  color: #434344;

  a {
    font: inherit;
    color: inherit;
  }
`;
