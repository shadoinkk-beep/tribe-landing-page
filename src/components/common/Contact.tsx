"use client";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Sending your message...");

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          comment: formData.comment,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Thank you! We’ll connect with you soon 🤝", {
        id: toastId,
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comment: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container_section-white relative">
      <main className="container_content text-white relative">
        <div
          style={{ backgroundImage: "url('/contact-form.jpg')" }}
          className="absolute inset-4 sm:inset-10 inset-y-18 bg-cover bg-center brightness-[70%] rounded-md container_content"
        />

        <div className="bg-cover bg-center rounded-lg p-10 grid gap-4 justify-center relative">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Start your farmhouse journey with confidence.
          </h2>

          <p className="text-center text-gray-200 mt-2 mb-8 text-sm md:text-base max-w-2xl mx-auto">
            Every great investment begins with clarity. Speak to our compliance
            and development team to de-risk your farmhouse decision.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full"
          >
            {/* First Name (Required) */}
            <div>
              <label className="block text-sm mb-1">First Name*</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Last Name (Optional) */}
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email (Optional) */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Phone Number (Required) */}
            <div>
              <label className="block text-sm mb-1">Phone Number*</label>
              <div className="flex items-center bg-white/20 border border-gray-400 rounded-md overflow-hidden">
                <span className="px-3">🇮🇳 +91</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="flex-1 px-3 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
                />
              </div>
            </div>

            {/* Comment (Optional) */}
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Comment</label>
              <textarea
                name="comment"
                placeholder="Enter your comment"
                rows={4}
                value={formData.comment}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 px-8 py-3 border border-white rounded-md hover:bg-white/20 transition ${
                  loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {loading ? "Sending..." : "Submit your query"}{" "}
                {!loading && <BsArrowRight className="w-5 h-5" />}
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}
