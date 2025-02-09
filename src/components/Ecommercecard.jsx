import React from 'react'
import check from "../assets/images/check.png";
const Ecommercecard = ({ image, title, price, features }) => {
    return (
        <div>
            <div className="p-6 flex flex-col items-start">
                <img src={image} className="w-48 h-48 mb-6" alt={title} />
                <h2 className="text-[23px] font-bold xl:text-[18px] md:text-[20px] text-[#242d6f] mb-4">
                    {title} – ₹{price}
                </h2>
                <ul className="space-y-2 text-[#7b7b7b] text-left w-full flex flex-col">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <img src={check} className="w-4 h-4" alt="Check Icon" />
                            <span className="text-[18px] xl:text-[16px] lg:text-[16px] md:text-[12px]">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Ecommercecard
