import Image from 'next/image'
import React from 'react'

const Situation = () => {
  return (
    <div className='bg-gradient-to-b from-[#11A4FF] to-[#062149] py-5 px-4 2xl:px-56 items-center justify-center'>
        <h2 className='text-2xl text-white'>Win-Win Situation:Let’s Take Your Thoughts to the Next Level</h2>
        <div className='flex flex-col lg:flex-row items-end justify-end gap-32 max-w-7xl'>
        <p className='text-white text-md pt-8'>Take the world by storm with a story that speaks volumes. Keep your reader's mind engaged with our wordplay. We are here to make your name – Your success is our satisfaction. Let your literary piece make waves with our flowing wordplay and magic. Partner up and watch your thoughts turn into reality with a book that imprints your message in the readers’ hearts.</p>

        <Image
            src="/situation.png"
            alt='books'
            width={500}
            height={500}
        />
        </div>

        <div className='flex pt-8 space-x-5'>
            <button className='text-white py-1 px-12 rounded-lg bg-[#11A4FF] hover:bg-yellow-300'>Live Chat</button>

            <button className='text-white py-1 px-8 rounded-lg bg-[#11A4FF] hover:bg-yellow-300'>Request a quet</button>
        </div>
      
    </div>
  )
}

export default Situation
