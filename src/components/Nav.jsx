import { useState } from "react";
import { NavLink } from "react-router-dom";
import { headerLogo } from "../assets/images";
import { hamburger, cross } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <NavLink to="/">
          <img src={headerLogo} alt="logo" width={50} height={19} />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-end mr-8 items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
                style={({ isActive }) => ({
                  color: isActive ? "coral" : "inherit",
                })}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className={`hidden max-lg:block cursor-pointer z-50 ${
            isMenuOpen ? "fixed top-8 right-8" : ""
          }`}
          onClick={toggleMenu}
        >
          <img
            src={isMenuOpen ? cross : hamburger}
            alt={isMenuOpen ? "close menu" : "open menu"}
            width={25}
            height={25}
            className={isMenuOpen ? "pt-5" : ""}
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden">
          <div className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-30">
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col items-center pt-16 px-4">
              {navLinks.map((item) => (
                <li key={item.label} className="my-6">
                  <NavLink
                    to={item.href}
                    className="font-montserrat leading-normal text-2xl text-slate-gray"
                    style={({ isActive }) => ({
                      color: isActive ? "coral" : "inherit",
                    })}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
