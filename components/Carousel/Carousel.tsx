import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/legacy/image";

import { motion } from "framer-motion";

const carouselVariants = {
  hidden: {
    scale: 1.5,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.5,
    },
  },
};

// Images url
const heroImages = ["/carousel-1.jpg", "/carousel-2.jpg", "/carousel-3.jpg", "/carousel-4.jpg"];

function Carousel() {
  return (
    <div className="md:pb-20 md:px-6 pb-14">
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
                <SwiperSlide className="hero-carousel__slide w-full relative" key={index}>
                  <div className="w-full relative">
                    <Image src={img} alt={img} className="w-full" width={1600} height={901} layout="responsive" />
                  </div>
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
