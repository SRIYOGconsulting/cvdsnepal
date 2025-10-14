
import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is CVDS Nepal?',
      answer: 'CVDS Nepal is a non-profit organization dedicated to supporting people with disabilities in Nepal, providing food, clothes, shelter, and care through projects like the Rehabilitation Center for Children with Cerebral Palsy.',
    },
    {
      question: 'How can I support CVDS Nepal?',
      answer: 'You can support us by making donations, volunteering your time, or partnering with us on projects. Visit our Support Us page for more details.',
    },
    {
      question: 'Where is CVDS Nepal located?',
      answer: 'We are located at [Municipality-6, Address1, Address2, city]—please check our Contact Us page for the exact address.',
    },
    {
      question: 'How can I get in touch?',
      answer: 'You can reach us via email at [email] or phone at [phone number]. Details are available on our Keep In Touch section.',
    },
  ];

  return (
    <div className="bg-white p-6 max-w-4xl mx-auto min-h-screen max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 mb-4 rounded-lg overflow-hidden">
          <button
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-blue-800 font-medium">{faq.question}</span>
            <svg
              className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;