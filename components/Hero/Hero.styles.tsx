/* .hero { */
/* } */

import styled from "styled-components";

export const HeroStyles = styled.div`
  background-image: url(https://s3.amazonaws.com/nikeinc/assets/65280/FKA_Twigs_Group_Photo_hd_1600.jpg?1484075831);
  background-size: cover;
  border-radius: 0.5rem;
  min-height: 15rem;

  @media (min-width: 40rem) {
    min-height: 20rem;
  }
  @media (min-width: 50rem) {
    min-height: 25rem;
  }
  @media (min-width: 75rem) {
    min-height: 30rem;
  }
`;
