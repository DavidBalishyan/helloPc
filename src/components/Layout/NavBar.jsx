 
import { useState } from "react";
import NavLinks from "./content/NavLinks";
import Auth from "./content/Autentication";
import { Link } from "react-router-dom";
import Profile from "./content/Profile";
import ThemeChangeComponent from "./content/ThemeChangeComponent";
import logo from "/Logo.png";
import { useSelector } from "react-redux";
import LngChange from "../_common/LngChange/LngChange";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuth } = useSelector((state) => state.global);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-md">
      <div className=" px-6 py-3 w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="text-current text-2xl font-semibold">
            <img src={logo} width="70px" height="70px" />
          </Link>

          {/* Menu Button for mobile view */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-current focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-grow flex justify-end items-center">
            {!isMenuOpen && isAuth ? (
              <>
                <div className="flex-grow flex justify-center">
                  <NavLinks isMenuOpen={isMenuOpen} />
                </div>
                <Profile />
                <ThemeChangeComponent />
              </>
            ) : (
              <Auth isMenuOpen={isMenuOpen} />
            )}
            <LngChange/>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-600 py-4">
          {isAuth ? (
            <NavLinks isMenuOpen={isMenuOpen} />
          ) : (
            <Auth isMenuOpen={isMenuOpen} />
          )}
        </div>
      )}
    </nav>
    
  );
};

export default Navbar;
