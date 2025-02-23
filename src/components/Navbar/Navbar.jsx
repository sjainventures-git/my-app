import React, { useState } from "react";
import { Header, Nav, Link, SvgBox } from "./Styles";

import "./Navbar.css";
import MainNavbar from "./Main_navbar";
import LinkTwo from "../Links/Link_two";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isItOpen, setIsItOpen] = useState(false);
  // const handleToggle = () => setIsItOpen(!isItOpen);

  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    closed: {
      top: "-100vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  return (
   <>
     <div className='Main_navbar'><MainNavbar /> </div>
     <div className="Navbar">
      <Header>
        <SvgBox
          variants={iconVariants}
          animate={isOpen ? "opened" : "closed"}
          whileHover={{ scale: 1.4 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#fff"
            />
          </svg>
        </SvgBox>
      </Header>

        <Nav
         initial={false}
         variants={menuVariants}
         animate={isOpen ? "opened" : "closed"}
         className='navlinkk'
         onClick={() => setIsOpen(!isOpen)}
        >
        <Link variants={linkVariants}><a  href="#home">HOME</a></Link>
        <Link variants={linkVariants}><a href="#about_section">ABOUT</a></Link>
        <Link variants={linkVariants}><a href="#sponsor">SPONSORS</a></Link>
        <Link variants={linkVariants}><a href="#gallery">GALLERY</a></Link>
        <Link variants={linkVariants}><a href="#contact">CONTACT</a></Link>
        <Link variants={linkVariants}><a href="#events">EVENTS</a></Link>
        <Link variants={linkVariants}><LinkTwo /></Link>
        
      </Nav>
    </div>
   </>
  );
}

export default Navbar;
