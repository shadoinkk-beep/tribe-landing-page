import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const defaultFeatures = [
  "Second-home plots and residences",
  "Paint Ball Arena",
  "Climbing & Zip Line Adventure",
  "Party/Picnic Area",
  "Second Home with Private Pool & Club",
  "Leasing, Renting & Hospitality Partner Stay Vista",
];

const HighlightSection: FC<{
  name: string;
  address: string;
  bg: string;
  features?: string[];
  configuration?: string;
  startingAt?: string;
  partnerLogo?: string;
}> = ({
  name,
  address,
  bg,
  features = defaultFeatures,
  configuration = "2.5 & 3.5 BHK Store with Private Pool and Outhouse",
  startingAt = "₹ 2.35 Cr*",
  partnerLogo = "/images/stay_vista.png",
}) => {
  return (
    <div className="relative sm:h-screen">
      <Image
        src={bg}
        width={1600}
        height={900}
        className="w-screen z-5 object-cover sm:h-screen sm:absolute sm:top-0 sm:left-0"
        alt=""
        priority
      />

      <div className="max-w-7xl mx-auto flex justify-between items-end md:px-10">
        <div className="relative sm:top-32 bg-dark sm:bg-brown-deep/70 sm:border-light/30 sm:border-1 sm:backdrop-blur-sm text-light z-10 sm:max-w-md w-full p-6 md:p-10 sm:rounded-lg shadow-lg space-y-4">
          <div className="grid text-light">
            {partnerLogo && (
              <Image
                src={partnerLogo}
                width={220}
                height={96}
                className="h-24 w-auto object-contain sm:hidden mb-4"
                alt=""
              />
            )}

            <h4 className="bg-cream-deep text-sm font-semibold px-3 py-1 rounded-full text-brown-deep w-fit">
              {address}
            </h4>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-lg">{configuration}</p>
            <p className="text-sm uppercase mt-4">
              {startingAt.includes("₹") ? "Starting at" : "Offering"}
            </p>
            <div className="bg-brown-soft border-1 sm:border-0 border-brown-deep sm:border-light px-4 py-1 font-semibold text-sm text-center inline-block text-brown-deep">
              {startingAt}
            </div>
          </div>

          <ul className="space-y-2 mt-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span>✓</span>
                <span className="text-light font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/#contact"
            className="mt-6 w-full border-light border-1 hover:bg-btn-hover-primary cursor-pointer text-light py-3 font-semibold block text-center"
          >
            ENQUIRE NOW
          </Link>
        </div>
        {partnerLogo && (
          <Image
            src={partnerLogo}
            width={220}
            height={96}
            className="h-24 w-auto mb-[7rem] object-contain z-15 sm:block hidden top-32 relative"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default HighlightSection;
