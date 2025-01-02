'use client';
import { useState } from "react";

const FAQ1 = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (id) => {
    setOpen(open === id ? null : id);
  };

  const faqItems = [
    {
      question: "Is your assignment writing services confidential?",
      answer: `Absolutely. We prioritise your privacy and keep all information completely confidential. Our site is SSL-certified and your details are never shared with third parties. Even our writers work anonymously, without knowing the client’s identity.`,
    },
    {
      question: "Who will write my assignment?",
      answer: `Your assignment will be handled by a qualified, experienced writer with expertise in your subject area, ensuring top-quality work that meets your academic standards.`,
    },
    {
      question: "What subjects can you help me with?",
      answer: `Your assignment will be handled by a qualified, experienced writer with expertise in your subject area, ensuring top-quality work that meets your academic standards.`,
    },
    {
      question: "How much does your assignment service cost?",
      answer: `Costs vary depending on complexity, length, and urgency. However, rest assured, we offer affordable assignment writing services. Our rates are competitive, and you can get a quick quote by filling out our order form online.`,
    },
    {
      question: "Do you offer discounts for students?",
      answer: `Yes, we regularly offer promotions and discounts for students, such as early-bird, referral, seasonal, and yearly deals to make our services more accessible! Check our website or reach out to our support team to learn about current deals.`,
    },
    {
      question: "What payment methods do you accept?",
      answer: `For your convenience, we accept multiple secure payment options, including credit cards, debit cards, PayPal, and other online methods. Keep an eye on our website and follow us on social media to stay updated on our latest offers!.`,
    },
    {
      question: "What payment methods do you accept?",
      answer: `For your convenience, we accept multiple secure payment options, including credit cards, debit cards, PayPal, and other online methods. Keep an eye on our website and follow us on social media to stay updated on our latest offers!.`,
    },
    {
      question: "What payment methods do you accept?",
      answer: `For your convenience, we accept multiple secure payment options, including credit cards, debit cards, PayPal, and other online methods. Keep an eye on our website and follow us on social media to stay updated on our latest offers!.`,
    },
    {
      question: "lorem",
      answer: `For your convenience, we accept multiple secure payment options, including credit cards, debit cards, PayPal, and other online methods. Keep an eye on our website and follow us on social media to stay updated on our latest offers!.`,
    },
    {
      question: "What payment methods do you accept?",
      answer: `For your convenience, we accept multiple secure payment options, including credit cards, debit cards, PayPal, and other online methods. Keep an eye on our website and follow us on social media to stay updated on our latest offers!.`,
    },
  ];

  // Divide FAQ items into two columns
  const column1 = faqItems.slice(0, Math.ceil(faqItems.length / 2));
  const column2 = faqItems.slice(Math.ceil(faqItems.length / 2));

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-10 xl:px-20 2xl:px-28 py-10">
      <h2 className="text-black font-bold text-2xl md:text-3xl text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-wrap gap-6 w-full">
        {/* Column 1 */}
        <div className="flex-1 flex flex-col gap-6">
          {column1.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full p-4 text-gray-800 font-medium text-start md:text-lg"
                aria-expanded={open === index}
                aria-controls={`accordion-body-${index}`}
              >
                <span>{item.question}</span>
                <span className="text-6xl font-bold">
                  {open === index ? "-" : "+"}
                </span>
              </button>
              <div
                id={`accordion-body-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  open === index ? "max-h-[200px] p-4 border-t" : "max-h-0"
                }`}
                style={{
                  height: open === index ? "auto" : "0",
                }}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Column 2 */}
        <div className="flex-1 flex flex-col gap-6">
          {column2.map((item, index) => (
            <div
              key={index + column1.length}
              className="border rounded-lg shadow-md transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index + column1.length)}
                className="flex items-center justify-between w-full p-4 text-gray-800 font-medium text-start md:text-lg"
                aria-expanded={open === index + column1.length}
                aria-controls={`accordion-body-${index + column1.length}`}
              >
                <span>{item.question}</span>
                <span className="text-6xl font-bold">
                  {open === index + column1.length ? "-" : "+"}
                </span>
              </button>
              <div
                id={`accordion-body-${index + column1.length}`}
                className={`overflow-hidden transition-all duration-300 ${
                  open === index + column1.length ? "max-h-[200px] p-4 border-t" : "max-h-0"
                }`}
                style={{
                  height: open === index + column1.length ? "auto" : "0",
                }}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ1;
