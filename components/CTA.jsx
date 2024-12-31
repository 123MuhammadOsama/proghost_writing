import Image from "next/image";
import Link from "next/link";

function CTA() {
  return (
    <div className="relative w-full">
      <div className="absolute top-2 bottom-0 right-0 flex items-center justify-end my-10 pt-10 pb-20" >
        <Image 
          src="/hankie_pankie.png"
          width={300}
          height={400}
          className="z-10 mb-10 hidden 2xl:block"
          alt="Ghost"
          title="Ghost Writing Ghost"
        />
         <Image 
          src="/hankie_pankie.png"
          width={200}
          height={300}
          className="z-10 mb-10 2xl:hidden xl:block  hidden"
          alt="Ghost"
          title="Ghost Writing Ghost"
        />
           <Image 
          src="/hankie_pankie.png"
          width={180}
          height={300}
          className="z-10 -mt-5 pl-5 mb-2 xl:hidden lg:block  hidden"
          alt="Hankie Pankie"
          title="Ghost Writing Ghost "
        />
      </div>
      <div className="lg:absolute flex px-auto w-full md:p-2 p-8 lg:h-40 md:ps-0 ps-10 md:h-[200px] h-[300px] bg-gradient-to-r from-blue to-darkblue">
        <div className="px-6 w-full flex flex-col items-center justify-center mx-auto ">
          <div className="flex flex-col items-start justify-center">
            <span className="text-white font-bold xl:text-2xl md:text-2xl lg:text-xl text-lg  ">
            Dare to Dream Big? Plot It, Pen It, Publish It—Ignite Your Imagination and Let's Roll!
          </span>
          <p className="text-white mt-1 md:text-xl xl:text-lg lg:text-sm text-md">
            Why Let Your Ideas Gather Dust When We Can Shape Them into a Literary Masterpiece That Everyone Will Remember?
          </p>
          <Link href="/contactus">
          <button className=" text-white border-2 border-white h-10 py-2 px-5 rounded-md hover:bg-black hover:border hover:border-black md:text-md text-xs my-2 transition-all">
          Schedule a Consultation Meeting
        </button>
          
          </Link>
         
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

export default CTA;

