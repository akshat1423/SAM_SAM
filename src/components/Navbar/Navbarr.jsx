// import React, { useState } from "react";
// import "./navbarr.css";
// import { smoothScrollTo } from "../smoothScroll/smoothScrollTo";
// import {
//   NavbarContainer,
//   LeftContainer,
//   RightContainer,
//   NavbarInnerContainer,
//   NavbarExtendedContainer,
//   OpenLinkButton,
//   NavbarLinkContainer,
// } from "./navbar.style";

// export default function Navbarr(params) {
//   const [selectedItem, setSelectedItem] = useState(null); // State to track selected item
//   const [extendNavbar, setExtendNavbar] = useState(false);

//   const navigationItems = [
//     // Array of navigation items for better maintainability
//     { name: "Home", href: "#home", className: "home" },
//     { name: "About", href: "#about", className: "About" }, // Corrected className from 'About' to 'about'
//     { name: "Cities", href: "#cities", className: "cities" },
//     { name: "Sponsors", href: "#sponsors", className: "sponsors" },
//     { name: "Testimonials", href: "#testimonials", className: "testimonials" },
//   ];

//   const button = [
//     { name: "REGISTER", href: "#", className: "button", id: "button" },
//   ];

//   const handleClick = (name) => {
//     setSelectedItem(name);
//   };

//   const handleScroll = (e, targetId) => {
//     e.preventDefault();
//     smoothScrollTo(targetId, window.innerHeight * 0.1); // 10vh offset
//   }

//   return (
//     <>
//     <NavbarContainer $eN={extendNavbar}>
//       <NavbarInnerContainer>
//         <LeftContainer>
//           <NavbarLinkContainer>
//             {navigationItems.map((item) => (
//               <li
//                 key={item.name}
//                 className={`${item.className} ${
//                   selectedItem === item.name ? "selected" : ""
//                 }`} // Add 'selected' class if item is selected
//                 onClick={(e) => {
//                   handleClick(item.name);
//                   handleScroll(e, item.href);
//                 }}
//                 id={item.id}
//               >
//                 <a href={item.href}>{item.name}</a>
//               </li>
//             ))}
//           </NavbarLinkContainer>
//           <OpenLinkButton
//             onClick={() => {
//               setExtendNavbar((curr) => !curr);
//             }}
//           >
//             {extendNavbar ? <>☰</> : <>☰</>}
//           </OpenLinkButton>
//         </LeftContainer>
//         <RightContainer>
//           {button.map((item) => (
//             <li
//               key={item.name}
//               className={`${item.className} ${
//                 selectedItem === item.name ? "selected" : ""
//               }`} // Add 'selected' class if item is selected
//               onClick={(e) => {
//                 handleClick(item.name);
//                 handleScroll(e, item.href);
//               }}// Handle click event
//               id={item.id}
//             >
//               <a href={item.href}>{item.name}</a>
//             </li>
//           ))}
//         </RightContainer>
//       </NavbarInnerContainer>

//     </NavbarContainer>
//     {extendNavbar && (
//         <NavbarExtendedContainer>
//           {navigationItems.map((item) => (
//             <li
//               key={item.name}
//               className={`${item.className} ${
//                 selectedItem === item.name ? "selected" : ""
//               }`} // Add 'selected' class if item is selected
//               onClick={() => handleClick(item.name)} // Handle click event
//               id={item.id}
//             >
//               <a href={item.href}>{item.name}</a>
//             </li>
//           ))}
//         </NavbarExtendedContainer>
//       )}
//     </>
//   );
// }


import React, { useState } from "react";
import { Link } from "react-scroll";
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

  const navigationItems = [
    // Array of navigation items for better maintainability
    { name: "Home", to: "home", className: "home" },
    { name: "About", to: "about", className: "About" }, // Corrected className from 'About' to 'about'
    { name: "Cities", to: "cities", className: "cities" },
    { name: "Sponsors", to: "sponsors", className: "sponsors" },
    { name: "Testimonials", to: "testimonials", className: "testimonials" },
  ];

  const button = [
    { name: "REGISTER", to: "register", className: "button", id: "button" },
  ];

  const handleClick = (name) => {
    setSelectedItem(name);
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
                    onClick={() => handleClick(item.name)}
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
