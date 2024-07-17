// src/components/NavBar.js
import { NavLink, Route, Routes } from "react-router-dom";
import Register from "../../src/pages/Register";
import Profil from "../../src/pages/Profil";
import Home from "../../src/pages/Home";

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
                to="/home"
              >
                Access
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "accesLink accessRef active" : "accesLink accessRef"
                }
                to="/home"
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
                to="/profil"
              >
                Profil
              </NavLink>
            </li>
          </ul>
          <div className="avatar">avatar</div>
        </nav>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default NavBar;