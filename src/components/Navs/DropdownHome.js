import React from "react";
import DropdownItem from "./DropdownItem";
import MegaDropdown from "./MegaDropdown";
import dataNav from "../../data/Navbar/navbar-data-home.json";
import useWindowResizeListener from "../../helpers/useWindowResizeListener";

const DropdownMenu = () => {

  useWindowResizeListener();

  const handleHover = (e) => {
    e.preventDefault();
    const width = window.innerWidth;
    if (width < 991) {
      const el = e.target;
      if (e.target.nextSibling) {
        if (el.parentElement.classList.contains("on")) {
          el.nextSibling.style.display = "none";
          el.parentElement.classList.remove("on");
          el.nextSibling.style.opacity = 0;
          el.nextSibling.classList.remove("fadeIn");
        } else {
          el.parentElement.classList.add("on");
          el.nextSibling.style.display = "block";
          el.nextSibling.style.opacity = 1;
          el.nextSibling.classList.add("fadeIn");
        }
      }
    }
  };

  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav" data-in="fadeIn" data-out="fadeOut">
      <li style={{marginTop:"2px"}} >
            <a href="/" className="nav-link" data-toggle="dropdown">
             Home
            </a>
       
          </li>
        {dataNav.map((dropdown, i) => (
          <li
            className={
              "dropdown nav-item " + (dropdown.megaMenu === true ? "megamenu-fw" : "")
            }
            onClick={(e) => handleHover(e)}
            key={i}
          >
            <a href="index" className="dropdown-toggle nav-link" data-toggle="dropdown">
              {dropdown.title}
            </a>
            {dropdown.megaMenu ? (
              <MegaDropdown
                item={dropdown.subMenu}
                columnTitle={dropdown.colsTitle}
                itemsPerCol={dropdown.itemsPerCol}
              />
            ) : (
              <DropdownItem
                item={dropdown.subMenu}
              />
            )}
          </li>
        ))}
          <li style={{marginTop:"2px"}} >
            <a href="index" className="nav-link" data-toggle="dropdown">
            Portfolio
            </a>
       
          </li>
          <li style={{marginTop:"2px"}} >
            <a href="blogs" className="nav-link" data-toggle="dropdown">
            Blogs
            </a>
       
          </li>
          <li style={{marginTop:"2px"}} >
            <a href="get-in-touch" className="nav-link" data-toggle="dropdown">
             Contact
            </a>
       
          </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
