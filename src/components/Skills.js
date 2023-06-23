import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className=" font-bold text-8xl mt-64 w-full text-center">Skills</h2>

      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-14vw" y="-8.5vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="Python" x="0vw" y="12vw" />
        <Skill name="VueJS" x="0vw" y="-16vw" />
        <Skill name="Golang" x="-20vw" y="-15vw" />
        <Skill name="PHP" x="15vw" y="-8vw" />
        <Skill name="ReactJS" x="15vw" y="-16vw" />
      </div>
    </>
  );
};

export default Skills;
