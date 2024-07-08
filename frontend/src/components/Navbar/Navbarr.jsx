
import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./navbarr.css";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  OpenLinkButton,
  NavbarLinkContainer,
} from "./navbar.style";

export default function Navbarr(params) {
  const [selectedItem, setSelectedItem] = useState(null); // State to track selected item
  const [extendNavbar, setExtendNavbar] = useState(false);
  const navigate = useNavigate(); // Hook from react-router-dom to programmatically navigate

  const navigationItems = [
    // Array of navigation items for better maintainability
    { name: "Home", to: "home", className: "home" },
    { name: "About", to: "about", className: "About" }, // Corrected className from 'About' to 'about'
    { name: "Cities", to: "cities", className: "cities" },
    { name: "Testimonials", to: "testimonials", className: "testimonials" },
    { name: "Sponsors", to: "sponsors", className: "sponsors" },
  ];

  const button = [
    { name: "REGISTER", to: "register", className: "button", id: "button" },
  ];

  const handleClick = (name, path) => {
    setSelectedItem(name);
    if (name === "REGISTER") {
      navigate(path); // Navigate to the specified path
    }
  };

  return (
    <>
      <NavbarContainer $eN={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              {navigationItems.map((item) => (
                <li
                  key={item.name}
                  className={`${item.className} ${
                    selectedItem === item.name ? "selected" : ""
                  }`} // Add 'selected' class if item is selected
                  onClick={() => handleClick(item.name)} // Handle click event
                  id={item.id}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() =>{handleClick(item.name);}}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </NavbarLinkContainer>
            <OpenLinkButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>☰</> : <>☰</>}
            </OpenLinkButton>
          </LeftContainer>
          <RightContainer>
            {button.map((item) => (
              <li
                key={item.name}
                className={`${item.className} ${
                  selectedItem === item.name ? "selected" : ""
                }`} // Add 'selected' class if item is selected
                onClick={() => handleClick(item.name, '/register')} // Handle click event and navigate to /register
                id={item.id}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => handleClick(item.name, '/register')}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </RightContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          {navigationItems.map((item) => (
            <li
              key={item.name}
              className={`${item.className} ${
                selectedItem === item.name ? "selected" : ""
              }`} // Add 'selected' class if item is selected
              onClick={() => handleClick(item.name)} // Handle click event
              id={item.id}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </NavbarExtendedContainer>
      )}
    </>
  );
}
