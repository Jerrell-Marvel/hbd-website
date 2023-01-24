import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";

import { motion } from "framer-motion";

const carouselVariants = {
  hidden: {
    // opacity: 0,
    scale: 1.5,
  },
  visible: {
    // opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
    },
  },
};

// Images url
const heroImages = ["https://source.unsplash.com/random/1600x800", "https://source.unsplash.com/random/1600x801", "https://source.unsplash.com/random/1600x799"];

function Carousel() {
  return (
    <div className="md:pb-28 md:px-12 pb-14">
      <div className="overflow-hidden relative">
        <motion.div className="hero-carousel" variants={carouselVariants} initial="hidden" whileInView="visible">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            navigation
            speed={800}
            slidesPerView={1}
            loop
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="hero-carousel__slides"
          >
            {heroImages.map((img, index) => {
              return (
                <SwiperSlide className="hero-carousel__slide w-full" key={index}>
                  <Image src={img} alt={img} layout="responsive" width="2" height="1" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}

export default Carousel;
