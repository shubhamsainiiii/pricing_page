import React from "react";
import PricingCard from "./PricingCard";

const plans = [
    {
        title: "Basic Plans",
        price: "5999",
        image: "https://www.regexsoftware.com/wp-content/uploads/2023/04/Coffee-Please-1.png",
        features: [
            "Domain name registration",
            "10 Pages (dynamic Website)",
            "10 Creations",
            "Business Email id (Webmail)",
            "Limitless Images & Videos",
            "Live Chat Integration",
            "Payment Gateway Integration",
            "Social Media Integration",
            "Web Hosting",
            "100% Responsive Website",
            "Design and Development",
            "Content Creation",
            "Security and Maintenance",
            "Annual Renewal Rs. 3000",
        ],
    },
    {
        title: "Classic Plans",
        price: "8999",
        image: "https://www.regexsoftware.com/wp-content/uploads/2023/04/Coffee-Please-4.png",
        features: [
            "Domain name registration",
            "15 Pages (dynamic Website)",
            "15 Creations",
            "Business Email id (Webmail)",
            "Limitless Images & Videos",
            "Live Chat Integration",
            "Payment Gateway Integration",
            "Social Media Integration",
            "WhatsApp Integration",
            "Web Hosting",
            "100% Responsive Website",
            "Design and Development",
            "Content Creation",
            "eCommarce Website",
            "Annual Renewal Rs. 4000",
            "Security and maintenance",
        ],
    },
    {
        title: "Premium Plans",
        price: "11999",
        image: "https://www.regexsoftware.com/wp-content/uploads/2023/04/Coffee-Please-5.png",
        features: [
            "Domain name registration",
            "20 Pages (dynamic Website)",
            "20 Creations",
            "Unlimited Email id (Webmail)",
            "Limitless Images & Videos",
            "Live Chat Integration",
            "Payment Gateway Integration",
            "Social Media Integration",
            "WhatsApp Integration",
            "Web Hosting",
            "100% Responsive Website",
            "Design and Development",
            "Content Creation",
            "eCommarce Website",
            "cPanel* Access",
            "Annual Renewal Rs. 5000",
            "Security and maintenance",
        ],
    },
];


const PricingPlans = () => {
    return (

        <div className="flex flex-col justify-center items-center min-h-screen p-6">
            <div className="w-18 text-[#242d6f]"><hr /></div>

            <div className="flex justify-center mt-7 lg:w-5xl px-4">
                <p className="text-center text-[18px] md:text-[15px] xl:text-[18px] text-[#7a7a7a] font-semibold mb-6">
                    It’s essential to keep in mind that a website is an investment that can bring significant returns to your business in terms of increased visibility, engagement, and revenue.
                </p>
            </div>

            {/* Responsive Grid for Pricing Cards */}
            <div className="grid grid-cols-1 max-w-5xl md:w-2xl lg:w-4xl sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 border sm:w-screen border-gray-400 xl:w-4xl px-1">
                {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </div>
    );
};

export default PricingPlans;
