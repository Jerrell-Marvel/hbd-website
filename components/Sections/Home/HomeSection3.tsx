import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
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

const bgImgVariants = {
  hidden: {
    y: "120%",
  },
  visible: {
    y: 0,
    height: "0",
    transition: {
      type: "tween",
      ease: "easeOut",
      height: {
        duration: 0.6,
        delay: 0.9,
      },
      delay: 0.3,
      duration: 0.6,
    },
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
  //   const { scrollYProgress } = useScroll();

  //   const scale = useSpring(1);
  //   const y = useSpring(1);

  //   useEffect(() => {
  //     return scrollYProgress.onChange((latest) => {
  //       scale.set(1 + latest);
  //       y.set(latest * 1000);
  //     });
  //     // return unsubscribeY();
  //   }, []);
  return (
    <>
      <div></div>
      <section className="overflow-hidden">
        <div className="px-12 pt-8 md:pt-16">
          <div className="flex flex-col items-center sm:flex-row">
            <div className="w-full flex-col justify-center sm:flex sm:pr-4 md:pr-6 lg:pr-8">
              <motion.div variants={typingContainerVariants} initial="hidden" whileInView="visible" className="mb-4">
                {h1Text.split("").map((char, i) => {
                  return (
                    <motion.span key={`h1${char}${i}`} className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-yellow-500" variants={typingVariants}>
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

            <div className="h-full w-full sm:ml-4 md:ml-6 lg:ml-8 relative">
              <motion.img
                src="/main-img.jpg"
                alt=""
                className="mx-auto max-w-full"
                variants={imgVariants}
                whileInView="visible"
                initial="hidden"
                // style={{ scale }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeSection3;
