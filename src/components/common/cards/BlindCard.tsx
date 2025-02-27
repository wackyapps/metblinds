import React from "react";

const BlindCard: React.FC<{
  title: string;
  description: string;
  buttonText: string;
  image: string;
}> = ({ title, image, description, buttonText }) => {
  return (
    <div
      className="flex min-h-[500px] flex-col items-stretch justify-end gap-3 rounded p-10"
      style={{
        background: `linear-gradient(#f7f9fa00, #132D59CC,#132D59), 
              url(${image})`,
      }}
    >
      <h4 className="text-3xl font-bold text-white"> {title}</h4>
      <p className="text-white">{description} </p>
      <div>
        <button className={`rounded-full bg-[#FFA600] px-5 py-2 text-white`}>
          <span> {buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default BlindCard;
