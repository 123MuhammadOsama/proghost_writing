"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import { verifyCaptcha } from "@/app/api/recaptcha/server_action";
import TawktoButton from "./TawktoButton";
import { ArrowBigLeft, MousePointer2, MoveRight } from "lucide-react";
import 'react-toastify/dist/ReactToastify.css';

export default function Hero() {



  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Added this field if needed
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function handleCaptchaSubmission(token) {
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = toast.loading("Query is being sent ...", { autoClose: false });

    try {
      const response = await fetch("/api/heroform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phoneNumber: phoneNumber, // Add if your backend expects this field
          subject: subject,
          query: message, // Backend expects this as 'query'
        }),
      });

      if (response.ok) {
        const responseData = await response.text();
        toast.update(id, {
          render: responseData,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        // Clear the form fields
        setName("");
        setEmail("");
        setPhoneNumber("");
        setSubject("");
        setMessage("");
        console.log(responseData)
      } else {
        const responseData = await response.json();
        toast.update(id, {
          render: responseData.message || "Failed to submit form",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });

      }
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.update(id, {
        render: "An error occurred while sending your query",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };
  return (
    <div>
      <>
        <section className="bg-white dark:bg-gray-900 mt-32 ">
          <div className="flex flex-col lg:flex-row md:px-6 lg:mx-auto pl-2 lg:pl-10 2xl:-mt-7 ">
            <div className="flex lg:px-2 xl:pl-[2.5rem] px-8 lg:-pt-[5px]">
              <div className=" md:mr-auto place-self-center w-[400px] md:w-[700px] lg:w-[500px] xl:w-[700px] 2xl:w-auto 2xl:-mt-20">
                <h1 className="2xl:max-w-4xl lg:max-w-2xl mb-4 tracking-tight leading-none md:text-4xl dark:text-white lg:w-200 xl:text-5xl 2xl:text-6xl lg:-mt-30 text-2xl ">
                  {" "}
                  Expert{" "}
                  <span className="text-blue">Ghostwriting Services</span> for
                  Business, Personal & Passion Projects
                </h1>

                <p className="max-w-5xl xl:max-w-5xl mb-4 font-light text-gray-600 lg:mb-8 lg:max-w-2xl lg:text-lg 2xl:text-[16px] dark:text-gray-400">
                  Breathe Life into Your Ideas! From Research Papers to Novels
                  and Beyond, USA’s Professional Ghostwriters Create
                  Award-worthy Masterpieces That Echo Your Unique Voice and
                  Signature Charm. You Think It, We Ink It = Your Work,
                  Perfectly Penned and Set for Glory!
                </p>
                <div className=" md:flex md:flex-row md:justify-start mb-2 hidden gap-1 ">
                  <TawktoButton />
                  <div className="flex justify-center items-center -mt-2 ">
                    <Link href="/contactus">
                      <button className="mb-5 bg-white h-[48px] w-[150px] text-red-800 rounded-md  border-red-800 flex flex-row p-3 px-3 m-3 gap-3 hover:text-white hover:border-white hover:bg-red-800 border-2 hover:translate-y-0 hover:translate-x-0 group transition-all ">
                        <span className=" group-hover:-translate-x-1 transition-all  ">
                          Order Now
                        </span>
                        <span>
                          <MoveRight className="group-hover:translate-x-1 transition-all" />
                        </span>
                      </button>
                    </Link>


                  </div>


                </div>

                <Image
                  src="/Reviews.png"
                  width="600"
                  height="800"
                  alt="Reviews"
                  className="md:block hidden "
                  title="Reviews of the images"


                />


              </div>
              {/* <div className=" m-2 hidden sm:block">
                <Image
                  src="/landing-page.png"
                  alt="Ghost Writing Books"
                  width="300"
                  height="150"
                  style={{
                    objectFit: "contain",
                    paddingTop: "80px",
                    zIndex: "1000",
                  }}
                />
              </div> */}
            </div>

            <div className="flex-1 p-4 lg:mx-auto 2xl:max-w-xl xl:max-w-md bg-transparent font-serif border border-1 rounded-md shadow-md lg:w-fit md:w-[600px] md:mx-auto md:m-8 mx-4 ">
              <p className="text-center underline underline-offset-8 text-transparent bg-clip-text bg-gradient-to-r to-blue from-darkblue text-lg font-semibold">Your Story is One <span className="decoration decoration-dashed decoration-slate-200"> Click Away</span> From Being Told</p>
              <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md py-3 px-4 text-gray-800 bg-neutral-200 focus:bg-transparent text-sm outline-darkblue"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(e.target.value); // Log the current value of the input
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md py-3 px-4 text-gray-800 bg-neutral-200 focus:bg-transparent text-sm outline-darkblue"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value);

                  }}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-md py-3 px-4 text-gray-800 bg-neutral-200 focus:bg-transparent text-sm outline-darkblue"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md py-3 px-4 text-gray-800 bg-neutral-200 focus:bg-transparent text-sm outline-darkblue"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full rounded-md px-4 text-gray-800 bg-neutral-200 focus:bg-transparent text-sm pt-3 outline-darkblue"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="w-full object-contain flex justify-center items-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LdlnyIpAAAAAO3jl8iqrfTTTKr8Y3t3vcuqv6p9" // Use the public key
                    onChange={handleCaptchaSubmission}
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <p className="text-slate-900 text-xs">
                    Please verify the Captcha to Submit
                  </p>
                  <button
                    type="submit"
                    className={`text-white px-4 py-2 w-24 h-min rounded-md mt-3 transition-colors ${isVerified ? "bg-blue hover:bg-orange-700" : "bg-gray-600"
                      }`}
                    disabled={!isVerified}
                  >
                    Submit
                  </button>
                </div>
              </form>

            </div>
          </div>
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            theme="dark"
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

        </section>

      </>

    </div>
  );
}
