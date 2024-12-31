import React from 'react'

const Expect = () => {

    const textBlock = [
        "Did you know that it takes about 475 hours to write a novel? Writing a book is no cakewalk. It may even take someone with years of experience ages to finish a book.",
        "Great renowned authors often hire ghostwriters to meet tight schedules, release dates, and market demands. You may never know which parts of your favorite books were not written by the author themselves.",
        "Ghostwriters specialize in capturing the author's voice, language, and pace as if they're two peas in a pod, so the book doesn't look like it was written by someone else.",
        "Even a renowned expert may need help from a ghostwriter. Someone who is not even a writer by profession is sure to need a specialist to help them.",
        "Books are often a collaboration of many minds, including editors, proofreaders, and sometimes even beta readers. Writing is rarely a solo effort.",
        "Publishing houses push for deadlines that make it nearly impossible for authors to handle every part of the process alone, which is why ghostwriters are so valuable.",
        "Did you know that some of the most famous autobiographies were not written by the individuals themselves? Ghostwriters often play a crucial role in these projects.",
        "Whether it's fiction, nonfiction, or technical writing, ghostwriters provide essential support to ensure the final product is polished and professional."
      ];


  return (
    <div className='py-10 px-4 2xl:px-40'>
        <h2 className='text-[26px] lg:text-[28px] font-bold'>What to Expect When <span className='text-[#11A4FF]'>Writing a Book</span> on Your Own?</h2>

        <div className="h-screen flex justify-center items-center border border-gray-300 m-8">
      <div className="w-[95%] h-[95%] overflow-y-scroll no-scrollbar bg-white ">
        <div className="grid grid-cols-2 gap-4">
          {Array(8)
            .fill(textBlock)
            .map((block, index) => (
              <div
                key={index}
                className=" bg-white"
              >
                {block}
              </div>
            ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Expect