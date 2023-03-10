import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
type ModalProps = {
  setIsShowing: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ setIsShowing }: ModalProps) => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] flex flex-col items-center gap-8 py-8 justify-center px-6">
        <h2 className="md:text-6xl text-5xl font-extrabold text-center text-black">p nya di click yeee</h2>
        <motion.img
          src="/p.webp"
          onClick={() => {
            setIsShowing(false);
          }}
          className="cursor-pointer"
        ></motion.img>
      </div>
    </div>
  );
};
export default Modal;
