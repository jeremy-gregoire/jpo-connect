// src/pages/NotFound.js
import { NavLink } from "react-router-dom";
import "../styles/notFound.css";

const NotFound = () => {
  return (
    <>
      <p className="error-msg">Error 404</p>
      <div className="not-found">
        <div>
          <h1>Oh non ! La porte se ferme !</h1>
          <p>Revenez sur une fenêtre ouverte pour ne rien manquer !</p>
        </div>
        <div className="door">
          <div className="door-inner">
            <div className="door-left"></div>
            <div className="door-right"></div>
            <div className="door-handle-left"></div>
            <div className="door-handle-right"></div>
          </div>
        </div>
        <p></p>

        <NavLink to="/home" className="home-link">
          Retour à l'accueil
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
