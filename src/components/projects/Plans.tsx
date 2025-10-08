import React from "react";

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
        <p className="text-sm text-dark tracking-widest mb-2 side_line relative">PROJECT PLANS</p>
        <h2 className="text-4xl font-semibold text-gray-800">Plans</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {plans.map((plan, index) => (
          <div key={index} className="shadow-xl rounded overflow-hidden w-[300px] hover:scale-110 transition-transform duration-300">
            <div className="relative">
              <img
                src={plan.image}
                alt={`${plan.bhk} Plan`}
                className="w-full h-64 object-cover blur-sm"
              />
              <button className="button-primary absolute inset-0 m-auto bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded w-max h-max">
                View Plan
              </button>
            </div>
            <div className="bg-dark text-white text-center py-3 text-xl font-medium">
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
