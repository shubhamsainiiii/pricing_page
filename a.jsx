// import React, { useState } from "react";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { FaLinkedin, FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi"
// import logo from "../assets/images/logo.png";

import React, { useState } from 'react'
import Ecommercecard from "./Ecommercecard";
import FeatureCard from "./FeatureCard";
import PricingCard from './src/components/PricingCard';
import messenger from "../assets/images/messenger.png"
import card from "../assets/images/card.png"
import group from "../assets/images/group.png"
import like from "../assets/images/like.png"
import bg from "../assets/images/bg.jpg"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import logo from "../assets/images/logo.png";


const features = [
    {
        title: "Live Chat",
        description: "live chat is a powerful tool for businesses looking to improve their customer experience, increase sales and conversions, and provide cost-effective customer support.",
        image: messenger
    },
    {
        title: "Responsive Design",
        description: "Responsive design is an essential approach for modern web design, as more and more users access the web through a variety of devices with different screen sizes and capabilities. By creating websites that can adapt to these different contexts, designers can ensure that their sites are accessible, user-friendly, and effective.",
        image: like
    },
    {
        title: "Payment Gateway",
        description: "Payment gateway are online platforms that enable merchants to accept electronic payments, such as credit card and digital wallet payments, for their products or services. payment gateway offer various features and pricing plans, so it is important to research and compare them before selecting one that best fits your business needs.",
        image: card
    },
    {
        title: "Social Media",
        description: "Social media for websites can be a powerful tool for businesses and individuals looking to connect with their audience and drive traffic to their website. However, it is important to have a clear strategy in place and to ensure that the integration of social media is seamless and user-friendly.",
        image: group
    },
];

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
];

const a = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="hidden  bg-blue-900 py-1 md:flex justify-between md:py-2">
                <div className="flex items-center text-white px-8">
                    <span>
                        <FaPhoneAlt className="mr-2" />
                    </span>
                    <span>+91-9602880219</span>
                    <span>+91-8104464971</span>
                    <span>+91-7852071653</span>
                    <span>
                        <FaEnvelope className="mx-2" />
                    </span>
                    <span><a href="mailhref">info@regexsoftware.com</a></span>
                </div>
                <div className="flex items-center text-white space-x-3 mr-46 md:pl-5">
                    <div className="hover:scale-85 transition duration-300 rounded-full border p-1.5">
                        <a href="https://www.linkedin.com/company/regexsoftware/posts/?feedView=all">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="hover:scale-85 transition duration-300 rounded-full border p-1.5">
                        <a href="https://www.instagram.com/regexsoftware/">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="hover:scale-85 transition duration-300 rounded-full border p-1.5">
                        <a href="https://t.me/REGexSoftware">
                            <FaTelegram />
                        </a>
                    </div>
                    <div className="hover:scale-85 transition duration-300 rounded-full border p-1.5">
                        <a href="https://www.facebook.com/REGex-Startup-Services-108473767230521/?eid=ARAMdniudX7tbOmQN717K4SVsxgb9ZmnEmR9pNAeBWvDYyfDZD9gMNfGmNSAFQo5NL25KvRMtXH6Mv6k&timeline_context_item_type=intro_card_work&timeline_context_item_source=100042192094858&fref=tag">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full shadow-md flex items-center pl-8 py-4 justify-between lg:justify-start">
                <div className="w-[160px] md:w-[90px] lg:w-[160px] mr-15">
                    <img
                        src={logo}
                        className="object-cover"
                        alt="Logo"
                    />
                </div>
                <div className="flex items-center space-x-3">
                    <buthrefn
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-xl"
                    >
                        <GiHamburgerMenu />
                    </buthrefn>
                </div>
                <div
                    className={`absolute lg:relative hrefp-14 right-5 lg:hrefp-0 lg:bg-transparent p-5 lg:p-0 text-blue-900 text-lg font-semibold ${isOpen ? "block" : "hidden"
                        } lg:block`}
                >
                    <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 lg:flex-wrap">
                        <li>
                            <a href="/" className="hover:underline underline-offset-10">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="hover:underline underline-offset-10"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/software-services"
                                className="hover:underline underline-offset-10"
                            >
                                Software Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/training-services"
                                className="hover:underline underline-offset-10"
                            >
                                Training Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/placed-student"
                                className="hover:underline underline-offset-10"
                            >
                                Our Placement
                            </a>
                        </li>
                        <li>
                            <a
                                href="/programs"
                                className="hover:underline underline-offset-10"
                            >
                                Programs
                            </a>
                        </li>
                        <li>
                            <a
                                href="/events"
                                className="hover:underline underline-offset-10"
                            >
                                Events
                            </a>
                        </li>
                        <li>
                            <a
                                href="/pricing"
                                className="hover:underline underline-offset-10"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact-us"
                                className="hover:underline underline-offset-10"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen relative md:w-full">
                <div
                    className="absolute brightness-80 w-full h-[70%] top-1 flex bg-center"
                    style={{ backgroundImage: `url(${bg})` }}
                ></div>
                <div className="relative z-10 flex flex-col justify-center items-center text-center">
                    <p className="text-white text-4xl md:text-5xl font-bold">Pricing</p>
                </div>
            </div>
            <div className="flex justify-center items-center h-96">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} image={feature.image} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="text-[30px] text-[#242d6f] mt-16 font-serif">{title}</h1>
            </div>
            <div className="flex flex-col justify-center items-center min-h-screen p-6">
                <div className="w-[10%] text-[#242d6f]"> <hr /></div>
                {/* Section Description */}
                <div className="flex justify-center mt-7 px-4">
                    <p className="text-center text-[16px] text-[#7a7a7a] font-semibold max-w-5xl mb-6">
                        It’s essential to keep in mind that a website is an investment that can bring significant returns to your business in terms of increased visibility, engagement, and revenue.
                    </p>
                </div>

                {/* Responsive Grid for Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border border-gray-400 max-w-6xl w-full px-4">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="text-[30px] text-[#242d6f] mt-16 font-serif">{title}</h1>
            </div>
            <div className="flex flex-col justify-center items-center min-h-screen p-6">
                <div className="w-[10%] text-[#242d6f]"> <hr /></div>
                <div className="flex justify-center mt-7 px-4">
                    <p className="text-center text-[16px] text-[#7a7a7a] font-semibold max-w-5xl mb-6">
                        The price of an eCommerce website will depend on your specific needs and requirements. It’s important to do your research and carefully consider your options to ensure that you get the best value for your investment.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-6xl border-1 border-gray-400">
                    {plans.map((plan, index) => (
                        <Ecommercecard key={index} {...plan} />
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default a;
