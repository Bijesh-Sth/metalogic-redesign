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
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true); // Track screen size

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname, setCurrentRoute]);

  useEffect(() => {
    console.log("Current Route:", currentRoute);
  }, [currentRoute]);

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024); // Set breakpoint as per your design
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <nav
      className="fixed top-0 left-0 py-3 px-6 w-full bg-primary z-50"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        {isLargeScreen ? (
          <ul className="lg:flex flex-row gap-8 font-semibold">
            <MenuItem path="/" currentRoute={currentRoute}>Home</MenuItem>
            <MenuItem path="/services" currentRoute={currentRoute}>Services</MenuItem>
            <MenuItem path="/careers" currentRoute={currentRoute}>Career</MenuItem>
            <MenuItem path="/blogs" currentRoute={currentRoute}>Blogs</MenuItem>
            <MenuItem path="/about" currentRoute={currentRoute}>About Us</MenuItem>
          </ul>
        ) : (
          <div className="relative">
            <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            {isMenuOpen && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-95 z-50">
                <div className="absolute top-0 right-0 p-4">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white focus:outline-none"
                  >
                    Close
                  </button>
                </div>
                <ul className="flex flex-col items-center justify-center h-full font-semibold" ref={menuRef}>
                  <MenuItem path="/" currentRoute={currentRoute}>Home</MenuItem>
                  <MenuItem path="/services" currentRoute={currentRoute}>Services</MenuItem>
                  <MenuItem path="/careers" currentRoute={currentRoute}>Career</MenuItem>
                  <MenuItem path="/blogs" currentRoute={currentRoute}>Blogs</MenuItem>
                  <MenuItem path="/about" currentRoute={currentRoute}>About Us</MenuItem>
                </ul>
              </div>
            )}
          </div>
        )}
        <GetInTouchButton />
      </div>
    </nav>
  );
};

export default Header;
