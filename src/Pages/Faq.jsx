import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is CVDS Nepal?',
      answer: 'CVDS-Nepal is a non-profit organization established in 2005 that supports conflict victims and children with disabilities in Nepal.',
    },
    {
      question: 'Where is CVDS-Nepal located?',
      answer: 'It is located at Shankharapur Municipality-6, Shalambutar, Sankhu, Kathmandu, Nepal.',
    },
    {
      question: 'What is the mission of CVDS-Nepal?',
      answer: 'To enhance opportunities and uplift the livelihoods of children with disabilities and conflict victims through care, rehabilitation, and empowerment.',
    },
    {
      question: 'Who founded CVDS-Nepal?',
      answer: 'The organization was founded by Yub Raj Thapa, who is also the current president.',
    },
    {
      question: 'What services does CVDS provide?',
      answer: 'CVDS provides physiotherapy, special education, shelter, medical care, nutrition, emotional support, and vocational training.',
    },
    {
      question: 'Who are the primary beneficiaries of CVDS?',
      answer: 'Children with disabilities, orphans, and marginalized individuals affected by poverty and social exclusion.',
    },
    {
      question: 'What is the Rehabilitation Center for Children with CP?',
      answer: 'It is a residential facility run by CVDS that supports children with Cerebral Palsy through comprehensive care and therapy.',
    },
    {
      question: "What are CVDS's long-term goals?",
      answer: 'To support 1,000 persons with disabilities and marginalized individuals within 10 years through education, training, and rehabilitation.',
    },
    {
      question: 'How does CVDS raise funds?',
      answer: 'Through donations from individuals and organizations, both locally and internationally.',
    },
    {
      question: 'Can I donate to CVDS-Nepal?',
      answer: 'Yes, donations are welcome via bank transfer. All donations are used transparently for beneficiary care.',
    },
    {
      question: "What is CVDS's bank detail for donation?",
      answer: `A/C Name: Conflict Victim and Disable Society Nepal<br />
Bank: Bank of Kathmandu<br />
A/C No: 050000023543<br />
SWIFT Code: BOKLNPKA`,
    },
    {
      question: 'Are donations to CVDS tax-deductible?',
      answer: 'Yes, CVDS is registered with the Social Welfare Council of Nepal, and receipts are available upon request.',
    },
    {
      question: 'Does CVDS provide volunteer opportunities?',
      answer: 'Yes, volunteers can contribute to various programs, including education, therapy, and community outreach.',
    },
    {
      question: 'What inspired the founder to start CVDS?',
      answer: 'Yub Raj Thapa, who became physically disabled as a teen, overcame adversity and founded CVDS to support others like him.',
    },
    {
      question: 'How can I contact CVDS-Nepal?',
      answer: `Email: <a href="mailto:cvdsnepal@yahoo.com" class="text-blue-600 underline">cvdsnepal@yahoo.com</a><br />Phone:
      <a href="tel:+9779851160868" class="text-blue-600 underline"> +977-9851160868</a> / 
      <a href="tel:+9779841360868" class="text-blue-600 underline">+977-9841360868</a><br />
      Facebook: @cvdsnepal / @yubrajthapabairagi`,
    },
  ];

  return (
    <div className="bg-white min-h-screen py-14 px-6">
      <h1 className="text-3xl font-bold text-blue-800 text-center mb-4">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-blue-800 font-bold text-[15px]">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div
                className="px-6 pb-5 text-gray-700 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
