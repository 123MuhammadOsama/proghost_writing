import React from 'react'

const Process = () => {

    const steps = [
        {
          step: "01",
          title: "Order Details",
          description:
            "Fill out the form at the top of the page with your contact information. Our friendly support staff will call you to discuss your requirements, such as the subject of your publication, the idea behind this one, your personal life, your inspiration, any reference material, the number of words you needed, and so on.",
        },
        {
          step: "02",
          title: "Outline Draft",
          description:
            "Fill out the form at the top of the page with your contact information. Our friendly support staff will call you to discuss your requirements, such as the subject of your publication, the idea behind this one, your personal life, your inspiration, any reference material, the number of words you needed, and so on.",
        },
        {
          step: "03",
          title: "Topic Approval",
          description:
            "Fill out the form at the top of the page with your contact information. Our friendly support staff will call you to discuss your requirements, such as the subject of your publication, the idea behind this one, your personal life, your inspiration, any reference material, the number of words you needed, and so on.",
        },
        {
          step: "04",
          title: "Editing & Proofreading",
          description:
            "Fill out the form at the top of the page with your contact information. Our friendly support staff will call you to discuss your requirements, such as the subject of your publication, the idea behind this one, your personal life, your inspiration, any reference material, the number of words you needed, and so on.",
        },
        {
          step: "05",
          title: "Formatting & Designing",
          description:
            "Fill out the form at the top of the page with your contact information. Our friendly support staff will call you to discuss your requirements, such as the subject of your publication, the idea behind this one, your personal life, your inspiration, any reference material, the number of words you needed, and so on.",
        },
        {
          step: "06",
          title: "Publishing & Promotion",
          description:
            "Fill out the form at the top of the page with your contact information. Our friendly support staff will call you to discuss your requirements, such as the subject of your publication, the idea behind this one, your personal life, your inspiration, any reference material, the number of words you needed, and so on.",
        },
      ];


  return (
    <div className='py-10 px-4 xl:px-20 2xl:px-40'>
        <h2 className='text-[26px] lg-[28px] font-bold'>Our <span className='text-[#11A4FF]'>Ghostwriting</span> Service Process</h2>

        <div className="py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
            
          <div
            key={index}
            className=" p-6 rounded-lg flex justify-start items-start text-left"
          >
           <div>
           <p className=" font-light text-lg p-2 border-r border-gray-300">Step {step.step}</p>
            </div> 

            <div className='pl-2'>
            <h2 className="text-xl font-normal mt-2">
              {step.title}
            </h2>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              {step.description}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Process