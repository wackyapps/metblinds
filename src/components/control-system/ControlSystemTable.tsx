interface ControlSystem {
  blindType: string;
  controls: Record<string, boolean>;
}

const controlOptions = [
  "Corded",
  "Cordless",
  "Manual Wand",
  "Electric Wand",
  "Motorized Control",
  "Smart Control",
];

const controlSystems: ControlSystem[] = [
  {
    blindType: "Zebra Blinds",
    controls: {
      Corded: true,
      Cordless: true,
      "Manual Wand": false,
      "Electric Wand": true,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Roller Blinds",
    controls: {
      Corded: true,
      Cordless: true,
      "Manual Wand": false,
      "Electric Wand": true,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Double Roller Blinds",
    controls: {
      Corded: false,
      Cordless: true,
      "Manual Wand": false,
      "Electric Wand": true,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Sunscreen Blinds",
    controls: {
      Corded: true,
      Cordless: true,
      "Manual Wand": false,
      "Electric Wand": true,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Trifold Blinds",
    controls: {
      Corded: true,
      Cordless: false,
      "Manual Wand": false,
      "Electric Wand": true,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Honeycomb Blinds",
    controls: {
      Corded: false,
      Cordless: true,
      "Manual Wand": false,
      "Electric Wand": false,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Honeycomb DNN Blinds",
    controls: {
      Corded: false,
      Cordless: true,
      "Manual Wand": false,
      "Electric Wand": false,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Roman Shades",
    controls: {
      Corded: false,
      Cordless: true,
      "Manual Wand": false,
      "Electric Wand": false,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Luxury Roman Shades",
    controls: {
      Corded: false,
      Cordless: true,
      "Manual Wand": false,
      "Electric Wand": false,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Dream Curtains",
    controls: {
      Corded: true,
      Cordless: false,
      "Manual Wand": true,
      "Electric Wand": false,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Drapery",
    controls: {
      Corded: false,
      Cordless: false,
      "Manual Wand": true,
      "Electric Wand": false,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
  {
    blindType: "Skylights",
    controls: {
      Corded: false,
      Cordless: true,
      "Manual Wand": true,
      "Electric Wand": false,
      "Motorized Control": true,
      "Smart Control": true,
    },
  },
];

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";

const ControlSystemTable: React.FC = () => {
  return (
    <div className="py-24">
      <div className="global-container">
        <div className="mb-12 flex flex-col justify-center">
          <h2 className="mb-6 text-center text-3xl font-semibold text-[#023D64] sm:text-4xl md:text-5xl">
            Find the Right Control System for Your Blinds
          </h2>
          <p className="text-center text-sm text-[#767676] sm:text-xl md:text-[22px]">
            Use the table below to check which control options are available for
            your preferred blinds. Click to expand and view details.
          </p>
        </div>
        <div className="overflow-x-auto rounded-lg bg-white shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#FDBA3C]">
              <tr>
                <th
                  scope="col"
                  className="px-8 py-6 text-left text-lg font-medium uppercase tracking-wider text-white"
                >
                  Blinds
                </th>
                {controlOptions.map((option) => (
                  <th
                    key={option}
                    scope="col"
                    className="px-8 py-3 text-center text-lg font-medium uppercase tracking-wider text-white"
                  >
                    {option}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {controlSystems.map((system) => (
                <tr key={system.blindType}>
                  <td className="whitespace-nowrap px-6 py-4 text-xl font-medium text-[#504D4D]">
                    {system.blindType}
                  </td>
                  {controlOptions.map((option) => (
                    <td
                      key={option}
                      className="whitespace-nowrap px-6 py-4 text-center"
                    >
                      {system.controls[option] ? (
                        <FaCheckCircle className="mx-auto text-3xl text-amber-400" />
                      ) : (
                        <RiCloseCircleFill className="mx-auto text-3xl text-gray-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ControlSystemTable;
