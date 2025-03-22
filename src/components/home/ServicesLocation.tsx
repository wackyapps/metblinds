"use client";
import { homePage } from "@/configs/pages-data/home";
import React, { useState, useRef } from "react";
import { FaLocationDot } from "react-icons/fa6";

// map areas
const mapAreas = [
  {
    title: "Canmore",
    coords:
      "72,248,77,262,84,268,89,264,95,255,97,246,96,238,89,234,80,233,73,239",
    shape: "poly",
  },
  {
    title: "Cochrane",
    coords: "91,271,90,277,97,283,101,290,107,279,108,268,101,263,93,264",
    shape: "poly",
  },
  {
    title: "Calgary",
    coords:
      "110,311,112,322,117,330,125,341,129,347,136,336,141,327,145,319,148,311,145,302,137,295,126,294,118,298,111,302",
    shape: "poly",
  },
  {
    title: "Okotoks",
    coords:
      "117,358,114,367,118,378,128,393,135,383,140,372,140,364,133,357,126,355",
    shape: "poly",
  },
  {
    title: "Medicine Hat",
    coords:
      "182,362,187,378,193,389,199,394,202,399,213,385,219,375,222,366,223,353,217,345,206,341,194,341,186,348",
    shape: "poly",
  },
  {
    title: "Starthmore",
    coords:
      "149,275,153,283,159,293,165,285,169,278,170,267,164,263,155,261,150,266",
    shape: "poly",
  },
  {
    title: "Airdrie",
    coords:
      "111,253,114,259,118,266,125,275,131,263,137,251,132,240,122,238,113,243",
    shape: "poly",
  },
  {
    title: "Red Deer",
    coords:
      "126,198,121,208,126,220,131,228,137,236,144,247,157,234,165,216,165,198,161,193,154,190,141,187,132,189",
    shape: "poly",
  },
];
const ServicesLocation: React.FC<{
  data: typeof homePage.servicesLocation;
  className?: string;
}> = ({ data, className }) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAreaElement>) => {
    if (imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className={`bg-[#F7F9FA] px-3 ${className}`}>
      <div className="relative z-40 mx-auto max-w-[1500px] -translate-y-12 rounded-3xl bg-white px-4 shadow-lg">
        <div className="flex flex-col items-start justify-between gap-8 p-8 lg:flex-row lg:p-10">
          {/* Text container with heading, description and locations */}
          <div className="flex w-full flex-col items-stretch gap-4 lg:max-w-[670px]">
            <h2 className="text-2xl font-bold text-[#013F68] lg:text-4xl">
              {data.heading}
            </h2>
            <h5 className="text-[#767676]">{data.description}</h5>
            <div className="grid max-w-[560px] grid-cols-1 gap-3 sm:grid-cols-2">
              {data.locations.map((loc, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-[#F4F4F4] p-3 text-[#767676]"
                >
                  <FaLocationDot color="#FFA600" />
                  {loc.name}
                </div>
              ))}
            </div>
          </div>

          {/* Image section with map */}
          <div
            ref={imageContainerRef}
            className="relative flex w-full flex-grow justify-end lg:w-auto"
          >
            <img
              src={"/images/home/services-location-map.png"}
              alt={"metblinds services map"}
              className="h-full object-fill object-right"
              useMap="#locationMap"
            />
            <map name="locationMap">
              {mapAreas.map((area, index) => (
                <area
                  key={index}
                  shape={area.shape}
                  coords={area.coords}
                  onMouseEnter={(e) => {
                    setHoveredLocation(area.title);
                    handleMouseMove(e);
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className="cursor-pointer"
                />
              ))}
            </map>
            {hoveredLocation && (
              <div
                className="absolute z-10 w-80 rounded-2xl bg-white p-6 text-sm shadow-lg max-[320px]:max-w-80"
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transform: "translate(-100%, -100%)",
                  marginTop: "-10px",
                }}
              >
                <div className="flex items-center gap-3">
                  <FaLocationDot className="text-5xl" color="#FFA600" />
                  <h5 className="text-4xl font-bold text-[#676767]">
                    {hoveredLocation}
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLocation;
