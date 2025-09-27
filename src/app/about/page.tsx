export const metadata = {
  title: "About Us – DreamHomes Realty",
  description:
    "Learn about DreamHomes Realty, our mission, and 10+ years of trusted real estate service.",
  openGraph: {
    title: "About DreamHomes Realty",
    description:
      "Trusted real estate experts helping families find their dream homes for over a decade.",
    url: "https://dreamhomes.com/about",
    images: [
      {
        url: "https://dreamhomes.com/og/about.jpg",
        width: 1200,
        height: 630,
        alt: "DreamHomes Realty Team",
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
        At DreamHomes Realty, we believe in quality, trust, and transparency.
      </p>
    </section>
  );
}
