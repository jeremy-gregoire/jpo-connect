// src/components/NavBar.js
import { NavLink, Route, Routes } from "react-router-dom";
import Register from "../../src/pages/Register";
import Profil from "../../src/pages/Profil";
import Home from "../../src/pages/Home";
import Connection from "../../src/pages/Connection";
import NotFound from "../components/notFound"; // Importer le composant 404

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
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<NotFound />} /> {/* Utilisation du composant 404 */}
      </Routes>
    </>
  );
};

export default NavBar;
