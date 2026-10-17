
"use client"
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from "next/image";

const LocationAdvantage: React.FC<{places:string[],img:string}> = ({places,img}) => {
  



  return (
    <section className='container_section-green'>
{/* <h2 className="text-lg font-semibold mb-4">
          <span className="text-light font-head ">●</span> Location Advantage
        </h2> */}
    {/* <Scene pin> */}

    <div className="container_content">

      {/* Image section */}
      <div className='flex flex-col gap-8 md:flex-row md:items-stretch'>

      {/* <div className="md:w-1/2 w-full "> */}
      <AnimationOnScroll className='w-full md:w-1/2'  animateIn="animate__slideInLeft" >

        <div className="relative min-h-[320px] overflow-hidden rounded-lg md:h-full">
        <Image
          src={img} // replace with your actual image path
          alt="Location Scenery"
          fill
          sizes="(max-width: 768px) 92vw, 44vw"
          className="object-cover"
          />
          </div>
          </AnimationOnScroll>
      {/* </div> */}

      {/* Text section */}
      <div className="flex w-full flex-col justify-center p-0 md:w-1/2 md:p-6">
        <h2 className="mb-4 text-2xl font-semibold">
          <span className="text-light font-head ">●</span> Location Advantage
        </h2>
        <div className="space-y-4">
          {places.map((place, index) => (
            <AnimationOnScroll delay={index*100}  key={index} animateIn="animate__slideInRight" >

            <div key={index} className="border-b border-cream-deep/50 pb-1">
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
