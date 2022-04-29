import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isButton, setIsButton] = React.useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setIsButton(false);
    } else {
      setIsButton(true);
    }
  };

  React.useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const navMenuStyles = {
    justifyContent: isClicked ? "start" : "end",
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => setIsClicked(false)}
          >
            Rasool296
          </Link>
          <div
            className="menu-icon"
            onClick={() => setIsClicked((preClick) => !preClick)}
          >
            <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul
            className={isClicked ? "nav-menu active" : "nav-menu"}
            style={navMenuStyles}
          >
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => setIsClicked(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={() => setIsClicked(false)}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={() => setIsClicked(false)}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={() => setIsClicked(false)}
              >
                Sign-up
              </Link>
            </li>
          </ul>
          {isButton && <Button buttonStyle="btn-outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
