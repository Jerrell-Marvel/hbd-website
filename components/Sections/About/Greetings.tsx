import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

const pVariants = {
  hidden: {
    // filter: "blur(30px)",
    opacity: 0,
    x: "-100%",
  },
  visible: {
    // filter: "blur(0px)",
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};
const Greetings = () => {
  // const { scrollYProgress } = useScroll();

  // const scaleP = useSpring(1);

  // useEffect(() => {
  //   return scrollYProgress.onChange((latest) => {
  //     scaleP.set(1.05 - latest);
  //   });
  //   // return unsubscribeY();
  // }, []);
  return (
    <motion.div className="md:text-5xl text-xl font-semibold md:py-28 px-12 py-8 overflow-hidden">
      <motion.p variants={pVariants} initial="hidden" whileInView="visible" className="text-slate-200 text-center">
        Hi there! My name is Jerrell Marvel a computer science student at UNPAR. I am extremely passionate about web development and always look for opportunities to expand my knowledge and skills in this field. In my free time, you can
        find me tinkering with new projects or researching the latest trends in web development.
      </motion.p>
      {/* <div></div>

      <div></div> */}
    </motion.div>
  );
};

export default Greetings;
