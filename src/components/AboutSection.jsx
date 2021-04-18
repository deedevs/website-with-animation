import React from "react";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";


const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Watch quality movies</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          BZN Monsters bringing Movies to Life
        </motion.p>
        <motion.button variants={fade}>Watch Now</motion.button>
      </Description>
      <Image className="image">
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src="https://images.unsplash.com/photo-1512070679279-8988d32161be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt="home"
        />
      </Image>
     
    </About>
  );
};

export default AboutSection;
