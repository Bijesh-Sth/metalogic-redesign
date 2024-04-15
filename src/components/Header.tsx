import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./header/Logo";
import MenuButton from "./header/MenuButton";
import MenuItem from "./header/MenuItem";
import GetInTouchButton from "./header/GetINTouchButton";
import "../style.css";

const Header: React.FC = () => {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState<string>(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname, setCurrentRoute]);

  useEffect(() => {
    console.log("Current Route:", currentRoute);
  }, [currentRoute]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 py-3 px-6 w-full bg-primary"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="red flex items-center">
          <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <ul
            className={`lg:flex ${isMenuOpen ? "flex" : "hidden"} gap-8 font-semibold`}
            ref={menuRef}
          >
            <MenuItem path="/" currentRoute={currentRoute}>Home</MenuItem>
            <MenuItem path="/services" currentRoute={currentRoute}>Services</MenuItem>
            <MenuItem path="/careers" currentRoute={currentRoute}>Career</MenuItem>
            <MenuItem path="/blogs" currentRoute={currentRoute}>Blogs</MenuItem>
            <MenuItem path="/about" currentRoute={currentRoute}>About Us</MenuItem>
          </ul>
        </div>
        <GetInTouchButton />
      </div>
    </nav>
  );
};

export default Header;
