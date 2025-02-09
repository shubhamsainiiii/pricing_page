import React from "react";
import FeatureCard from "./FeatureCard";
import messenger from "../assets/images/messenger.png"
import card from "../assets/images/card.png"
import group from "../assets/images/group.png"
import like from "../assets/images/like.png"

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

const Features = () => {
  return (
    <div className="flex justify-center items-center min-h-96">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:mb-5 gap-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} image={feature.image} title={feature.title} description={feature.description} />
        ))}
      </div>
    </div>
  );
};

export default Features;
