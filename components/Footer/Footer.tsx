import { motion } from "framer-motion";
const imgVariants = {
  hidden: {
    scale: 1.1,
  },
  visible: {
    scale: 2,
    transition: {
      duration: 4,
    },
  },
};

const h3Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    transition: {
      delay: 1,
      duration: 1,
    },
    opacity: 1,
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: "90%",
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 75,
    },
  },
};

const Footer = () => {
  return (
    <div className="w-full flex justify-center pb-6 md:pb-12 px-6 text-center">
      <motion.p className="md:text-2xl text-lg text-main-black font-bold" variants={textVariants} initial="hidden" whileInView="visible">
        Last but not least, Thank You.. bul&#60;3
      </motion.p>
    </div>
  );
};

export default Footer;
