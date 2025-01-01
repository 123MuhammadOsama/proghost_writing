'use client'
export default function Process() {
    // Array of step data
    const steps = [
        {
            number: "01",
            title: "Understanding Your Vision:",
            description: "We start by getting to know you and your project. During our initial consultation, we dig deep into your ideas, objectives, and desired outcomes.",
        },
        {
            number: "02",
            title: "Creating a Detailed Outline:",
            description: "We create a comprehensive outline to organize your ideas and structure the narrative effectively.",
        },
        {
            number: "03",
            title: "Drafting and Development:",
            description: "Our ghostwriters begin drafting the content, ensuring engaging and cohesive content.",
        },
        {
            number: "04",
            title: "Collaborative Revisions:",
            description: "We value your feedback and ensure the manuscript reflects your vision.",
        },
        {
            number: "05",
            title: "Editing and Proofreading:",
            description: "Our editorial team reviews it for clarity, consistency, and grammatical accuracy.",
        },
        {
            number: "06",
            title: "Client Approval and Finalization:",
            description: "We present it to you for approval, ensuring the finished product meets your standards.",
        },
    ];

    return (
        <div className="relative flex flex-col my-6 px-4 md:px-12 pb-10">
            <h2 className="font-bold text-3xl md:text-4xl pb-11 text-center lg:px-20 ">
                How We Ensure High-Quality <span className="text-blue">Ghost Writing Services</span> for Every Client!
            </h2>

            {/* Grid container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
                {/* Mapping through the steps array */}
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start p-4 md:w-30  bg-white  ">
                        <div className="border-r  px-4 py-2 text-center mr-4 my-auto lg:my-0 font-extralight border-gray-400">
                            <span className="font-thin">Step</span>
                            <span className="flex items-center justify-center w-8 h-8 rounded-full font-extrabold font-serif text-2xl  ">{step.number}</span>
                        </div>
                        <div className="text-left md:flex md:justify-center md:flex-col">
                            <span className="font-bold lg:text-xl md:text-lg  xl:py-2">{step.title}</span>
                            <p className="lg:text-[16px] pt-1 md:text-xs ">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


