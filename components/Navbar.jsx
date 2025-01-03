"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MailIcon, PhoneIcon } from "lucide-react";


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [LiActive, setLiActive] = useState("");

  


  //RESPONISVE TOGGLE BEHAVIOUR  //
  useEffect(()=>{
  const mediaqueries = () =>{
    if (window.outerWidth >= 1024) {
      setIsSidebarOpen(false);
    } else if (window.outerWidth <= 1023) {
      setLiActive("");
    }
  }
  window.addEventListener("resize", mediaqueries);
    return () => {
      window.removeEventListener("resize", mediaqueries);
    };
  }, []);

  


  return (
    <section className="w-full h-[20] fixed top-0 z-50">
      <div className="flex justify-between items-center px-2 md:px-10 lg:px-14 xl:px-44 py-4 border-b bg-white ">

        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href='/'>
            <Image
              src="/logo-black.png"
              alt="ProGhost Writing Logo"
              title="Proghostwriting Logo"
              width={240}
              height={160}
              className="object-contain "
            />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden mx-4">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="focus:outline-none text-gray-600"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                stroke="currentColor"
                strokeWidth="2"
                
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          )}
        </div>

        {/* Links Section (Shown on md and above) */}
        <div className=" hidden md:flex space-x-4 md:space-x-2 lg:space-x-4  lg:text-lg xl:text-2xl ">
          <Link href="/about" className="text-sm md:text-sm xl:text-lg font-medium hover:text-[#124680]" >About Us</Link>
          <Link href="/service" className="text-sm md:text-sm xl:text-lg font-medium hover:text-[#124680]" >Services</Link>
          <Link href="/contactus" className="text-sm md:text-sm xl:text-lg font-medium hover:text-[#124680]" >Contact Us</Link>
        </div>

        {/* Contact Section (Shown on sm and above) */}
        {!isSidebarOpen && (

          <div className="xl:flex gap-4 xl:flex-row hidden mt-0 mx-4 2xl:mx-10 item-center justify-center pb-4">

            <div className="hidden sm:flex relative flex-col group overflow-hidden mt-4 xl:text-2xl lg:text-lg">
              <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                <a href="mailto:info@proghostwritingservices.com">
                <span className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                  <MailIcon height={20} width={20} />
                  <p className="text-black ">info@proghostwritingservices.com</p>
                </span>
                </a>
              </div>

              <div className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-blue">
              <a href="mailto:info@proghostwritingservices.com">
                <span className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-blue">
                  <MailIcon height={20} width={20} />
                  <p className="">info@proghostwritingservices.com</p>
                </span>
                </a>
              </div>
            </div>

            <div className="hidden sm:flex relative flex-col group overflow-hidden mt-4 ">
              <div className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                <a href="tel:+1(206)746-7149">
                <span className="flex items-center space-x-2 z-10 transition-all duration-300 group-hover:-translate-y-8 group-hover:opacity-0">
                  <PhoneIcon height={20} width={20} />

                  +1(206)746-7149
                </span>
                </a>
              </div>

              <div className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-blue">
                <a href="tel:+1(206)746-7149">
                <span className="flex items-center space-x-2 absolute top-0 transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-blue w-[150px]">
                  <PhoneIcon height={20} width={20} />

                  +1(206)746-7149

                </span>
                </a>
              </div>
            </div>
          </div>





        )}
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-8">

          {/* Close Button inside Sidebar */}
          <div className="self-end">
            <button onClick={() => setIsSidebarOpen(false)} className="focus:outline-none">
              {/* Close Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href='/'>
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={100}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <Link href="/about" className="text-md font-medium hover:text-[#124680]" onClick={() => setIsSidebarOpen(false)}>About Us</Link>
          <Link href="service" className="text-md font-medium hover:text-[#124680]" onClick={() => setIsSidebarOpen(false)}>Services</Link>
          <Link href="/contactus" className="text-md font-medium hover:text-[#124680]" onClick={() => setIsSidebarOpen(false)}>Contact Us</Link>

          {/* Contact Section in the Sidebar */}
          <div className="space-y-4">
            {/* Phone */}
            <a href="tel:+1(206)746-7149">
            <span className="flex flex-row h-10 gap-x-2 md:gap-x-1 text-xs text-black hover:text-green-600 cursor-pointer">
              <PhoneIcon height={20} width={20} />
              +1(206)746-7149
            </span>
            </a>
          <a href="mailto:info@proghostwritingservices.com">
            <span className="md:hidden flex flex-row h-10 gap-x-2  w-full md:text-xl text-xs text-black hover:text-green-600 cursor-pointer">
              <MailIcon height={20} width={20}  />
              info@proghostwritingservices.com
            </span>
            </a>
          </div>
        </div>
      </div>

      {/* Overlay when Sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when overlay is clicked
        ></div>
      )}
    </section>
  );
};

export default Navbar;

