"use client";
import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 24,
    damping: 30,
    mass: 1,
    restDelta: 0.0005,
  });
  const bgScale = useTransform(smoothProgress, [0, 1], [1.22, 1]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.35, 1], [0.62, 0.84, 1]);

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
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured.");
      }

      const fullName = `${formData.firstName} ${formData.lastName}`.trim();

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          comment: formData.comment,
        },
        publicKey
      );

      toast.success("Thank you. We’ll connect with you soon.", {
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
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-dark py-8 text-light">
      <motion.div
        aria-hidden="true"
        style={{
          backgroundImage: "url('/contact-form.jpg')",
          scale: bgScale,
          opacity: bgOpacity,
        }}
        className="absolute inset-0 bg-cover bg-center brightness-[62%]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(75,61,26,0.08),rgba(43,36,18,0.76)_74%)]" />

      <main className="container_content relative z-10 text-light">
        <motion.div
          aria-hidden="true"
          className="absolute inset-4 rounded-md border border-cream-deep/20 bg-brown-deep/24 backdrop-blur-[1px] sm:inset-10"
        />

        <div className="bg-cover bg-center rounded-lg p-10 grid gap-4 justify-center relative">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Start your second-home journey with confidence.
          </h2>

          <p className="text-center text-cream-deep mt-2 mb-8 text-sm md:text-base max-w-2xl mx-auto">
            Every great investment begins with clarity. Speak to our compliance
            and development team to de-risk your second-home decision.
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
                className="w-full px-4 py-2 rounded-md bg-light/20 border border-cream-deep/70 text-light placeholder-cream-deep/80 focus:outline-none focus:ring-2 focus:ring-brown-soft"
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
                className="w-full px-4 py-2 rounded-md bg-light/20 border border-cream-deep/70 text-light placeholder-cream-deep/80 focus:outline-none focus:ring-2 focus:ring-brown-soft"
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
                className="w-full px-4 py-2 rounded-md bg-light/20 border border-cream-deep/70 text-light placeholder-cream-deep/80 focus:outline-none focus:ring-2 focus:ring-brown-soft"
              />
            </div>

            {/* Phone Number (Required) */}
            <div>
              <label className="block text-sm mb-1">Phone Number*</label>
              <div className="flex items-center bg-light/20 border border-cream-deep/70 rounded-md overflow-hidden">
                <span className="px-3">🇮🇳 +91</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="flex-1 px-3 py-2 bg-transparent text-light placeholder-cream-deep/80 focus:outline-none"
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
                className="w-full px-4 py-2 rounded-md bg-light/20 border border-cream-deep/70 text-light placeholder-cream-deep/80 focus:outline-none focus:ring-2 focus:ring-brown-soft"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 px-8 py-3 border border-light rounded-md hover:bg-light/20 transition ${
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
