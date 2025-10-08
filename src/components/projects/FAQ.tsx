"use client";
// components/FAQ.tsx
import React, { useState } from 'react';
import { faqData } from './faqData';
// import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section  className='container_section-white' >

    <div className="container_content">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-gray-300">
        {faqData.map((item, index) => (
          <div key={index} className={`${activeIndex === index ? "shadow-2xl rounded-md" : ""} px-2 overflow-hidden`}>
            <button
              className={`w-full  cursor-pointer flex py-4 justify-between items-center text-left font-medium text-lg overflow-hidden`}
              onClick={() => toggleIndex(index)}
            >
              <span>{item.question}</span>
              {activeIndex === index ? (
                // <ChevronUp className="w-5 h-5" />
                <span className='text-lg'>-</span>
              ) : (
                // <ChevronDown className="w-5 h-5" />
                <span className='text-lg'>
                  +
                </span>
              )}
            </button>
            {/* {activeIndex === index && ( */}
              <div className={`${activeIndex === index ? "py-4 h-fit" : "" } text-gray-700 h-0 transition-all duration-300`}>{item.answer}</div>
            {/* )} */}
          </div>
        ))}
      </div>
    </div>
    </section>

  );
};

export default FAQ;
