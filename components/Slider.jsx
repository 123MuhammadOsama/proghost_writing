"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";
const BooksSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: "640px",
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-[370px] sm:w-[480px] lg:w-[900px] 2xl:w-[1500px] ">
      <Slider {...settings}>
        <SliderElement
          img={"/1.png"}
          name={"The Clarity Compass by James Radcliffe"}
        />
        <SliderElement
          img={"/2.png"}
          name={"Finding Peace in a Hectic World by Ella Serenity"}
        />
        <SliderElement
          img={"/3.png"}
          name={"Romancing the Ramen by Maxine Heartfield"}
        />
        <SliderElement
          img={"/4.png"}
          name={"Quarter-Life Hustle by Cassie Wren"}
        />
        <SliderElement
          img={"/5.png"}
          name={"The Procrastinator’s Guide to Productivity by Vince Clockwell"}
        />
        <SliderElement
          img={"/6.png"}
          name={"Surviving the Suit by Jack Wilde"}
        />
        <SliderElement
          img={"/7.png"}
          name={"Parenting for the Clueless by Bailey Quinn"}
        />
        <SliderElement
          img={"/8.png"}
          name={"Silent Resilience by Naomi Carson"}
        />
        <SliderElement
          img={"/9.png"}
          name={"The Art of Saying No by Isabelle Shore"}
        />
        <SliderElement
          img={"/10.png"}
          name={"The Empathy Edge by Lena Morgan"}
        />
        <SliderElement
          img={"/11.png"}
          name={"The Unseen Battlefield by Daniel Everett"}
          
        />
        <SliderElement
          img={"/12.png"}
          name={"Codependent to Confident by Samantha Wilder"}
        />
      </Slider>
    </div>
  );
};

const SliderElement = ({ img, name }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-3">
        <Image
          src={img}
          width={600}
          height={600}
          alt={name}
          title={name}
          className="w-auto px-2 object-contain lg:h-[400px]"
        />
        <p className="text-xs lg:text-2xl font-semibold text-center">{name}</p>
        <div className="flex">
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
          <Star fill="gold" />
        </div>
      </div>
    </>
  );
};
export default BooksSlider;
