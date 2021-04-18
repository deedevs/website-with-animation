import React from "react";
import styled from "styled-components";
import { About, Image } from "../styles";
import { useScroll } from "./useScroll";

import { scrollReveal } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}>
      <Image>
        <img
          src="https://images.unsplash.com/photo-1585951237318-9ea5e175b891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4NzY3OTE1&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt="home"
        />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

export default ServicesSection;
