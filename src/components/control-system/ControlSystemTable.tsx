import { controlSystemPage } from "@/configs/pages-data/control-systems";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
type Props = {
  data: typeof controlSystemPage.controlSystemTable;
};

const ControlSystemTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="py-24">
      <div className="global-container">
        <div className="mb-12 flex flex-col justify-center">
          <h2 className="mb-6 text-center text-3xl font-semibold text-[#023D64] sm:text-4xl md:text-5xl">
            {data.heading}
          </h2>
          <p className="text-center text-sm text-[#767676] sm:text-xl md:text-[22px]">
            {data.subHeading}
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
                {data.controlOptions.map((option) => (
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
              {data.blindsDetails.map((system) => (
                <tr key={system.blindType}>
                  <td className="whitespace-nowrap px-6 py-4 text-xl font-medium text-[#504D4D]">
                    {system.blindType}
                  </td>
                  {data.controlOptions.map((option) => (
                    <td
                      key={option}
                      className="whitespace-nowrap px-6 py-4 text-center"
                    >
                      {system.controls[
                        option as keyof typeof system.controls
                      ] ? (
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
