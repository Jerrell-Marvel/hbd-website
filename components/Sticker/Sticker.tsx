import { motion } from "framer-motion";
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const logoVariants = {
  hidden: {
    opacity: 0,
    y: "100%",
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

const imgPaths = ["/peyuk.webp", "/petrik.webp", "/gantung.webp"];
const Sticker = () => {
  return (
    <motion.div className="flex items-center gap-y-1 md:flex-row justify-center pb-6 md:pb-12 flex-wrap md:gap-x-6" variants={containerVariants} initial="hidden" whileInView="visible">
      {imgPaths.map((path) => {
        return <motion.img src={path} className="w-1/2 md:w-1/3" key={path} variants={logoVariants}></motion.img>;
      })}
    </motion.div>
  );
};

export default Sticker;
