import React, { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Bag from "../asset/bag.jpg";
import WomenGray from "../asset/longgraycoat.jpg";
import Shopping from "../asset/shopingWomen.jpg";
function Carousel() {
  const SliderData = [
    {
      image: WomenGray,
      text: "Lorem ipsum dolor sit ",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      shop: "Shop Now",
    },
    {
      image: Bag,
    },
    {
      image: Shopping,
    },
  ];
  // slider start at 0
  const [current, setCurrent] = useState(0);
  let slides = SliderData;
  // Take the length of the array
  const length = slides.length;
  // handle next slide
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // handle previous flag
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative w-full lg:h-screen bg-slate-900">
      <div className="flex z-20 absolute lg:bottom-30  bottom-10 right-5 w-auto justify-between">
        <ChevronLeftIcon
          className="lg:h-14 lg:w-14 w-6 h-6 text-black active:text-orange-500 cursor-pointer"
          onClick={() => previousSlide()}
        />
        <ChevronRightIcon
          className="lg:h-14 lg:w-14 w-6 h-6 text-black active:text-orange-500 cursor-pointer"
          onClick={() => nextSlide()}
        />
      </div>

      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "w-full md:w-full md:h-full h-full transition-opacity duration-1000 ease-out relative"
                : "transition-opacity opacity-0"
            }
            key={index}
          >
            {index === current && (
              <img
                className="w-full h-full object-fit "
                src={slide.image}
                alt="carousel"
              />
            )}
            {index === current && (
              <div className=" hidden  absolute top-[30%] right-[50%] lg:right-[61%] w-72 h-32 md:flex md:flex-col justify-between ">
                <p className="text-gray-200 font-bold text-2xl  ">
                  {slide.text}
                </p>
                <p className=" text-gray-100">{slide.description}</p>
                <p className=" text-orange-500 cursor-pointer border-b border-orange-500 w-fit hover:text-white">
                  {slide.shop}{" "}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
