import React from "react";
import Image from "next/image";

const Plans = () => {
  const plans = [
    {
      bhk: "2.5 BHK",
      image: "/images/plans_bg.webp", // replace with actual path
    },
    {
      bhk: "3.5 BHK",
      image: "/images/plans_bg.webp", // replace with actual path
    },
  ];

  return (

    <section className="container_section-white">

    <div className="container_content">
      <div className="text-center mb-12">
        <p className="eyebrow-copy text-dark mb-2 side_line relative">PROJECT PLANS</p>
        <h2 className="heading-section text-brown-deep">Plans</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {plans.map((plan, index) => (
          <div key={index} className="w-full max-w-[340px] overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.03]">
            <div className="relative h-64">
              <Image
                src={plan.image}
                alt={`${plan.bhk} Plan`}
                fill
                sizes="(max-width: 768px) 90vw, 300px"
                className="object-cover blur-sm"
              />
              <button className="button-primary absolute inset-0 m-auto bg-dark hover:bg-brown-deep text-light px-4 py-2 rounded w-max h-max">
                View Plan
              </button>
            </div>
            <div className="bg-dark text-light text-center py-3 text-xl font-medium">
              {plan.bhk}
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>

  );
};

export default Plans;
