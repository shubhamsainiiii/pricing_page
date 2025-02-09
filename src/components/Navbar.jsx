import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import logo from "../assets/images/logo.png";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="hidden bg-blue-900 py-1 md:flex justify-between md:py-2">
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
                    <span><a href="mailto">info@regexsoftware.com</a></span>
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
        </>
    );
};

export default Navbar;


