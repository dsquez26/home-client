import { NavLink } from "react-router-dom";
import NavButton from "../Buttons/Buttons";

import "./Nav.css";

function Navigation() {

  return (
    <div className="nav-cont-1">
      <nav>
        <ul className="nav-ul-1">
          <li>
            <NavLink to="/home">
            <NavButton>Home</NavButton>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
            <NavButton>Services</NavButton>
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers">
             <NavButton>Careers</NavButton>
             {/* <input type="button" value="Careers" /> */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
            <NavButton>Login</NavButton>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
            <NavButton>About Us</NavButton>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
