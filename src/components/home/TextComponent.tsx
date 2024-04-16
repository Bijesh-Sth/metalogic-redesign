import React from "react";
import { Link } from "react-router-dom";

const TextSection: React.FC = () => {
  return (
    <div className="text">
      <div className="flex flex-col align items-center">
        <h2>Transforming Today</h2> <h2>For</h2> <h2>Digital Tomorrow</h2>
        <p>We are committed to offering state-of-the-art software solutions that</p>
        <p>enable companies to prosper in the digital world.</p>
        <div className="flex justify-center pt-10 " style={{ opacity: 1, transform: "none" }}>
          <Link to="/about" className="group flex gap-2 rounded-lg bg-translucent-dark-300 px-5 py-3 mx-2 learn" aria-label="go to about page">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-all duration-500 group-hover:translate-x-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
