"use client";
import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css"; // Import core styles
import "@glidejs/glide/dist/css/glide.theme.min.css"; // Import theme styles
import "./BannerAdvanced.css";
import Link from "next/link";
import Image from "next/image";

const BannerAdvanced: React.FC<{ banners: any[] }> = ({ banners }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const glide = new Glide(sliderRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 1,
        gap: 20,
        autoplay: 3000,
        hoverpause: true,
        loop: true,
      });
      glide.mount();
      return () => glide.destroy();
    }
  }, []);
  return (
    <div className="relative overflow-hidden" ref={sliderRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {banners.map((banner, index) => (
            <li key={index} className="glide__slide">
              <div
                className="h-[700px] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${banner.coverImage})`,
                }}
              >
                <div className="h-full px-4">
                  <div className="global-container flex h-full items-center justify-between">
                    {/*
                     * text container of heading subheading and button
                     */}
                    <div className="banner-text-container flex max-w-[700px] flex-col items-stretch gap-3">
                      {banner.heading && (
                        <h2 className="text-6xl font-semibold text-white">
                          {banner.heading}
                        </h2>
                      )}
                      {banner.subheading && (
                        <h4 className="text-3xl text-white">
                          {banner.subheading}
                        </h4>
                      )}
                      {banner.description && (
                        <p className="text-lg text-white">
                          {banner.description}
                        </p>
                      )}
                      {banner.buttonText && (
                        <div className="mt-3">
                          <Link
                            key={index}
                            href={banner.link}
                            className={`w-auto gap-1 rounded-full bg-[#FFA600] px-5 py-2 text-white`}
                          >
                            <span> {banner.buttonText}</span>
                          </Link>
                        </div>
                      )}
                    </div>
                    {banner.bannerImage && (
                      <div className="">
                        <Image
                          alt="banner image"
                          className="border-effect rounded-3xl"
                          src={banner.bannerImage}
                          width={500}
                          height={500}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Navigation */}
    </div>
  );
};

export default BannerAdvanced;
