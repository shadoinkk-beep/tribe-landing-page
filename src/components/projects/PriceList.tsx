import React from "react";
import Image from "next/image";

const PriceList = () => {
  const listings = [
    {
      bhk: "2.5 BHK",
      size: "1500 Sq. Yards*",
      price: "₹ 2.35 Cr* Onwards",
      img:"/images/overview.webp",
    },
    {
      bhk: "3.5 BHK",
      size: "3000 Sq. Yards*",
      price: "₹ 3.55 Cr* Onwards",
      img:"/projects/whisperingwoods/main.webp",
    },
  ];

  return (
    <section className="container_section-white">

    <div className=" container_content">
      <div className="text-center mb-12">
        <p className="eyebrow-copy text-dark mb-2 side_line relative">PROJECT PRICE LIST</p>
        <h2 className="heading-section text-brown-deep">Price List</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {listings.map((item, index) => (
          <div
            key={index}
            className="relative w-full max-w-[360px] overflow-hidden rounded-lg bg-dark p-8 text-light shadow-lg transition-transform duration-300 hover:scale-[1.03]"
          >
            <h3 className="text-xl font-medium mb-2 z-10 relative">{item.bhk}</h3>
            <p className="mb-2 z-10 relative">{item.size}</p>
            <p className="mb-6 font-semibold z-10 relative">{item.price}</p>
            {/* <ContactModal
            text="Enquire Now"
          className="bg-btn-primary z-10 relative text-light cursor-pointer font-semibold px-6 py-2 w-fit  shadow-lg hover:bg-btn-hover-primary transition duration-300"
        /> */}
            <Image
              src={item.img}
              alt=""
              fill
              sizes="(max-width: 768px) 90vw, 360px"
              className="absolute inset-0 z-0 object-cover brightness-55"
            />
          
        
            {/* <button className="bg-dark hover:bg-brown-deep text-light px-6 py-2 rounded transition">
              Enquire Now
            </button> */}
            <div className="absolute bottom-4 right-4 text-light/20 text-4xl font-bold">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>

  );
};

export default PriceList;
