// src/components/Footer.tsx
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container_section-white border-t">
<div className="container_content flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left: Logo & About */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-3">
            {/* Replace this with your actual logo SVG */}
            <div className="bg-green-800 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
              <span className="text-lg">T</span>
            </div>
            <h2 className="text-2xl font-semibold">Tribe</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            Tribe is a pioneering luxury farmhouse development company in North India, 
            dedicated to creating timeless countryside retreats that embody elegance, 
            comfort, and exclusivity.
          </p>
          {/* Social icons */}
          <div className="flex gap-4 mt-4 text-gray-700">
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right: Columns */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#">Our LinkedIn</a></li>
              <li><a href="#">Our Projects</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#">Due Diligence</a></li>
              <li><a href="#">Sales Strategy</a></li>
              <li><a href="#">Land Acquisition</a></li>
              <li><a href="#">Project Conceptualization</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> info@alchemylandbase.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 70300 62277
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
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
