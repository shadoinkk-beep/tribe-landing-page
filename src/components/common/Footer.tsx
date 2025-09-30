// src/components/Footer.tsx

import { BiMapPin } from "react-icons/bi";
import { CgMail, CgPhone } from "react-icons/cg";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FiInstagram, FiMapPin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="container_section-white">
<div className="container_content flex flex-col md:flex-row justify-between border-y">
        
        {/* Left: Logo & About */}
        <div className="md:w-3/7 grid gap-6">
          <div className="flex items-center gap-2 mb-3">
            <img src="/tribe_logo_text.png" className="h-16" alt="tribe logo" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            Tribe is a pioneering luxury farmhouse development company in North India, 
            dedicated to creating timeless countryside retreats that embody elegance, 
            comfort, and exclusivity.
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-4 text-gray-700">
            <a href="#" aria-label="Twitter">
              {/* <X/> */}
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <FiInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right: Columns */}
        <div className="md:w-3/7 grid grid-cols-1 sm:grid-cols-3 gap-4 ">
          {/* Company */}
          <div className="">
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className=" grid gap-2 text-sm text-gray-700">
              <li><a href="#">Our LinkedIn</a></li>
              <li><a href="#">Our Projects</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Our Services</h3>
            <ul className="grid gap-2 text-sm text-gray-700">
              <li><a href="#">Due Diligence</a></li>
              <li><a href="#">Sales Strategy</a></li>
              <li><a href="#">Land Acquisition</a></li>
              <li><a href="#">Project Conceptualization</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <ul className="grid gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CgMail className="w-4 h-4" /> info@tribe.com
              </li>
              <li className="flex items-center gap-2">
                <CgPhone className="w-4 h-4" /> +91 70300 62277
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="w-4 h-4 sm:w-8 sm:h-8 -mt-0.5" />
                <span>
                  403, Baani Address One, Sector 56, Golf Course Road <br />
                  Gurugram, Haryana-122011
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
