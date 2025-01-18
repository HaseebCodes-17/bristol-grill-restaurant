import React from "react";
import {
  EffectCards,
  EffectCube,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FastFoodsShowcase = () => {
  const images = [
    "https://images.unsplash.com/photo-1625938146369-adc83368bda7?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1625937759420-26d7e003e04c?q=80&w=1521&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1625937759420-26d7e003e04c?q=80&w=1521&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683121324230-2702ea6b47be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1700760933480-c01b903b07fd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="">
      <Swiper
        className="h-[400px]" /* Set a fixed height */
        modules={[EffectCards, EffectCube, Pagination, Navigation]}
        effect="cards"
        pagination={{ dynamicBullets: true }}
        navigation={true}
      >
        {images &&
          images.map((image, index) => (
            <SwiperSlide key={index + 1}>
              <img
                className="size-full object-center object-cover"
                src={image}
                alt="Fast Food"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default FastFoodsShowcase;
