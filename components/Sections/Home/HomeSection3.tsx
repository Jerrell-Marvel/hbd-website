import { motion } from "framer-motion";
import Image from "next/legacy/image";

const h1Text = "Happy Birthday";
const h2Text = "Brigida Adinda A";

const typingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const typingVariants = {
  hidden: {
    opacity: 0,
    y: "200px",
  },
  visible: {
    // y: 0,
    // y: 0,
    opacity: 1,
  },
};

const imgVariants = {
  hidden: {
    // y: "100%",
    filter: "blur(50px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    // y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.9,
    },
  },
};
const HomeSection3 = () => {
  return (
    <>
      <div></div>
      <section className="overflow-hidden">
        <div className="px-6 pt-8 md:pt-16 md:px-12">
          <div className="flex flex-col items-center sm:flex-row">
            <div className="w-full flex-col justify-center sm:flex sm:pr-4 md:pr-6 lg:pr-8">
              <motion.div variants={typingContainerVariants} initial="hidden" whileInView="visible" className="mb-4">
                {h1Text.split("").map((char, i) => {
                  return (
                    <motion.span key={`h1${char}${i}`} className="text-6xl sm:text-7xl lg:text-9xl font-extrabold text-yellow-500" variants={typingVariants}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>

              <motion.div variants={typingContainerVariants} initial="hidden" whileInView="visible" className="mb-4">
                {h2Text.split("").map((char, i) => {
                  return (
                    <motion.span key={`h1${char}${i}`} className="md:text-6xl text-4xl text-main-black font-bold" variants={typingVariants}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
            </div>

            <motion.div className="w-full sm:ml-4 md:ml-6 lg:ml-8 relative" variants={imgVariants} whileInView="visible" initial="hidden">
              <img src="/main-img.jpg" alt="" />
              {/* <Image src="/main-img.jpg" width={1072} height={1072} layout="responsive" alt="main-img" priority /> */}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeSection3;
