import React from 'react';

// Dummy image placeholders – replace these with your actual imports
import Step1Image from '../assets/image1.png';
import Step2Image from '../assets/image2.png';
import Step3Image from '../assets/image3.png';
import Step4Image from '../assets/image4.png';

const steps = [
  {
    number: 1,
    title: 'Simply Click to Access Your Equity',
    description:
      "With EQTY LYFE’s technology, you can start unlocking your equity.",
    image: 'https://www.eqtylyfe.com/icons/access-equity.svg',
  },
  {
    number: 2,
    title: 'Get Your Offer',
    description:
      'Find your home on our platform and access what EQTY LYFE can offer based on your home value.',
    image: 'https://www.eqtylyfe.com/icons/get-offer.svg',
  },
  {
    number: 3,
    title: 'Application',
    description:
      'Once you decide to continue with our offer, all you have to do is go through our simple application process to receive your offer.',
    image: 'https://www.eqtylyfe.com/icons/application.svg',
  },
  {
    number: 4,
    title: 'Keep Adding',
    description:
      'If you have another property, go ahead and add it with us.',
    image: 'https://www.eqtylyfe.com/icons/keep-adding.svg',
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-24 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#265CE1] text-center mb-10">
        How EQTY LYFE Works
      </h2>

      <div className="space-y-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col lg:flex-row justify-between items-center gap-4 bg-gray-50 shadow rounded-lg p-6"
          >
            {/* Text Content */}
            <div className="flex-1 flex items-start gap-4 w-full">
              {/* Step Number */}
              <div className="bg-[#265CE1] text-white w-8 h-8 flex items-center justify-center rounded font-semibold text-sm shrink-0 mt-1">
                {step.number}
              </div>
              {/* Text */}
              <div>
                <h3 className="text-[#265CE1] font-bold text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 mt-4 lg:mt-0">
              <img
                src={step.image}
                alt={`Step ${step.number}`}
                className="w-24 sm:w-28 md:w-32"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
