"use client";
import React, { FC, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Link from "next/link";
const originalClass = "h-96 aspect-video overflow-hidden object-contain";


interface images {
  original: string;
  thumbnail: string;
  thumbnailClass: string;
  originalClass?: string;
}


const images = [
  {
    original: "/gallery/3.png",
    thumbnail: "/gallery/3.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  {
    original: "/gallery/4.png",
    thumbnail: "/gallery/4.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  {
    original: "/gallery/5.png",
    thumbnail: "/gallery/5.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  {
    original: "/gallery/6.png",
    thumbnail: "/gallery/6.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  {
    original: "/gallery/7.png",
    thumbnail: "/gallery/7.png",
    thumbnailClass: "h-16 aspect-video overflow-hidden object-cover",
    originalClass

  },
  
]
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Gallery:FC<{photos:images[]}> = ({photos}) => {


  const [compact, setcompact] = useState(true)

  return (
    <section id="gallery" className="container_section-white">
      <div className="container_content">
    <div  className="space-y-10 z-10">
      {/* Gallery Section */}
{/* sticky top-16 bg-white/95 z-15 py-2 */}
      <h2 className="text-4xl font-semibold mb-4 font-head ">Gallery</h2>
      {compact &&
      <section>
        <div>

        <div className="grid sm:grid-cols-3 gap-4 h-[400px]">
           <AnimationOnScroll  style={{ backgroundImage: `url(${photos[0].original})` }} initiallyVisible className={`bg-gray-300 sm:col-span-1 row-span-2 h-full bg-contain`} delay={0}  key={0} animateIn="animate__fadeInUp" >

  {/* <div ></div> */}
           </AnimationOnScroll>
            <AnimationOnScroll  style={{ backgroundImage: `url(${photos[1].original})` }} initiallyVisible className={`bg-gray-400 sm:col-span-2 h-full bg-contain`} delay={100}  key={1} animateIn="animate__fadeInUp" >

  {/* <div ></div> */}
            </AnimationOnScroll>
             <AnimationOnScroll  style={{ backgroundImage: `url(${photos[2].original})` }} initiallyVisible  className={`bg-gray-500 sm:col-span-2 h-full bg-contain`} delay={200}  key={2} animateIn="animate__fadeInUp" >

  {/* <div className="bg-gray-500 sm:col-span-2 h-full bg-[url('/images/develop.webp')]></div> */}
             </AnimationOnScroll>
</div>
  <button onClick={()=>setcompact(false)}  className="button_black_bg mt-2">
          View More
        </button>
        </div>
      </section>}

      {!compact &&
    <>


    {/* <section className="relative">

        <h2 className="text-3xl font-normal mb-4 font-head  py-4 z-10"> Photos </h2>
        <ImageGallery slideInterval={1500}  slideDuration={300} thumbnailClass="h-24 aspect-video" items={images} />
    </section> */}


      {/* <section className="relative">
        <h2 className="text-3xl font-semibold mb-4 font-head  py-4 z-10">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <AnimationOnScroll animateIn="animate__fadeInUp">
        
        <div className="sm:px-2  rounded-sm sm:mx-2 bg-[url('/images/strategy.webp')] h-74 bg-cover"></div>
        </AnimationOnScroll>
        <AnimationOnScroll  animateIn="animate__fadeInUp">
        
        <div className="sm:px-2 rounded-sm sm:mx-2 bg-[url('/images/manage.webp')] h-74 bg-cover"></div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUp">
        
        <div className="sm:px-2 rounded-sm sm:mx-2 bg-[url('/images/develop.webp')] h-74 bg-cover">          </div>
        </AnimationOnScroll>
        </div>
        </section> */}


      {/* <section className="">
        <h2  className="text-3xl font-normal mb-4 font-head">Videos</h2>
        <Carousel autoPlaySpeed={1000} showDots containerClass="cursor-pointer"  arrows={false} partialVisbile focusOnSelect  responsive={responsive} infinite autoPlay className="gap-2 flex" >
          <div className="sm:px-2 rounded-sm sm:mx-2 bg-[url('/images/strategy.webp')] h-74 bg-cover"></div>
          <div className="sm:px-2 rounded-sm sm:mx-2 bg-[url('/images/manage.webp')] h-74 bg-cover"></div>
          <div className="sm:px-2 rounded-sm sm:mx-2 bg-[url('/images/develop.webp')] h-74 bg-cover">          </div>

        </Carousel>
      

      </section> */}


      </>}
    </div>

    {!compact &&
    <>
      <section className="relative">

        <h2 className="text-3xl font-normal mb-4 font-head  py-4 z-10 mx-auto text-black max-w-7xl px-6 md:px-10"> Photos </h2>
        <ImageGallery useTranslate3D={false}  autoPlay  lazyload  slideInterval={1500}   thumbnailClass="h-24 aspect-video" items={photos} />
    </section>
      <section className="relative mt-6">

        <h2 className="text-3xl font-normal mb-4 font-head  py-4 z-10 mx-auto text-black max-w-7xl px-6 md:px-10"> Videos </h2>
        <ImageGallery useTranslate3D={false}  autoPlay  lazyload  slideInterval={1500}   thumbnailClass="h-24 aspect-video" items={photos} />
    </section>

          {/* View Less Button */}
      <div className="flex justify-center">
        <Link href={"#gallery"}>
      <button onClick={()=>{setcompact(true)}} className="button_black_bg">
          View Less
        </button>
        </Link>
      </div>
      </>
      }
      </div>
        </section>
    
  );
};

export default Gallery;
