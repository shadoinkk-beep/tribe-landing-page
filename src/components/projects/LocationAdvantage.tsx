
"use client"
import React, { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const LocationAdvantage: React.FC<{places:string[],img:string}> = ({places,img}) => {
  



  return (
    <section className='container_section-green'>
{/* <h2 className="text-lg font-semibold mb-4">
          <span className="text-black font-head ">●</span> Location Advantage
        </h2> */}
    {/* <Scene pin> */}

    <div className="container_content">

      {/* Image section */}
      <div className='flex'>

      {/* <div className="md:w-1/2 w-full "> */}
      <AnimationOnScroll className='md:w-1/2 w-full '  animateIn="animate__slideInLeft" >

        <img
          src={img} // replace with your actual image path
          alt="Location Scenery"
          className="w-full h-full object-cover"
          />
          </AnimationOnScroll>
      {/* </div> */}

      {/* Text section */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
        <h2 className="text-lg font-semibold mb-4">
          <span className="text-black font-head ">●</span> Location Advantage
        </h2>
        <div className="space-y-4">
          {places.map((place, index) => (
            <AnimationOnScroll delay={index*100}  key={index} animateIn="animate__slideInRight" >

            <div key={index} className="border-b border-gray-300 pb-1">
              {place}
            </div>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
      </div>







    </div>

    {/* </Scene> */}
</section>
  );
};

export default LocationAdvantage;
