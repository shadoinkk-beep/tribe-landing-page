import React from "react";

const PriceList = () => {
  const listings = [
    {
      bhk: "2.5 BHK",
      size: "1500 Sq. Yards*",
      price: "₹ 1.8 Cr* Onwards",
      img:"/images/overview.webp",
    },
    {
      bhk: "3.5 BHK",
      size: "3000 Sq. Yards*",
      price: "₹ 3 Cr* Onwards",
      img:"/projects/whisperingwoods/main.jpg",
    },
  ];

  return (
    <section className="container_section-white">

    <div className=" container_content">
      <div className="text-center mb-12">
        <p className="text-sm text-dark tracking-widest mb-2 side_line relative">PROJECT PRICE LIST</p>
        <h2 className="text-4xl text-gray-800 font-head font-semibold">Price List</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {listings.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#2f5d50] text-white rounded-md p-8 w-[280px] md:w-[360px] shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <h3 className="text-xl font-medium mb-2 z-10 relative">{item.bhk}</h3>
            <p className="mb-2 z-10 relative">{item.size}</p>
            <p className="mb-6 font-semibold z-10 relative">{item.price}</p>
            {/* <ContactModal
            text="Enquire Now"
          className="bg-btn-primary z-10 relative text-white cursor-pointer font-semibold px-6 py-2 w-fit  shadow-lg hover:bg-btn-hover-primary transition duration-300"
        /> */}
            <img src={item.img} alt="" className="absolute top-0 left-0 h-full w-full z-5 brightness-55 rounded-md" />
          
        
            {/* <button className="bg-[#4B3D1A] hover:bg-green-800 text-white px-6 py-2 rounded transition">
              Enquire Now
            </button> */}
            <div className="absolute bottom-4 right-4 text-white/20 text-4xl font-bold">
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
