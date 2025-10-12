// src/components/Features.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GrDocumentVerified } from "react-icons/gr";
import { MdOnlinePrediction } from "react-icons/md";
import { PiCreditCard } from "react-icons/pi";

type Feature = {
  title: string;
  description: string;
  link: string;
  img?: string;
};

const features: Feature[] = [
  {
    title: "Xcis",
    description:
      "Xcis is a farmhouse-only consulting partner that safeguards investors through compliance checks and due diligence. We de-risk land deals by verifying titles, approvals, and legal clearances before you invest.",
    link: "/about",
    img: "/house1.png",
  },
  {
    title: "Compliance Without Compromise",
    description:
      "Xcis safeguards your investment by conducting layered due diligence—verifying everything, cross-checking approvals, and confirming zoning clearances. By removing hidden risks before you commit, we ensure the land you own is truly compliant, secure, and future-ready.",
    link: "/about",
  },
  {
    title: "Luxury You Can Trust",
    description:
      "Alchemy delivers luxury farmhouse communities where every title is verified, every approval is secured, and every legal requirement is met before development begins. Beyond compliance, we design lifestyle-ready spaces with sustainability, beauty, health goals, and timeless architecture—ensuring your upgrade is not just beautiful, but also secure and future-proof.",
    link: "/about",
  },
  {
    title: "Alchemy Landbase",
    description:
      "Alchemy Landbase develops luxury farmhouse communities with clear titles and full compliance. We deliver lifestyle-ready spaces designed for long-term security and legacy.",
    link: "/about",
    img: "/house2.png",
  },
];

export default function Features() {
  return (
    <section className="container_section-white">

    <section className="container_content grid  gap-8">
      {/* Section Header */}
      <div className=" grid justify-center  gap-4 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold ">
          We don’t just sell land parcels. <br />
          We secure law, lifestyle, and legacy for generations.
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          Every farmhouse we deliver is backed by verified titles, clear
          approvals, and zoning compliance. With TRIBE, you step into ownership
          without the hidden risks that collapse most deals in NCR.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-9 gap-3">
        {/* Row 1 */}
        <motion.div
          className="md:col-span-5 bg-green-900 text-white rounded-2xl overflow-hidden shadow-md relative h-96"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Image Background */}
          <div className="relative h-full w-full">
            <Image
              src={"/Features_bg_1.png"}
              alt={features[0].title}
              fill
              className="object-cover"
            />
            <div className="absolute grid content-end inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="p-6">
            <div className="border border-[#F8DF7C] rounded-full h-18 w-18 flex justify-center items-center" >
              <img src="/XcisLogo.png" alt="Xcis Logo" />
          </div>
            <h3 className="text-lg font-semibold my-2">{features[0].title}</h3>
            <p className="text-sm mb-4 text-gray-200">{features[0].description}</p>
            <a href={features[0].link} className="text-sm text-teal-300 hover:underline underline-offset-4">
              Know More →
            </a>
          </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-green-900 text-white rounded-2xl p-6 shadow-md grid md:col-span-4 h-96"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        > 
        <div className="grid self-end">
          <div className="border border-[#F8DF7C] rounded-full h-18 w-18 flex justify-center items-center" >
              <GrDocumentVerified className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold my-2">{features[1].title}</h3>
          <p className="text-sm mb-4 text-gray-200">{features[1].description}</p>
          <a href={features[1].link} className="text-sm text-teal-300 hover:underline underline-offset-4">
            Know More →
          </a>
        </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="bg-green-900 text-white rounded-2xl p-6 shadow-md grid md:col-span-4 h-96"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        > 
        <div className="grid self-end">

          <div className="border border-[#F8DF7C] rounded-full h-18 w-18 flex justify-center items-center" >
              <MdOnlinePrediction className="h-8 w-8 text-white" />
          </div>

          <h3 className="text-lg font-semibold my-2">{features[2].title}</h3>
          <p className="text-sm mb-4 text-gray-200">{features[2].description}</p>
          <a href={features[2].link} className="text-sm text-teal-300 hover:underline underline-offset-4">
            Know More →
          </a>
        </div>
        </motion.div>

        <motion.div
          className="md:col-span-5 bg-green-900 text-white rounded-2xl overflow-hidden shadow-md relative h-96"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="relative h-full w-full">
            <Image
              src={"/Features_bg_2.png"}
              alt={features[3].title}
              fill
              className="object-cover"
            />
            <div className="absolute grid content-end inset-0 bg-gradient-to-t from-black/70 to-transparent" >
          <div className="p-6">
                      <div className="border border-[#F8DF7C] rounded-full h-18 w-18 flex justify-center items-center" >
              <img src="/AlchemyLogo.png" alt="Alchemy Logo" />
          </div>
            <h3 className="text-lg font-semibold my-2">{features[3].title}</h3>
            <p className="text-sm mb-4 text-gray-200">{features[3].description}</p>
            <a href={features[3].link} className="text-sm text-teal-300 hover:underline underline-offset-4">
              Know More →
            </a>
          </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </section>

  );
}
