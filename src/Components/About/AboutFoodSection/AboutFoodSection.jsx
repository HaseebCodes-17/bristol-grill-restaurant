import React, { useRef } from "react";
import { Section } from "../../Index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const slides = [
    "https://images.unsplash.com/photo-1655195672072-0ffaa663dfa4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1552913902-366e726db79e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1625940951329-4e8d09f87692?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imgRef = useRef(null);
  const paraRef = useRef(null);

  return (
    <Section mb="mb-0">
      <div className="h-[350px] max-[700px]:h-full grid grid-cols-2 max-[700px]:grid-cols-1 gap-6">
        {/* Image and slider */}
        <div ref={imgRef}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper size-full"
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <img className="size-full rounded-xl" src={slide} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Text content */}
        <div ref={paraRef}>
          <h3 className="text-2xl text-zinc-500 mb-2">About Food</h3>
          <p>
            At <b>Bristol Grill</b>, we specialize in delivering fresh,
            delicious fast food favorites that satisfy your cravings every time.
            Our menu features a range of mouth-watering options, including juicy
            burgers, crispy fried chicken, and perfectly seasoned fries that
            keep our customers coming back for more. We’re also known for our
            signature wraps, flavorful sandwiches, and hand-tossed pizzas,
            offering something for everyone. Whether you’re in the mood for a
            classic cheeseburger, a crispy chicken sandwich, or a loaded pizza,
            Bristol Grill is your go-to spot for fast, fresh, and flavorful
            meals. Stop by today and discover why we’re the go-to place for all
            your favorite fast foods!
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
