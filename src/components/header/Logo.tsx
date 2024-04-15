import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <div className="blue">
      <Link to="/" className="flex items-center gap-4">
        <img
          src="https://metalogic.com.np/metalogo.png"
          alt="metalogic comany logo"
          className="h-12 w-12 "
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold tracking-widest">
            <span>Meta</span>
            <span>Logic</span>
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
