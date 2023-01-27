import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import HomeSection3 from "../components/Sections/Home/HomeSection3";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import Greetings from "../components/Sections/About/Greetings";
import Sticker from "../components/Sticker/Sticker";
import Modal from "../components/Modal/Modal";
import { useEffect, useState } from "react";
import useSound from "use-sound";

const modalVariants = {
  initial: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  const [isShowing, setIsShowing] = useState(true);
  const [play] = useSound("/hbd-sound.mp3");
  useEffect(() => {
    console.log("here");
    play();
    const interval = setInterval(() => {
      play();
    }, 37500);
    return () => clearInterval(interval);
  }, [isShowing, play]);

  return (
    <>
      <Head>
        <title>Happy Birthday!</title>
        <meta name="description" content="Created by Nathanael Christian" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link> */}
      </Head>
      {/* <audio controls src="../public/hbd-sound.mp3" autoPlay>
        Your browser does not support the
        <code>audio</code> element.
      </audio> */}
      <AnimatePresence>
        {isShowing ? (
          <motion.div variants={modalVariants} initial="visible" exit="hidden">
            <Modal setIsShowing={setIsShowing} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      {!isShowing ? (
        <div>
          {/* <ProgressBar /> */}
          <HomeSection3 />
          <Greetings />
          <Carousel />
          <Sticker />
          <Footer />
          {/* <Sticker2 /> */}
          {/* <Footer /> */}
        </div>
      ) : null}
    </>
  );
}
