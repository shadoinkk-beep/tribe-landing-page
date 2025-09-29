export const metadata = {
  title: "About Us – Tribe Group",
  description:
    "Tribe brings together 16+ years of real estate and finance expertise with a proven track record in farmhouse land, development and investor trust",
  openGraph: {
    title: "About Tribe Group",
    description:
      "Trusted real estate experts helping families find their dream homes for over a decade.",
    url: "https://tribegroup.in/about",
    images: [
      {
        url: "https://tribegroup.in/HeroMainBg.png",
        width: 1200,
        height: 630,
        alt: "Tribe Group Team",
      },
    ],
    type: "article",
  },
};

export default function About() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="mt-4">
        We’ve been helping families find their dream properties for over 10 years.
        At Tribe Group, we believe in quality, trust, and transparency.
      </p>
    </section>
  );
}
