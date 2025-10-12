// src/components/ContactForm.tsx

import { BsArrowRight } from "react-icons/bs";

export default function ContactForm() {
  return (
    <section id="contact" className="container_section-white relative">
    <main
      className="container_content text-white relative"
      
    >
      <div style={{ backgroundImage: "url('/contact-form.jpg')" }} className="absolute inset-4 sm:inset-10 inset-y-18 bg-cover bg-center brightness-[70%] rounded-md  container_content" />
      <div  className="bg-cover bg-center rounded-lg p-10 grid gap-4 justify-center relative">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Start your farmhouse journey with confidence.
        </h2>
        <p className="text-center text-gray-200 mt-2 mb-8 text-sm md:text-base max-w-2xl mx-auto">
          Every great investment begins with clarity. Speak to our compliance and
          development team to de-risk your farmhouse decision.
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
          {/* First Name */}
          <div>
            <label className="block text-sm mb-1">First Name*</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm mb-1">Last Name*</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email*</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone Number*</label>
            <div className="flex items-center bg-white/20 border border-gray-400 rounded-md overflow-hidden">
              <span className="px-3">🇮🇳 +91</span>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="flex-1 px-3 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
              />
            </div>
          </div>

          {/* Comment (full width) */}
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Comment</label>
            <textarea
              placeholder="Enter your comment"
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3 border border-white rounded-md hover:bg-white/20 transition"
            >
              Submit your query <BsArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </main>
        </section>

  );
}
