"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share';
import { PhoneIcon, MailIcon } from "lucide-react";
import InstagramShareButton from "./Sharebutton";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center bg-darkblue border-t border-gray-200 justify-center p-6 h-min ">
      <div className="">
        <div className="">
          <Image
            src="/logo-white.png"
            alt="Ghost Writing Logo"
            title="ProGhost Writing Logo"
            className="mx-auto md:w-[300] md:h-[200] w-200 h-100 pb-4"
            width={300}
            height={200}
          />
        </div>
        {/* Company Description */}
        <div className="text-center sm:text-lg text-xs text-white">
          <p>Proghostwritingservices.com is your trusted partner for bringing stories to life. Specializing in all genres, our
            seasoned team of ghostwriters transforms your ideas into polished, publish-ready masterpieces</p>


        </div>
        {/* Quick Links */}
        <div className="flex flex-row mx-auto items-center justify-center py-4 text-white">
          <Link href="/">
           < p className="border-r px-2  hover:text-red-700 sm:text-md text-xs" >Home</ p >
          </Link>
         <Link href="/about">
         < p className="border-r px-2 hover:text-red-700 sm:text-md text-xs"  >About Us </ p >
         </Link>
         <Link href="/">
         < p className="border-r px-2 hover:text-red-700 sm:text-md text-xs" href="#">Our Services</ p >
         </Link>
         <Link href="/" >
         
         < p className="border-r px-2 hover:text-red-700 sm:text-md text-xs" href="">Clients Review</ p >
         </Link>
         <Link href="/contactus">
         
         < p className="border-r px-2 hover:text-red-700 sm:text-md text-xs" href="/contactus">Contact Us</ p >

         </Link>


        </div>

        {/* Services */}
        <div className="flex flex-col md:mx-auto  mt-2 items-center justify-center text-white">
          <p className="font-bold md:pb-0 pb-2"> Services</p>
          <ul className="flex flex-row  md:text-md text-xs ">
            <li className="md:text-md text-xs border-r p-2  border-r-white">Ebook Ghostwriting </li>
            <li className="md:text-md text-xs border-r p-2  border-r-white">Story Writing</li>
            <li className="md:text-md text-xs border-r p-2  border-r-white">Non Fiction Ghostwriting</li>
            <li className="md:text-md text-xs border-r p-2  border-r-white">Memoir Writing</li>
            <li className="md:text-md text-xs border-r p-2  border-r-white">SEO Content Writing </li>
          </ul>


        </div>
      

        {/* Social Icons */}
        <div className="flex flex-col mx-auto items-center justify-center gap-2 pt-4 text-white">
          <p className="font-bold md:text-lg text-xm"> Follow us for updates and exclusive content: </p>
          <ul className="flex flex-row gap-2 px-10">
            <li >

              <Link href="https://www.facebook.com/proghostwritingservices/" target="_blank" rel="noopener nofollow">
                <FacebookIcon size={38} round  title="Facebook Button"/>
              </Link>
            </li>
            <li>
              <Link href=" https://www.linkedin.com/company/proghostwritingservices" target="_blank" rel="noopener nofollow">


                <LinkedinIcon size={38} alt="Linked In " title="LinkedIn Button"round />


              </Link>

            </li>
            <li>
              <Link href="https://www.instagram.com/proghostwritingservices" target="_blank" rel="noopener nofollow">
                 <Image 
                 src= "/instagram.png"
                 size={38}
                 height={40}
                 width={40}
                 alt="Insta Logo"
                 title="Instagram Button "
                 />
              </Link>


            </li>
            <li>
              <Link href="https://x.com/Proghost_writer" target="_blank" rel="noopener nofollow">
                <TwitterIcon size={38} round  alt="Twitter" title="Twitter Button "/>
              </Link>

            </li>



          </ul>
        </div>
        {/* Contact Us */}

        {/* <div className=" flex flex-col items-center text-white pt-2 ">
         <span className="font-bold"> Contact Us</span> 
          <ul className="flex md:flex-row md:gap-10 gap-2 flex-col justify-center items-center ">
            <li className="flex flex-row px-2 md:text-md mx-auto text-white hover:text-red-800 text-center">
              <PhoneIcon height={30} width={30} className="px-1 hover:-translate-x-2  " />
              +1 (206) 746-7149
            </li>
            <li className="flex flex-row px-2 mx-auto md:text-md  text-white hover:text-red-800 text-center">
              <MailIcon height={30} width={30} className="px-1 hover:-translate-x-1 " />
              info@proghostwritingservices.com
            </li>


          </ul>


        </div> */}

        {/* Disclaimer */}
        <div className="flex mx-auto text-center pt-5 items-center justify-center text-white">
          <p> Proghostwriting services for reference and guidance purposes. All delivered work is
            intended to assist clients in creating their own original content and should not be used for direct
            submission or misrepresentation.</p>

        </div>
        {/* Copyright */}
        <p className=" p-2 md:mx-auto mx-auto text-center text-white  ">
          Copyright © 2024 Proghostwritingservices.com, All Rights Reserved.</p>




      </div>



    </footer>
  );
}
