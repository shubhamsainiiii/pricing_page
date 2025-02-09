import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-[30px] sm:text-[30px] md:text-[30px] lg:text-[30px] text-[#242d6f] font-serif text-center mt-10 mb-6">{title}</h1>
    </div>
  );
};

export default SectionTitle;
