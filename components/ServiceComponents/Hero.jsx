'use client'; // Add this line to mark the component as a Client Component

import Image from 'next/image';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Hero = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = toast.loading('Query is being sent ...', { autoClose: false });

        try {
            const response = await fetch('/api/heroform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phoneNumber,
                    subject,
                    query: message,
                }),
            });

            if (response.ok) {
                const responseData = await response.text();
                toast.update(id, {
                    render: responseData,
                    type: 'success',
                    isLoading: false,
                    autoClose: 5000,
                });

                // Clear the form fields
                setName('');
                setEmail('');
                setPhoneNumber('');
                setSubject('');
                setMessage('');
                console.log(responseData);
            } else {
                const responseData = await response.json();
                toast.update(id, {
                    render: responseData.message || 'Failed to submit form',
                    type: 'error',
                    isLoading: false,
                    autoClose: 5000,
                });
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            toast.update(id, {
                render: 'An error occurred while sending your query',
                type: 'error',
                isLoading: false,
                autoClose: 5000,
            });
        }
    };

    return (
        <div className="mt-10 lg:mt-40 px-2 lg:px-4 xl:px-10 2xl:px-32 flex flex-col lg:flex-row lg:space-x-5 2xl:space-x-32 items-center justify-center space-y-5">
            {/* First Section */}
            <div className="w-full lg:w-[300px] xl:w-[500px] 2xl:w-[600px] mt-20">
                <h2 className="font-bold text-[26px] lg:text-[28px]">
                    Find a <span className="text-[#11A4FF]">Ghostwriter</span> for Your Next Book.
                </h2>
                <h2 className="font-bold text-[26px] lg:text-[28px]">
                    Hire a <span className="text-[#11A4FF]">Ghostwriter</span> Now!
                </h2>
                <p className="text-[16px] lg:text-[18px] mt-5">
                    Are you looking to hire a ghostwriter to write a book? Trust our professional ghostwriter with your story. Let our ghostwriters stir our magical cauldron of powerful words to bring you an elixir in the form of an ingenious book.
                </p>
            </div>

            {/* Image Section */}
            <div>
                <Image src="/service_hero.png" alt="service" height={300} width={300} />
            </div>

            {/* Form Section */}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-[300px] sm:w-[400px] lg:w-[300px] xl:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[300px] sm:w-[400px] lg:w-[300px] xl:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-[300px] sm:w-[400px] lg:w-[300px] xl:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-[300px] sm:w-[400px] lg:w-[300px] xl:w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div>
                    <button className="bg-[#11A4FF] hover:bg-yellow-300 text-white w-[300px] lg:w-[300px] xl:w-[400px] text-xl py-3 rounded-lg">
                        Let's Get Started
                    </button>
                </div>
            </form>
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
};

export default Hero;
