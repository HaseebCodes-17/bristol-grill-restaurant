import React from "react";
import "./Reviews.css";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const AllReviews = () => {
  const reviews = [
    {
      title: "Margarita Pizza",
      description:
        "An Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
    },
    {
      title: "Sushi Platter",
      description:
        "A selection of sushi rolls including salmon, tuna, avocado, and cucumber.",
    },
    {
      title: "French Croissants",
      description:
        "Buttery and flaky pastries, perfect for breakfast with jam or butter.",
    },
    {
      title: "Pad Thai",
      description:
        "A Thai dish featuring stir-fried rice noodles with shrimp, peanuts, scrambled eggs, and lime.",
    },
    {
      title: "Greek Salad",
      description:
        "A fresh salad with cucumbers, tomatoes, olives, feta cheese, and a light olive oil dressing.",
    },
    {
      title: "Chocolate Lava Cake",
      description:
        "A rich, warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
    },
  ];

  return (
    <Swiper
      modules={[Pagination]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
        style: {
          bulletActiveClass: "orange",
          bulletClass: "orange",
        },
      }}
      className="mySwiper"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.title}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AllReviews;
