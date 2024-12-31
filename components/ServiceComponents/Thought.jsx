import Image from 'next/image'
import React from 'react'

const Thought = () => {
  return (
    <div  className='py-10 px-4 xl:px-20 2xl:px-40 bg-gradient-to-b from-[#11A4FF] to-[#062149] flex'>
        <div className='w-2/3'> 
        <h2 className='text-[26px] lg-[28px] font-bold text-white'>Win-Win Situation:Let’s Take Your Thoughts to the Next Level</h2>
        <p className='pt-5 text-white w-1/2'>Take the world by storm with a story that speaks volumes. Keep your reader's mind engaged with our wordplay. We are here to make your name – Your success is our satisfaction. Let your literary piece make waves</p>

        <button className='text-white mt-3 border border-white rounded-lg py-2 px-6 hover:bg-black hover:border-black'>Schedule A Consultation</button>
        </div>

        <div className='relative w-1/2 h-[200px]'>
    <Image
        src='/hankie_pankie.png'
        alt='win situation'
        width={1000}
        height={1000}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]'
    />
</div>

    </div>
  )
}

export default Thought