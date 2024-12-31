import Image from "next/image";
import Link from "next/link";
import TawktoButton from "./TawktoButton";
// import Button from "@/components/Button";

export default function BookSection({
  title,
  paragraph,
  src,
  imgHeight = 500,
  imgWidth = 500,
  additionalclass,
}) {
  return (
    <div className="w-full  md:p-8 h-min xl:ps-0 lg:ps-10 px-10 bg-gradient-to-r from-blue to-darkblue">
      <div className="max-w-6xl mx-auto py-5 flex flex-col lg:flex-row justify-between items-center px-10 ">
        <div>
          <div className="flex flex-col  ">
            <span className="text-white  font-bold md:text-2xl text-xl mb-4 max-w-2xl">{title}</span>
            <p className="text-white text-[14px]  md:text-xl  max-w-2xl md:p-2">
              {paragraph}
            </p>
          </div>

          {/* Buttons Section */}
          <div className="mt-4 flex flex-row  space-x-2 items-center justify-center lg:items-start lg:justify-start ">
            <TawktoButton height="8px" width="200px" padding="2" />
            <button className="h-[50px] w-[140px] sm:h-[35px] sm:w-[205px]  md:h-[45px] md:w-[180px] border m-auto rounded-lg transition-all border-yellow-500 hover:bg-yellow-500 mb-4">
              <Link
                href={"/contactus"}
                className="font-semibold text-white md:text-md  text-sm "
              >
                Request a Quote
              </Link>
            </button>
          </div>
        </div>
        <Image
          src={src}
          alt="ProGhost Writing Books "
          title="Our Ghost Writing Books"
          width={imgWidth}
          height={imgHeight}
          className={`pt-4 lg:h-[${imgHeight}px] lg:w-[${imgWidth}px] object-contain  ${additionalclass}`}
        />
      </div>
    </div>
  );
}
