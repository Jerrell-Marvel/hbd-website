import { motion } from "framer-motion";

const pVariants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};
const Greetings = () => {
  return (
    <motion.div className="lg:text-5xl md:text-3xl text-xl font-semibold lg:py-20 px-6 py-8 overflow-hidden md:px-12">
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
