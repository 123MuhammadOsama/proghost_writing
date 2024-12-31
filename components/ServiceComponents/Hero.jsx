import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='mt-40 px-20 lg:px-4 xl:px-10 2xl:px-32 flex flex-col lg:flex-row lg:space-x-10 2xl:space-x-32 items-center justify-center'>
        {/* pehla */}
        <div className='w-full lg:w-[400px] xl:w-[500px] 2xl:w-[600px] mt-20'>
            <h2 className='font-bold text-[26px] lg:text-[28px]'>Find a <span className='text-[#11A4FF]'>Ghostwriter</span> for Your Next Book.</h2>
            <h2 className='font-bold text-[26px] lg:text-[28px]'>Hire a <span className='text-[#11A4FF]'>Ghostwriter</span> Now!</h2>
            <p className='text-[16px] lg:text-[18px] mt-5'>Are you looking to hire a ghostwriter to write a book? Trust our professional ghostwriter with your story. Let our ghostwriters stir our magical cauldron of powerful words to bring you an elixir in the form of an ingenious book.</p>
        </div>

        {/* dosra */}
        <div>
          <Image
            src="/service_hero.png"
            alt='service'
            height={300}
            width={300}
          />
        </div>

        {/* thisra */}
        <form className='space-y-4'>
        <div>
        <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="w-[400px] lg:w-[200px] xl:w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

            <div>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Email"
                className="w-[400px] lg:w-[200px] xl:w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>
              <div>
              <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Phone Number"
              className="w-[400px] lg:w-[200px] xl:w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
              </div>

              <div>
              <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-[400px] lg:w-[200px] xl:w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
              </div>

              <div>
                <button className='bg-[#11A4FF] hover:bg-yellow-300 text-white w-[400px] lg:w-[200px] xl:w-[300px] text-xl py-3 rounded-lg'>Let's Get Started</button>
              </div>
        </form>
    
    </div>
  )
}

export default Hero
