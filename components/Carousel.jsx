"use client";

import React, { useState } from "react";
import Image from "next/image";
import BooksSlider from "./Slider";

const Carousel = () => {
  return (
    <div className="w-full md:h-[350px] lg:h-[700px] h-[480px] flex flex-col">
      <h2 className="font-bold text-2xl  lg:text-4xl sm:text-xl text-center lg:px-9 md:mt-1 mt-5 ">
        Books That Inspire, Influence, and Leave a{" "}
        <span className="text-blue">Legacy</span>
      </h2>
      <div className="flex flex-col justify-center items-center mx-auto ">
      <BooksSlider />

      </div>
     
    </div>
  );
};

export default Carousel;
