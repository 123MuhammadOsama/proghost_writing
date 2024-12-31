"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import required Swiper modules
import Image from "next/image";
const testimonialsData = [
  {
    rating: "4.9",
    feedback:
      "I was hesitant to try ghost book writing services for my eBook, but it turned out to be one of the best decisions I've made! The team understood my vision perfectly & delivered an amazing final product. I highly recommend their services to anyone looking to save time and money on their ghostwriting projects. They made my ideas come to life!",
    avatar: "/Mask_group.png",
    name: "Jameson Carter",
    role: "CEO",
  },
  {
    rating: "5.0",
    feedback:
      "After struggling to get my blog started, I decided to explore hiring a ghostwriter. I can't express how relieved I was when I found these pro ghostwriting services providers. The writers were incredibly professional & really knew how to capture my voice. If you’re thinking about jumping into a writing project, this team is your best bet in turning your ideas into an engaging narrative!",
    avatar: "/Mask_group.png",
    name: "Minerva Reynolds",
    role: "Founder",
  },
  {
    rating: "4.8",
    feedback:
      "I never thought I’d ever need to look for American ghost writers near me, but after seeing how efficiently they transformed my memoir, I’m a believer! Their insights and creativity elevated my content beyond what I imagined. If you want to make an impact with your writing, look no further than this amazing service—it's worth every penny!",
    avatar: "/Mask_group.png",
    name: "Joshua Thorn",
    role: "Project Manager",
  },
  {
    rating: "4.7",
    feedback:
      "As a busy entrepreneur, I often struggled to turn my ideas into a compelling business book.That's when I turned to ProGhostwriting. They not only captured my voice perfectly but added\insightful touches that elevated the entire narrative. The process was seamless, and their support was incredible. Thanks to them, my book is now a reality, and I’m already receiving rave reviews from readers!",
    avatar: "/Mask_group.png",
    name: "Daphne Mitchell",
    role: "Project Manager",
  },
  {
    rating: "5.0",
    feedback:
      "I had a rough draft of my memoir that felt disjointed and lacked the emotional depth I wanted. But ProGhostwriting transformed it into a powerful and cohesive narrative. They truly listened and brought my story to life in ways I never imagined. The finished product is something I’mproud of. If you’re seeking an authentic and reliable ghostwriting service, look no further!",
    avatar: "/Mask_group.png",
    name: "Jason Connors",
    role: "Senior Business Analyst",
  },
  {
    rating: "4.8",
    feedback:
      "As a budding screenwriter, I had a concept for a short film but struggled to develop it into a full script. I reached out to ProGhostwriting, and they exceeded my expectations by refining my concept, crafting engaging dialogue, and structuring the script flawlessly! The collaborative process was fun & enlightening. I’m thrilled with the final script and can’t wait to see it come to life!",
    avatar: "/Mask_group.png",
    name: "Sabrina Rodriguez",
    role: "Senior Business Analyst",
  },
];

const Testimonials = () => {
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      modules: [Navigation, Pagination, Autoplay], // Use the required modules
      slidesPerView: 1,
      spaceBetween: 28,
      loop: true,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        // Navigation settings
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 6,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1023: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        
        1300: {
          slidesPerView: 3,
          spaceBetween: 6,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <section className="py-20 px-3 sm:px-14 ">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          {/* <span className="text-sm text-gray-500 font-medium text-center block mb-2">
            TESTIMONIAL
          </span> */}
          <h2 className="text-4xl lg:pt-32 text-center font-bold text-gray-900">
            What our happy users say!
          </h2>
        </div>
        <div className="swiper mySwiper " >
    
          <div className="swiper-wrapper w-2 m-0 md:m-12 " >
      

            {testimonialsData.map((testimonial, index) => (
               
              <div key={index} className="md:mx-2 swiper-slide sm:ml-2  text-sm flex justify-center items-center xl:mx-2 "   >
                
                <div className="group border border-solid xl:h-[400px] xl:w-[400px] 2xl:h-[500px] 2xl:w-[400px] object-contain  w-[300px]  border-gray-300 rounded-xl p-2 lg:p-6 transition-all duration-500 lg:w-full md:px-3 md:mx-auto hover:border-indigo-600 hover:shadow-sm  flex-col flex md:justify-between bg-white md:ml-1  mr-3  ">
                  <div>
                    <div className="px-2 mb-2 gap-2 text-amber-500 transition-all duration-500">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className=" font-semibold text-indigo-600">
                        {testimonial.rating}
                      </span>
                    </div>
                    <p className="md:text-[16px] text-[14px]  text-wrap text-gray-600 transition-all duration-500 pb-8 group-hover:text-gray-800">
                      {testimonial.feedback}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5 select-none cursor-default">
                    <Image
                      className="rounded-full h-10 w-10 object-cover"
                      src={testimonial.avatar}
                      alt="avatar"
                      title="Reviews Avatar"
                      width="150"
                      height="150"
                    />
                    <div className=" flex flex-col">
                      <span className="text-gray-900 font-medium transition-all duration-500 mb-1">
                        {testimonial.name}
                      </span>
                      <span className="text-sm leading-4 text-gray-500">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
         {/* <div className="lg:pl-10 md:block hidden swiper-button-prev pt-10 "></div>  
        <div className="lg:pr-10 md:block hidden swiper-button-next pt-10 "></div> 
         */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
