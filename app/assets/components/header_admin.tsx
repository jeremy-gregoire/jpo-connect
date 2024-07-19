import { NavLink } from "react-router-dom";
import "../styles/headeradmin.css";

const NavBarAdmin = () => {
  return (
    <>
      <div className="mainNav">
        <img className="logo" src="../assets/images/logos/logo.png" alt="logo plateforme bleu" />
        <nav className="nav">
          <li className="mainLi">
            <NavLink
              className={({ isActive }) =>
                isActive ? "mainLink mainRef active" : "mainLink mainRef"
              }
              to="/home"
            >
              Accueil
            </NavLink>
          </li>
          <li className="mainLi">
            <NavLink
              className={({ isActive }) =>
                isActive ? "mainLink mainRef active" : "mainLink mainRef"
              }
              to="/admin/opendays"
            >
              JPO
            </NavLink>
          </li>
          <li className="mainLi">
            <NavLink
              className={({ isActive }) =>
                isActive ? "mainLink mainRef active" : "mainLink mainRef"
              }
              to="/admin/employees"
            >
              Gestion employées
            </NavLink>
          </li>

          <li className="mainLi">
            <NavLink
              className={({ isActive }) =>
                isActive ? "mainLink mainRef active" : "mainLink mainRef"
              }
              to="#"
            >
              Se déconnecter
            </NavLink>
          </li>
        </nav>
      </div>
    </>
  );
};

export default NavBarAdmin;
