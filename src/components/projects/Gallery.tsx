"use client";

import Image from "next/image";
import { FC, useState } from "react";

interface GalleryImage {
  original: string;
  thumbnail: string;
  thumbnailClass: string;
  originalClass?: string;
}

const Gallery: FC<{ photos: GalleryImage[] }> = ({ photos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  if (!photos.length) return null;

  const activePhoto = photos[activeIndex] ?? photos[0];
  const visiblePhotos = showAll ? photos : photos.slice(0, 6);

  return (
    <section id="gallery" className="container_section-white">
      <div className="container_content grid gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="side_line relative mb-3 text-sm tracking-widest text-dark">
              GALLERY
            </p>
            <h2 className="font-head text-4xl font-semibold text-brown-deep">
              Project Gallery
            </h2>
          </div>
          {photos.length > 6 && (
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="button_black_bg w-fit !rounded-none"
            >
              {showAll ? "View Less" : "View All"}
            </button>
          )}
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-cream-deep sm:min-h-[520px]">
            <Image
              src={activePhoto.original}
              alt="Project gallery image"
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="object-cover"
              priority={activeIndex === 0}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-deep/65 to-transparent p-5 text-light">
              <p className="text-sm font-medium">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {visiblePhotos.map((photo, index) => (
              <button
                key={`${photo.thumbnail}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-[4/3] overflow-hidden rounded-md border transition ${
                  activeIndex === index
                    ? "border-brown-deep ring-2 ring-brown-soft"
                    : "border-cream-deep hover:border-brown-soft"
                }`}
                aria-label={`Show gallery image ${index + 1}`}
              >
                <Image
                  src={photo.thumbnail}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
