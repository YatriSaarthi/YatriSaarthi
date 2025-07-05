import React, { useState } from "react";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!faqs || faqs.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No FAQs available for this city.
      </div>
    );
  }

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
