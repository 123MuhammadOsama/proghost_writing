import Image from "next/image";

export const metadata = {
  title: "About Us - Pro Ghostwriting Services",
  description:
    "Pro ghostwriting services focus on delivering high-quality ghostwriting services. Read more about us by clicking this page.",
    alternates: {
      canonical: 'https://proghostwritingservices.com/about',
      last_updated: '10/15/2024'
    },
    openGraph: {
      title: "About - Pro Ghostwriting Services",
      description: "Pro ghostwriting services focus on delivering high-quality ghostwriting services. Read more about us by clicking this page",
      images: [
        {
          // url: "https://proghostwritingservices.com/logo",
          url:"https://proghostwritingservices.com/_next/image?url=%2Flogo-black.png&w=256&q=75",
          width: 1200,
          height: 628,
          type: 'image/jpeg',
        }
      ],
      siteName: "Pro GhostWriters",
      locale: 'en_US',
      type: 'article',
      url: 'https://proghostwritingservices.com/about',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Pro Ghost Writing Services",
      description:
         "Searching for ghostwriters to create your books, speeches, memoirs and articles? Hire our pro ghostwriting services and get content written at low prices",
      creator: "@Proghost_writer",
      site: "x.com/Proghost_writer",
      images: [""],
    },
};

export default function About() {
  return (
    <div className="p-4 lg:p-12 mt-28 overflow-scroll">
      <h1 className="font-bold text-4xl text-gray-800 mb-6 2xl:text-6xl max-w-[1368px] mx-auto">
        <span className="text-blue">Pro Ghostwriting</span> – About Us
      </h1>

      {/* Section 1: The Beginning */}
      <div>
        <div className="flex flex-col lg:flex-row items-center mb-6 mx-auto max-w-[1368px] gap-6">
          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="font-semibold text-3xl text-black mb-4 2xl:text-4xl ">
              The Beginning of Something{" "}
              <span className="text-blue">Extraordinary</span>
            </h2>
            <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]">
              Ever had a brilliant idea bubbling in your mind but no clue how to
              get it on paper? That’s why we're here. At ProGhostwriting, we
              turn your <span className="italic decoration decoration-black">“I should write a book someday”</span> dreams into
              <span className="italic"> “Wow, I’m a
              published author!”</span> realities. Our mission? To take your stories,
              ideas, or business jargon and spin them into engaging narratives
              that sound so much like you, even your own best friend will think
              you wrote it all by yourself. And yes, we’re here to make you
              sound that good!
            </p>
          </div>
          <Image
            src="/about-us-hero.png"
            width="400"
            height="600"
            className="w-full lg:w-[50%] object-contain"
            alt="Collection of Books"
            title="ProGhostwriting Books Collection"
          />
        </div>

        {/* Second Section */}
        <div className="flex flex-col lg:flex-row items-center mb-10 mx-auto max-w-[1368px] gap-6">
          <Image
            src="/image_3.png"
            width="500"
            height="500"
            className="w-full lg:w-[40%] object-contain"
            alt="Book Name: The Clarity Compass"
            title="The Clarity Compass"
          />
          <div className="flex flex-col w-full lg:w-[60%]">
            <h3 className="text-blue font-semibold text-xl mb-4 ">
              Who We Are? Your Literary Dream Team!
            </h3>
            <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]">
              We’re a quirky bunch of wordsmiths, idea-shapers, and master
              storytellers who believe that every person has a story worth
              telling—but not everyone has the time, energy, or caffeine
              supply to do it all alone. Founded by a group of passionate
              minds, ProGhostwriting was born to help you get those ideas out
              of your head and into the world, with style and flair. We believe
              in authenticity, respect for your voice, privacy, and above all,
              making sure the final product is something you’ll be proud of.
            </p>
            <h3 className="text-blue font-semibold text-xl mt-6 mb-4">
              What We Craft (Spoiler: It’s Amazing)
            </h3>
            <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]">
              From ghostwriting bestselling books to crafting business content
              that doesn’t put people to sleep, we’ve got our ink-stained hands
              in just about everything. Need a compelling article for your blog?
              A captivating memoir? Or even that tricky speech that’s been
              giving you non-stop nightmares? We’ve got you covered.
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col lg:flex-row items-center mb-10 mx-auto max-w-[1368px] gap-6">
          <div className="flex flex-col w-full lg:w-[60%]">
            <h3 className="text-blue text-xl font-semibold mb-4">
              Our Magical Process (How It Works)
            </h3>
            <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]">
              Let’s break it down. We’re like your favorite playlist:
              collaborative, easy to vibe with, and always hitting the right
              notes. Here’s how we wing it:
            </p>
            <ul className="list-disc ml-4 xl:leading-relaxed 2xl:text-xl sm:text-md">

              <li className="mb-2">
                <h4 className="text-blue lg:text-[18px] text-[14px]">Initial Jam Session:</h4>
                <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]"> We kick
                  things off with a chat to understand your vision, voice, and
                  what exactly you’re hoping to achieve.
                </p>


              </li>




              <li className="mb-2">

                <h4 className="text-blue  lg:text-[18px] text-[14px]">The Draft Dance:</h4>
                <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]">
                  We start
                  crafting your content, keeping you in the loop with drafts and
                  updates.
                </p>

                
              </li>
              <li className="mb-2">

                <h4 className="text-blue  lg:text-[18px] text-[14px]">Revise, Revise, and… Revise:</h4>{" "}
                <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]">
                  We polish the draft till it shines brighter than your phone
                  screen at 3 AM.

                </p>




              </li>
              <li>

                <h4 className="text-blue  lg:text-[18px] text-[14px]">Final Handshake:</h4>
                <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]">
                  'After all
                  revisions and tweaks, we hand over the finished piece

                </p>

              </li>
            </ul>
          </div>
          <Image
            src="/image_4.png"
            width="400"
            height="400"
            className="w-full lg:w-[40%] object-contain"
            alt="Book Name: Romancing with Ramen"
            title="Romancing with Ramen"

          />
        </div>

        {/* Fourth Section */}
        <div className="flex flex-col lg:flex-row items-center mb-10 mx-auto max-w-[1368px] gap-6">
          <Image
            src="/image_5.png"
            width="400"
            height="400"
            className="w-full lg:w-[40%] object-contain"
            alt="Book Name: The Art of Saying No"
            title="The Art of Saying No"
          />
          <div className="flex flex-col w-full lg:w-[60%]">
            <h3 className="text-blue text-xl font-semibold mb-4">
              Why We’re the Ghostwriters You’ve Been Looking For!
            </h3>
            <ul className="list-disc ml-4 xl:leading-relaxed 2xl:text-[16px] sm:text-lg">
              <li className="mb-2">

                <h4 className="text-blue  lg:text-[18px] text-[14px]">Confidentiality?</h4>
                 <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]">
                  We take it
                  as seriously as our morning coffee.

                </p>


              </li>
              <li className="mb-2">

                <h4 className="text-blue  lg:text-[18px] text-[14px]">Client Stories?</h4>
                <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]"> 
                  We’ve helped
                  countless clients achieve their writing goals.


                </p>


              </li>
              <li>
                <h4 className="text-blue lg:text-[18px] text-[14px]">Why Us?</h4>
                 <p className="md:text-[16px] text-[14px] ">
                  We breathe life into
                  your words, making sure they leap off the page.

                </p>
              </li>
            </ul>
            <h3 className="text-xl text-blue font-semibold mt-6">
              Your Story Deserves to Be Told
            </h3>
            <p className="sm:text-lg xl:leading-relaxed xl:text-[16px]">
              We believe in the power of words to change minds, hearts, and
              lives. Your story is unique, and we're dedicated to helping you
              tell it in a powerful, authentic, and compelling way that’s beyond
              unforgettable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
