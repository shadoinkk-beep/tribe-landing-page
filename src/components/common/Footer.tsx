// src/components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import { CgMail, CgPhone } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiInstagram, FiMapPin } from "react-icons/fi";

const linkedinUrl = "https://www.linkedin.com/company/tribeestates/";

export default function Footer() {
  return (
    <footer className="bg-brown-deep text-light">
      <div className="container_content">
        <div className="grid gap-10 border-y border-cream-deep/20 py-12 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16">
          <div className="grid content-between gap-8">
            <div className="grid gap-5">
              <Image
                src="/tribe-logo-white.png"
                width={236}
                height={80}
                className="h-16 w-auto"
                alt="Tribe logo"
              />
              <p className="max-w-md text-sm leading-relaxed text-cream-deep">
                Tribe develops legally secure second-home communities across
                North India, bringing together verified land, thoughtful design,
                and resort-style living for long-term peace of mind.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Tribe Group LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream-deep/30 text-cream transition hover:bg-cream hover:text-brown-deep"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/tribe_group_/"
                target="_blank"
                rel="noreferrer"
                aria-label="Tribe Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream-deep/30 text-cream transition hover:bg-cream hover:text-brown-deep"
              >
                <FiInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-cream">
                Company
              </h3>
              <ul className="grid gap-3 text-sm text-cream-deep">
                <li>
                  <Link className="transition hover:text-light" href="/#our_projects">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-light" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    className="transition hover:text-light"
                    target="_blank"
                    rel="noreferrer"
                    href={linkedinUrl}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-cream">
                Expertise
              </h3>
              <ul className="grid gap-3 text-sm text-cream-deep">
                <li>Land Aggregation</li>
                <li>Due Diligence</li>
                <li>Second-Home Development</li>
                <li>Land Consulting</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-cream">
                Contact
              </h3>
              <ul className="grid gap-3 text-sm text-cream-deep">
                <li className="flex items-center gap-2">
                  <CgMail className="h-4 w-4 shrink-0 text-cream" />
                  Info@tribegroup.in
                </li>
                <li className="flex items-center gap-2">
                  <CgPhone className="h-4 w-4 shrink-0 text-cream" />
                  +91 91209 62233
                </li>
                <li className="flex items-start gap-2">
                  <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-cream" />
                  <span>
                    1209 - 1214B, 12th Floor, Tower 2, Magnum Global Business
                    Park, Sector 52, Gurgaon 122011
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="py-6 text-center text-xs text-cream-deep">
          © Copyright {getCurrentYear()}, All Rights Reserved by Tribe
        </p>
      </div>
    </footer>
  );
}

function getCurrentYear(): number {
  return new Date().getFullYear();
}
