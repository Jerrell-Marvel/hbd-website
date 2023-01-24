import { motion } from "framer-motion";
const Sticker = () => {
  return (
    <div className="flex px-12 items-center gap-y-1 md:flex-row justify-center pb-14 md:pb-28 flex-wrap md:gap-x-6">
      <motion.img src="/peyuk.webp" className="w-1/2 md:w-1/3"></motion.img>
      <motion.img src="/petrik.webp" className="w-1/2 md:w-1/3"></motion.img>
      <motion.img src="/gantung.webp" className="w-1/2 md:w-1/3"></motion.img>
    </div>
  );
};

export default Sticker;
