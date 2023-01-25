import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";
import AboutSection from "../components/Sections/About/Greetings";
import HomeSection3 from "../components/Sections/Home/HomeSection3";
import Footer from "../components/Footer/Footer";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Carousel from "../components/Carousel/Carousel";
import Greetings from "../components/Sections/About/Greetings";
import Sticker from "../components/Sticker/Sticker";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

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
      <AnimatePresence>
        {isShowing ? (
          <motion.div variants={modalVariants} initial="visible" exit="hidden">
            <Modal setIsShowing={setIsShowing} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      {!isShowing ? (
        <div>
          <ProgressBar />
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
