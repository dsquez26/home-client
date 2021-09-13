import { NavLink } from "react-router-dom";

import "./Nav.css";

function Navigation() {
  return (
    <div className="nav-cont-1">
      <nav>
        <ul className="nav-ul-1">
          <li>
            <NavLink to="/home">
              <input type="button" value="Home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
              <input type="button" value="Services" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers">
              <input type="button" value="Careers" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <input type="button" value="Login" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <input type="button" value="About Us" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
