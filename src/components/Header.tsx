import React from 'react';
import { Link } from 'react-router-dom';

import '../style.css';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 z-[1000] hidden w-full items-center justify-between bg-primary text-white border-b border-translucent-light-100 px-8 py-3 lg:flex logo" style={{ opacity: 1, transform: 'none' }}>
      <Link to="/" className="flex items-center gap-4">
        <img src="https://metalogic.com.np/metalogo.png" alt="metalogic comany logo" className="h-12 w-12 " />
        <div className="flex flex-col">
          <h1 className="__className_1e998c flex text-3xl font-semibold tracking-widest">
            <span>Meta</span>
            <span>Logic</span>
          </h1>
        </div>
      </Link>
      <ul className="flex gap-8 font-semibold">
        <li><Link to="/" className="Navbar_link__ambd4 Navbar_active__WxVct relative pb-1">Home</Link></li>
        <li><button className="Navbar_link__ambd4 null outline:none relative pb-1">Services</button></li>
        <li><Link to="/careers" className="Navbar_link__ambd4 null relative pb-1">Career</Link></li>
        <li><Link to="/blogs" className="Navbar_link__ambd4 null relative pb-1">Blogs</Link></li>
        <li><Link to="/about" className="Navbar_link__ambd4 null relative pb-1">About Us</Link></li>
      </ul>
      <div>
        <Link to="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 bg-secondary-400 text-white hover:border-secondary-400">Get in Touch</Link>
      </div>
    </nav>
  );
};

export default Header;
