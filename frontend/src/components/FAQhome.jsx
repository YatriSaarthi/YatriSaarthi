import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is the festival and travel information verified?",
    answer: "Yes! We manually curate and verify all city data including festivals, food spots, and local guides.",
  },
  {
    question: "Can I connect with a local guide before traveling?",
    answer: "Absolutely. Once you find a guide, you can view their profile and contact them directly through our platform.",
  },
  {
    question: "How often is the website updated?",
    answer: "We update city information, events, and guide listings every week to stay up-to-date.",
  },
  {
    question: "Is this service free to use?",
    answer: "Yes, YatriSaarthi is free for travelers! For guides, there's a simple verification process.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4 cursor-pointer bg-white shadow-sm"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium text-gray-900">{faq.question}</h4>
              <span className="text-xl text-gray-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  className="text-gray-600 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
