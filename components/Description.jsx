"use client";

import Image from "next/image";
const Description = () => {
  return (
    <div className="flex max-w-8xl flex-col md:px-10 sm:ps-10 px-3">
      <h2 className="font-bold  lg:px-10 pb-5 text-3xl sm:text-4xl text-left">
        Your Story, Our Spell – Trusted{" "}
        <span className="text-blue">Ghost Writing Services</span> that
        Captivate!
      </h2>
      <div className="md:w-full lg:px-5 flex justify-between md:items-center md:mb-10  ">
        <div className="md:max-w-[2000px] max-w-6xl px-2 md:px-10">
          <p>
            Ever wondered why so many professionals, authors, visionaries, and
            entrepreneurs turn to ghostwriting? Let’s face it: Writing can be
            tough. Sometimes you’ve got all these amazing ideas, burning
            passion, or knowledge, but not the time or skill when it comes to
            putting them on paper and crafting a showstopper. The struggle is
            real… but that’s where we come in – your secret weapon in the
            chaotic world of words! We’re like the invisible geniuses behind the
            curtain, ensuring your message is clear, powerful, and polished.
          </p>
          <p>
            Why our online ghostwriting services rock, you ask? Well, it’s
            simple! Because: it’s like having a creative bestie who ensures your
            thoughts and stories are told exactly how you want – without you
            having to stress about writer’s block or those annoying deadlines.
            Plus; you get all the credit, and we do the tough work. What’s not
            to love?
          </p>
          <br />
          <ul className="list-item p-5 ">
            <li className="pb-5">
              <span className="font-bold ">
                Diverse Offering:If You Can Dream It, We Can Write It!
              </span>
              <p>
                We handle EVERYTHING! From fiction and non-fiction books to
                business reports, blog posts, speeches, and even academic papers
                and captivating articles – you name it; our range is as vast as
                your imagination. No matter what type of content you need,
                consider our US-based ghostwriting company as your one-stop shop
                for all things writing!
              </p>
            </li>
            <li className="pb-5">
              <span className="font-bold ">
                Personalization: Your Ideas, Our Words, One Epic Creation!
              </span>
              <p>
                No one-size-fits-all content here! Everything we create is
                tailored to match your vibe and preferences. Whether you need a
                fun, conversational tone or a formal, polished finish, we make
                sure your content feels authentically you. And the best part?
                Our team of skilled writers listens, adjusts, and delivers
                exactly what you’ve got in mind—making your blueprint a reality,
                every time!
              </p>
            </li>
            <li className="pb-5">
              <span className="font-bold">
                24/7 Support: We’re Always Here, Always Ready!
              </span>
              <p>
                Got a question at 2 a.m. or need to brainstorm ideas over the
                weekend? We’re just a quick message away! We know creativity
                doesn’t stick to a 9-5 schedule, and neither do we. Whether
                you’re looking for a “<span>ghostwriter near me</span>” or
                someone to assist with your project across the globe, we’ve got
                you covered around the clock – because your success never
                sleeps!
              </p>
              <p>
                So, why hesitate then? Count on us; Whatever it is, we’re ready
                when you are!
              </p>
            </li>
          </ul>
        </div>
        <Image
          src="/Group_50.png"
          alt="Girl with Book"
          title="Proghostwriting Girl with Book "
  
          width={600}
          height={700}
          className=" lg:block hidden lg:pb-10"
          style={{
            marginTop: 4,
            marginBottom: 4,
          }}
        />
      </div>
    </div>
  );
};

export default Description;
