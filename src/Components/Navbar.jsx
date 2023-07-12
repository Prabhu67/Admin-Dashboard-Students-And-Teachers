import React from "react";

const Navbar = ({ inactive, toggleoff }) => {
  return (
    <>
      <nav
        className={`navbar-menu navbar navbar-expand-lg navbar-dark  ${
          inactive ? "inactive" : ""
        } ${toggleoff ? "toggleoff" : ""}`}
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <h3>
              <aa className="nav-link active" aria-current="page" href="#">
                Elakkiya - EDU TECH COMPANY
              </aa>
            </h3>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
