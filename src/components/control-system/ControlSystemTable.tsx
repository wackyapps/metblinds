import { controlSystemPage } from "@/configs/pages-data/control-systems";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import { inter } from "@/fonts";
type Props = {
  data: typeof controlSystemPage.controlSystemTable;
};

const ControlSystemTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="py-24">
      <div className="global-container">
        <div className="mb-12 flex flex-col justify-center">
          <h2
            className={`${inter.className} relative mx-auto mb-6 max-w-[700px] text-center text-3xl text-[#023D64] after:absolute after:left-[45%] after:top-0 after:-z-10 after:h-14 after:w-[140px] after:rounded-full after:bg-[#FFA600] sm:text-4xl md:text-5xl`}
          >
            {data.heading}
          </h2>
          <p className="mx-auto max-w-[1100px] text-center text-sm text-[#767676] sm:text-xl md:text-[22px]">
            {data.subHeading}
          </p>
        </div>
        <div className="overflow-x-auto rounded-[32px] bg-white shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#FDBA3C]">
              <tr>
                <th
                  scope="col"
                  className="px-10 py-6 text-left text-lg font-medium uppercase tracking-wider text-white"
                >
                  Blinds
                </th>
                {data.controlOptions.map((option) => (
                  <th
                    key={option}
                    scope="col"
                    className="whitespace-nowrap px-10 py-3 text-center text-lg font-medium uppercase tracking-wider text-white"
                  >
                    {option}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.blindsDetails.map((system) => (
                <tr key={system.blindType} className="px-4">
                  <td className="whitespace-nowrap px-10 py-4 text-xl font-medium text-[#504D4D]">
                    {system.blindType}
                  </td>
                  {data.controlOptions.map((option) => (
                    <td
                      key={option}
                      className="whitespace-nowrap px-10 py-4 text-center"
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
