import Link from "next/link";
import React, { FC } from "react";

const HighlightSection:FC<{name:string,address:string,bg:string}> = ({name,address,bg}) => {
  const features = [
    "Farm Size: 1500 Sq. Yards*",
    "Paint Ball Arena",
    "Climbing & Zip Line Adventure",
    "Party/Picnic Area",
    "Farmhouse with Private Pool & Club",
    "Leasing, Renting & Hospitality Partner Stay Vista",
  ];

  return (
    <div className="relative sm:h-screen" >
      <img src={bg} className="w-screen z-5  object-cover sm:h-screen sm:absolute sm:top-0 sm:left-0 " alt="" />

      <div className="max-w-7xl mx-auto flex justify-between items-end  md:px-10">
        
      <div className="relative sm:top-32 bg-btn-primary  sm:bg-transparent sm:border-white/30 sm:border-1 sm:backdrop-blur-sm text-white z-10 sm:max-w-md w-full p-6 md:p-10 sm:rounded-lg shadow-lg space-y-4">
        <div className="grid text-white">

        <img src="/images/stay_vista.png" className="h-24 object-contain sm:hidden mb-4" alt="" />
        
        <h4 className="bg-indigo-100  text-sm font-semibold px-3 py-1 rounded-full text-black w-fit">{address}</h4>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-lg">2.5 & 3.5 BHK Store with Private Pool and Outhouse</p>
        <p className="text-sm uppercase mt-4">Starting at</p>
        <div className="bg-btn-primary border-1 sm:border-0 border-white  px-4 py-1 font-semibold text-sm text-center inline-block">
          ₹ 1.85 Cr*
        </div>
        </div>

        <ul className="space-y-2 mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              {/* <CheckCircle2 className="text-white shrink-0" /> */}
              <span>☑️</span>
              <span className="text-white font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        {/* <ContactModal text="Enquire Now" className="mt-6 w-full border-white border-1 hover:text-indigo-400 cursor-pointer text-white py-3 font-semibold"/> */}
          {/* ENQUIRE NOW */}
        
        <Link href={"#contact"} className="mt-6 w-full border-white border-1 hover:bg-btn-hover-primary cursor-pointer text-white py-3 font-semibold block text-center">
          ENQUIRE NOW
        </Link >
      </div>
      <img src="/images/stay_vista.png" className="h-24 mb-[7rem]  object-contain z-15 sm:block hidden top-32 relative" alt="" />
    </div>
      </div>

  );
};

export default HighlightSection;
