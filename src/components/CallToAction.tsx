
import React from "react";
import { Link } from "react-router-dom";

interface CallToActionProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  bgColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  headline = "Ready to get started?",
  description = "Join thousands of parents and schools who trust our platform",
  buttonText = "Get Started",
  buttonLink = "#",
  bgColor = "bg-white",
  textColor = "text-gray-900",
  buttonColor = "bg-blue-600 hover:bg-blue-700",
  buttonTextColor = "text-white"
}) => {
  return (
    <section className={`py-16 px-4 ${bgColor} ${textColor}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{headline}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-80">{description}</p>
        {buttonLink.startsWith("/") ? (
          <Link 
            to={buttonLink}
            className={`${buttonColor} ${buttonTextColor} font-bold py-3 px-8 rounded-lg transition-colors inline-block`}
          >
            {buttonText}
          </Link>
        ) : (
          <a 
            href={buttonLink}
            className={`${buttonColor} ${buttonTextColor} font-bold py-3 px-8 rounded-lg transition-colors inline-block`}
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

export default CallToAction;
