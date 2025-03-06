"use client";
import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
// Import core styles
// Import theme styles
import "./BannerAdvanced.css";
import Link from "next/link";

type Props = {
  banners: {
    coverImage: string;
    heading: string;
    subheading?: string;
    description: string;
    buttonText: string;
    link: string;
    bannerImage?: string;
    textPosition?: string;
  }[];
};

const BannerAdvanced: React.FC<Props> = ({ banners }) => {
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
      });
      glide.mount();
      return () => {
        glide.destroy();
      };
    }
  }, []);
  return (
    <div className="relative overflow-hidden" ref={sliderRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {banners.map((banner, index: number) => (
            <li key={index} className="glide__slide">
              <div
                className="h-[700px] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url(${banner.coverImage})`,
                }}
              >
                <div className="h-full px-4">
                  <div className="mx-auto flex h-full max-w-[1450px] items-center justify-between px-3">
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
                      <img
                        src="/svgs/divider-icon.svg"
                        className="h-2 w-20"
                        alt=""
                      />
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
                        <img
                          alt="banner image"
                          className="rounded-xl rounded-bl-[100px] rounded-tr-[100px] border-8 border-[#FFA600]"
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
