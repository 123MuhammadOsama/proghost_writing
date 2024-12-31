// import Image from "next/image";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import BookSection from "@/components/BookSection";
import Servicessection from "@/components/Servicessection";
import Stepper from "@/components/Stepper";
import ScrollSection from "@/components/ScrollSection";
import Testimonials from "@/components/Testimonials";
import Accordions from "@/components/Accordions";
import { Metadata } from "next";
import Description from "@/components/Description";
import CTA from "@/components/CTA";



export default function Home() {
  
  return (
    <div className="min-h-screen">
      <Hero />
      <Carousel />
      <Description />
      <BookSection
        title="Words Waiting to Be Written? Let's Make Them Unforgettable from Start to Finish!"
        paragraph={
          <>
            Bring Us Your Half-Baked Ideas, and We&apos;ll Whip Them into a
            Story So Irresistibly Captivating, Your Readers Will Devour Every
            Word and Be Hungry for More!
          </>
        }
        src="/homepage-cta.png"
      />

      <Servicessection />
      <ScrollSection />
      <Stepper />
      <CTA/>
      <Testimonials />
      <Accordions />
    </div>
  );
};
