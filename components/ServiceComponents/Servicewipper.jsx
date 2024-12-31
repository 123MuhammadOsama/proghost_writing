"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";

const Serviceswipper = () => {
  const sliderRef = useRef(null); // Reference for slider instance

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false, // Disable built-in arrows
    draggable: true, // Allow dragging
    pauseOnHover: false,
  };

  // Slider data
  const books = [
    {
      img: "/service_slide1.png",
      name: "You Deserve This Sh!t",
      author: "Jordan Tarver",
      stars: 5,
    },
    {
      img: "/service_slide2.png",
      name: "Finding Peace in a Hectic World",
      author: "Ella Serenity",
      stars: 4,
    },
    {
      img: "/service_slide4.png",
      name: "Romancing the Ramen",
      author: "Maxine Heartfield",
      stars: 5,
    },
    {
      img: "/service_slide5.png",
      name: "Quarter-Life Hustle",
      author: "Cassie Wren",
      stars: 4,
    },
    {
      img: "/service_slide6.png",
      name: "Quarter-Life Hustle",
      author: "Cassie Wren",
      stars: 4,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full px-10 relative py-10">
      <div className="w-full max-w-[1200px]">
        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {books.map((book, index) => (
            <SliderElement
              key={index}
              img={book.img}
              name={book.name}
              author={book.author}
              stars={book.stars}
            />
          ))}
        </Slider>

        {/* Navigation Buttons */}
        <div className="flex justify-center xl:justify-end mt-4 space-x-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="px-3 py-2 border text-black border-black rounded-full shadow-md hover:bg-black hover:text-white transition-all"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="px-3 py-2 border border-black text-black rounded-full shadow-md hover:bg-black hover:text-white transition-all"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const SliderElement = ({ img, name, author, stars }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6 px-4">
      {/* Book Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:pr-10">
        <Image
          src={img}
          width={400}
          height={600}
          alt={name}
          title={name}
          className="object-contain rounded-lg max-w-[300px] lg:max-w-full"
        />
      </div>

      {/* Book Details */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left space-y-4 lg:pl-10">
        <div className="flex space-x-1">
          {Array.from({ length: stars }, (_, i) => (
            <Star key={i} fill="gold" />
          ))}
        </div>
        <h2 className="text-lg lg:text-2xl font-bold">{name}</h2>
        <p className="text-sm lg:text-base text-gray-600">{author}</p>
      </div>
    </div>
  );
};

export default Serviceswipper;
