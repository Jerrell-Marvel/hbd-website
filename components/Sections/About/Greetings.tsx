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
      <motion.p variants={pVariants} initial="hidden" whileInView="visible" className="text-main-black text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur veniam a eveniet nostrum non nihil alias accusamus, mollitia dolorem aperiam corporis, officia nemo explicabo molestias dicta magni beatae obcaecati ab
        quibusdam assumenda magnam omnis. Rerum suscipit, sapiente recusandae vero alias illo placeat architecto hic quia sed voluptate cumque molestias ducimus iusto voluptatem impedit voluptas aspernatur itaque ea provident nesciunt ipsa
        quidem quaerat. Consequatur nemo qui voluptates quas ea optio quia nihil minima autem labore recusandae perferendis quos vitae cumque voluptatibus, tempore facilis quisquam. Voluptatem tempora odit sequi doloremque ex aliquam
        molestiae ad beatae hic ratione consequuntur, maxime nulla sed.
      </motion.p>
      {/* <div></div>

      <div></div> */}
    </motion.div>
  );
};

export default Greetings;
