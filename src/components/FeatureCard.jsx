import React from "react";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="p-3 border border-gray-200 shadow-sm shadow-gray-500 text-center rounded-sm transition duration-300 hover:border-b-2  hover:border-b-indigo-900 ">
      <div className="flex items-left space-x-3">
        <img src={image} alt={image} className="w-7 h-7" />
        <h2 className="text-[#242d6f] text-[21px] font-semibold text-center">{title}</h2>
      </div>
      <p className="text-[#757575] text-[16px] mt-6 font-normal tracking-wide text-justify">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
