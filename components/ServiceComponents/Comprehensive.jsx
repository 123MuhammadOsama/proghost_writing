import React from 'react';
import Image from 'next/image';

const services = [
  { title: 'Tailored Strategy', image: '/Pub-and-Marketing-Strategy.png' },
  { title: 'Book Positioning, Tone, & Style', image: '/Agent-Introductions.png' },
  { title: 'Content & Structure', image: '/Reader1.png' },
  { title: 'Comprehensive Book Writing', image: '/Editing.png' },
  { title: 'Custom Revisions', image: '/Publishing-Navigation.png' },
  { title: 'Professional Editing', image: '/Book-Proposals.png' },
  { title: 'Cultural Accuracy Reading', image: '/Book-Planing.png' },
  { title: 'Beta Reader Testing', image: '/Book-Coaching.png' },
  { title: 'Book Proposal Development', image: '/Ghostwriting.png' },
  { title: 'Bestseller List Targeting', image: '/Reader1.png' },
  { title: 'Pitch Traditional Publishers', image: '/publishers101.png' },
  { title: 'Tailored Publishing Navigation', image: '/Bestseller-Targeting.png' },
];

const Comprehensive = () => {
  return (
    <div className='px-4 2xl:px-40 py-10'>
        <h2 className='text-[26px] lg:text-[28px]'>Comprehensive <span className='text-[#11A4FF]'>Ghostwriting</span> Services</h2>
        <h3 className='text-[22px] lg:text-[24px] italic pt-5'>A white-glove, tailored experience to fit your needs</h3>

        <div className="container px-auto lg:px-32 py-12 items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 transition-shadow ${index % 2 === 0 ? 'bg-[#D7F0FF]' : 'bg-gray-50'}`}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={64}
              height={64}
              className="mb-4 object-contain"
            />
            <h3 className="text-center text-lg font-medium text-gray-800">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Comprehensive