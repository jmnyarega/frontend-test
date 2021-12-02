import React from "react";
import {
  Intro,
  IntroBadge,
  IntroTitle,
  IntroParagraph,
  IntroSocialLinks,
} from "./Intro.styles";

const Index = () => (
  <Intro>
    <IntroBadge />
    <IntroTitle>Sneaker DNA</IntroTitle>
    <IntroParagraph>
      Home of the best shoes in town. Get free delivery for orders above KES
      5,000 countrywide.
    </IntroParagraph>
    <IntroSocialLinks>
      <a href="#">Facebook</a>/<a href="#">Instagram</a>/<a href="#">Youtube</a>
    </IntroSocialLinks>
  </Intro>
);

export default Index;
