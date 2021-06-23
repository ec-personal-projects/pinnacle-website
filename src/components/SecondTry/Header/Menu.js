import React from "react";
import { useEffect, useState } from "react";
import logo from "../../../assets/nav-logo.png";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuType = () => {
    return windowWidth > 1000 ? <DesktopMenu /> : <MobileMenu />;
  };
  return (
    <div className="nav-container">
      <header className="nav-container">
        <img src={logo} alt="Pinnacle Logo" />
        {menuType()}
      </header>
    </div>
  );
};

export default Header;
