import React from "react";
import Ecommercecard from "./Ecommercecard";

const plans = [

    {
        title: "Silver Plans",
        price: "13999",
        image: "https://www.regexsoftware.com/wp-content/uploads/2023/04/Coffee-Please-6.png",
        features: [

            "Domain name registration",
            "5 Pages (Basic Design)",
            "10 product Listing",
            "Business Email id (Webmail)",
            "Unlimited Images & Videos",
            "Live Chat Integration",
            "Payment Gateway Integration",
            "Social Media Integration",
            "Web Hosting",
            "100% Responsive Website",
            "Design and Development",
            "Content Creation",
            "Security and Maintenance",
            "Annual Renewal Rs. 4000",
        ],
    },
    {
        title: "Gold  Plans",
        price: "18999",
        image: "https://www.regexsoftware.com/wp-content/uploads/2023/04/Coffee-Please-6.png",
        features: [
            "Domain name registration",
            "10 Pages(Dynamic Design)",
            "product Listing unlimited",
            "Business Email id(Webmail)",
            "Unlimited Images & Videos",
            "Live Chat Integration",
            "Payment Gateway Integration",
            "Social Media Integration",
            "Web Hosting",
            "100 % Responsive Website",
            "Design and Development",
            "Content Creation",
            "Security and Maintenance",
            "Annual Renewal Rs. 4000",
        ],
    },
    {
        title: "Platinum  Plans",
        price: "25999",
        image: "https://www.regexsoftware.com/wp-content/uploads/2023/04/Coffee-Please-6.png",
        features: [
            "Domain name registration",
            "20 Pages(Dynamic Design)",
            "product Listing Unlimited",
            "Business Email id (Webmail)",
            "Unlimited Images & Videos",
            "Live Chat Integration",
            "Payment Gateway Integration",
            "Social Media Integration",
            "Web Hosting",
            "100% Responsive Website",
            "Design and Development",
            "Content Creation",
            "Security and Maintenance",
            "Annual Renewal Rs. 4000",
        ],
    },
];

const EcommercePlans = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen p-6">
            <div className="w-18 text-[#242d6f]"> <hr /></div>
            <div className="flex justify-center items-center mt-7 px-4">
                <p className="text-center text-[18px] md:text-[15px] xl:text-[18px] text-[#7a7a7a]  font-semibold mb-6">
                    The price of an eCommerce website will depend on your specific needs and requirements. It’s important to do your research and carefully consider your options to ensure that you get the best value for your investment.
                </p>
            </div>
            <div className="grid grid-cols-1 max-w-5xl md:w-2xl lg:w-4xl sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 border sm:w-screen border-gray-400 xl:w-4xl px-1">
                {plans.map((plan, index) => (
                    <Ecommercecard key={index} {...plan} />
                ))}
            </div>
        </div>
    );
};

export default EcommercePlans;
