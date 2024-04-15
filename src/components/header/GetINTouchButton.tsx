import React from "react";
import { Link } from "react-router-dom";

const GetInTouchButton: React.FC = () => {
  return (
    <div className="hidden lg:block">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 bg-secondary-400 hover:border-secondary-400"
      ><button className="btn-getintouch">Get in Touch</button>
        
      </Link>
    </div>
  );
};

export default GetInTouchButton;
