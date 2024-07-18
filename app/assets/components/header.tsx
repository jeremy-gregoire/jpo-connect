// src/components/NavBar.js
import { NavLink } from "react-router-dom";

import "../styles/header.css";

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="accessNav">
          <ul className="accessUl">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "accesLink accessRef active" : "accesLink accessRef"
                }
                to="/admin/opendays"
              >
                Access
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "accesLink accessRef active" : "accesLink accessRef"
                }
                to="/#"
              >
                Doc
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className="mainNav">
          <img className="logo" src="../assets/images/logos/logo.png" alt="logo plateforme bleu" />
          <ul className="mainUl">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "mainLink mainRef active" : "mainLink mainRef"
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "mainLink mainRef active" : "mainLink mainRef"
                }
                to="/register"
              >
                S'inscrire
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "mainLink mainRef active" : "mainLink mainRef"
                }
                to="/connection"
              >
                Connexion
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "mainLink mainRef active" : "mainLink mainRef"
                }
                to="/profil"
              >
                Profil
              </NavLink>
            </li>
          </ul>
          <div className="avatar">avatar</div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
