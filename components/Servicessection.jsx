import Image from "next/image";

export function ServiceCard({ src, heading, color,title }) {
  return (
    <div
      className={`flex  font-medium h-[150px] sm:h-[200px] border justify-center items-center ${color} hover:border-t-cyan-700 hover:outline-offset-2 hover:shadow-inner`}
    >
      <div className="text-center">
        <Image
          src={src}
          alt={heading}
          title={title}
          width={70}
          height={70}
          className="mx-auto"
        />
        <span className="text-black md:text-[16px] text-sm  px-2 py-10">{heading}</span>
      </div>
    </div>
  );
}
export default function ServicesSection() {
      return (
        <div className="flex flex-col lg:px-10 px-2 lg:m-10 pt-10">

      <h2 className="font-bold lg:px-10 px-4 text-3xl sm:text-4xl text-center ">
        Our Holistic Approach to <span className="text-blue">Ghostwriting</span>

      </h2>
      <p className="font-medium text-lg sm:text-2xl mt-4 sm:mt-10 pb-10 sm:pb-20 text-center text-gray-600 lg:px-10">
        From Your Mind to the Spotlight – We Craft Experiences You’ll Cherish!
      </p>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:mx-auto sm:mx-10 md:mx-10 2xl:max-w-8xl lg:max-w-6xl xl:w-[1200px]  ">
        <ServiceCard src="/Pub-and-Marketing-Strategy.png" heading="ebook Ghostwriting " color="bg-sky-100"title="Marketing Strategy Icon" />
        <ServiceCard src="/Agent-Introductions.png" heading="Story Writing" color="bg-white-50"title="Agents Icon" />
        <ServiceCard src="/Book-Planing.png" heading="Brand Storytelling" color="bg-sky-100" title="Book-Planning Icon" />
        <ServiceCard src="/Publishing-Navigation.png" heading="Memoir Writing" color="bg-white-50" title="Publishing Navigation Icon" />
        <ServiceCard src="/Beta-Reader-Testing.png" heading="SEO Content Writing" color="bg-sky-100" title="Reader Testing Icon" />
        <ServiceCard src="/Book-Planing.png" heading="Script Writing" color="bg-white-50" title="Script Writing Icon" />
        <ServiceCard src="/Book-Proposals.png" heading="Speech Ghostwriting" color="bg-white-50" title="Book Proposals Icon" />
        <ServiceCard src="/Pub-and-Marketing-Strategy.png" heading="White Paper Ghostwriting" color="bg-sky-100"  title="Ghost Writing Strategies Icon"/>
        <ServiceCard src="/Book-Coaching.png" heading="Ghostwriting for Web Content" color="bg-white-100" title="Book Coaching Icon" />
        <ServiceCard src="/Book-Proposals.png" heading="Autobiography Books Writing" color="bg-sky-100" title="Autobiography Writing Icon" />
        <ServiceCard src="/Bestseller-Targeting.png" heading="Business Book Ghostwriting" color="bg-white-50" title="BestSeller Icon" />
        <ServiceCard src="/publishers101.png" heading="Fiction Ghostwriting" color="bg-sky-100" title="Fiction GhostWriting Icon"/>
      </div>


    </div>
  );
}