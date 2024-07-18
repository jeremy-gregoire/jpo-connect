import { NavLink } from "react-router-dom";
import "../styles/navadmin.css";

const NavBarAdmin = () => {
  return (
    <>
      <div className="vertical">
        <nav className="navAdmin">
          <ul>
            <li>
              <NavLink className="navAdminLink" to="/home">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className="navAdminLink" to="/admin/opendays">
                Les Journées Porte Ouvertes
              </NavLink>
            </li>

            <li>
              <NavLink className="navAdminLink" to="/admin/openday/:id/modify">
                Openday
              </NavLink>
            </li>
            <li>
              <NavLink className="navAdminLink" to="/admin/openday/:id/delete">
                Openday
              </NavLink>
            </li>
            <li>
              <NavLink className="navAdminLink" to="/admin/employees">
                Openday
              </NavLink>
            </li>
            <li>
              <NavLink className="navAdminLink" to="/admin/employee/add">
                Openday
              </NavLink>
            </li>
            <li>
              <NavLink className="navAdminLink" to="/admin/employee/:id/delete">
                Openday
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBarAdmin;
