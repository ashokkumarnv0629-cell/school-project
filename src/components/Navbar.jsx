import "../App.css";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Chaitanya Gurukula School</div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li className="dropdown">
          <a href="#education">Education ⬇</a>
          <div className="dropdown-menu">
            <a href="/prekg">Pre-KG</a>
            <a href="/primary">Primary</a>
            <a href="/highschool">High School</a>
          </div>
        </li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
