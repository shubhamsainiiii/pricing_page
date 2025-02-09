import React from "react";
import bg from "../assets/images/bg.jpg";

const Mainsection = () => {
    return (
        <div className="relative w-full h-[50vh] sm:h-[50vh] lg:h-[60vh] mb-20 flex justify-center items-center">
            <div
                className="absolute inset-0 brightness-90 bg-center"
                style={{ backgroundImage: `url(${bg})`}}
            ></div>
            <div className="relative z-10">
                <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">Pricing</p>
            </div>
        </div>
    );
};

export default Mainsection;


