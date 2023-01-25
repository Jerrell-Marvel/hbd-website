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
    <motion.div className="md:text-5xl text-xl font-semibold md:py-20 px-6 py-8 overflow-hidden md:px-12">
      <motion.p variants={pVariants} initial="hidden" whileInView="visible" className="text-main-black text-center">
        Happy 19th Birthday kakkk… akhire 19 tahun juga to kamu sama kek aku (told u kita tuu cuman beda 1 bulan WKWKKW, jadi jangan bilang aku tua lagi yak!). Anyway, Wish You All The Best yaaa, semoga di 19 tahun ini bisa semakin
        bertumbuh dewasa dengan baik, semakin panjang umur, semakin baik hati, semakin bertanggung jawab dan bisa diandalkan, semakin peduli sama sesama, semakin sayang juga tentunya sama keluargamu (kalo sama aku gimana xixixixi), SEMOGA
        YANG BELUM TERSEMOGAKAN BISA TERSEMOGAKAN DEH! AMIN.
      </motion.p>

      {/* <div></div>

      <div></div> */}
    </motion.div>
  );
};

export default Greetings;
