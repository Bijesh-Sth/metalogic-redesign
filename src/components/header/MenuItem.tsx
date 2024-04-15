import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  path: string;
  currentRoute: string;
  children: ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, currentRoute, children }) => {
  return (
    <li className="nav-links">
      <Link
        to={path}
        className={`pb-1 ${currentRoute === path ? "active" : ""}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
