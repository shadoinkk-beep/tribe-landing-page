import Link from "next/link";
import { FC } from "react"

export const Hero:FC = () =>{
    return (
        <section style={{ backgroundImage: "url('./HeroMainBg.png')" }} className="container_section-white min-h-screen" >
            <main  className="container_content grid justify-center items-center content-center" >
                
            <div className=" text-center">
        {/* Main headline text */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium leading-snug mb-10">
          India's first farmhouse ecosystem uniting compliance, 
          <br />
            development, and lifestyle under one roof.
        </h1>

        {/* Buttons container */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Get a Quote Button (Dark Green) */}
          <Link href={"#contact"} className="button_black_bg">
            Get a Quote
          </Link>

          {/* Contact Us Button (Light Bordered) */}
          <Link href={"#contact"} className="button_white_bg">
            Contact Us
          </Link >
        </div>
      </div>
            </main>

            {/* <img src="/HeroMainBg.png" alt="Building Image" className="w-full" /> */}
        </section>
    )
}


export default Hero;