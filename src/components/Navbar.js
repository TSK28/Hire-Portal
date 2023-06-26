import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useScrollYPosition } from "react-use-scroll-position";
import "../styles/navbar.css";
// import { Link } from "react-router-dom";
function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollYPosition();

  const stickeyTrigger = window.innerHeight / 2.75;

  return (
    <Container>
      <div
        className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${
          menuOpen ? " nav-open" : ""
        }`}
      >
        <div className="nav-content">
          <div
            className="nav-logo"
            onClick={function () {
              window.location = "./";
            }}
          >
            Hire Portal
          </div>

          {/* <nav className="nav-links__container">
            {links &&
              links.map((link, i) => (
                <Link to={link.href}>
                  <div className="nav-link">
                    <div className="nav-link__text">{link.title}</div>
                    <div className="nav-link__background" />
                  </div>
                </Link>
              ))}
          </nav> */}

          <nav className="nav-links__container">
            {links &&
              links.map((link, i) => (
                <div className="nav-link">
                  <div
                    className="nav-link__text"
                    onClick={function () {
                      if (link.title !== "Home") {
                        window.location = link.href;
                      } else {
                        window.location = "./";
                      }
                    }}
                  >
                    {link.title}
                  </div>
                  <div className="nav-link__background" />
                </div>
              ))}
          </nav>

          <div
            className="nav-menu__icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div />
            <div />
          </div>
        </div>
      </div>
    </Container>
  );
}

Navbar.defaultProps = {
  links: [
    { title: "Home", href: "#home" },
    { title: "Services", href: "#services" },
    { title: "Candidate Search", href: "search" },
    { title: "Login", href: "login" },
    { title: "Register", href: "register" }
  ]
};

export default Navbar;
