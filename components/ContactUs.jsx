"use client";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { verifyCaptcha } from "@/app/api/recaptcha/server_action";
import { ToastContainer,toast } from "react-toastify";
function ContactUs() {
  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [query, setQuery] = useState("");

  async function handleCaptchaSubmission(token) {
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = toast.loading("Query is being sent ...", { autoClose: false });
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        query: query,
      }),
    });
    try {
      if (response.ok) {
        const responseData = await response.text();
        toast.update(id, {
          render: responseData,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setName("");
        setEmail("");
        setPhoneNumber("");
        setQuery("");
      } else {
        const responseData = await response.json();
        toast.update(id, {
          render: responseData,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mx-auto text-center  justify-between flex flex-col xl:flex-row  container 2xl:mt-10 mb-20 sm:mt-16 py-20 sm:p-2 md:p-10 md ">
        <div className=" p-6 rounded-md flex flex-col justify-between">
          <form
            onSubmit={handleSubmit}
            className="text-left flex flex-col justify-between"
          >
            <div>
              <h1 className="my-5 mb-10">
                <span className="  text-3xl md:text-4xl  lg:text-5xl text-secondary font-bold ">
                  Contact us Directly
                </span>
              </h1>

              <div className="mb-4">
                <input
                  type="email"
                  className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700 rounded-md p-2 w-full"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700 rounded-md p-2 w-full"
                  placeholder="Cell Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="query"
                  className="border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700 rounded-md p-2 w-full"
                  placeholder="Query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  required
                />
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdlnyIpAAAAAO3jl8iqrfTTTKr8Y3t3vcuqv6p9"
                onChange={handleCaptchaSubmission}
              />

              <p className="text-slate-900 text-xs">
                Please verify the Captcha to Submit
              </p>
              <button
                type="submit"
                className={`text-white px-4 py-2 rounded-md mt-3 transition-colors ${
                  isVerified ? "bg-blue hover:bg-orange-700" : "bg-gray-600"
                }`}
                disabled={!isVerified}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0779716597312!2d-0.041884099999999994!3d51.511785499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876031edff1f8f3%3A0x6584eec1e91ea08b!2sBest%20Essay%20Help%20UK!5e0!3m2!1sen!2s!4v1694071134863!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
    </div>
  );
}

export default ContactUs;
