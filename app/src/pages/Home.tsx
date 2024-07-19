import React from "react";
import "../../assets/styles/home.css";
import NavBar from "../../assets/components/header";

const Details: React.FC = () => {
  return (
    <>
      <NavBar />

      <h1 className="title">Nos Journées Portes Ouvertes à venir</h1>

      <h1 className="title">Les actualitées de La Plateforme_</h1>
      <div className="card">
        <a className="card_text" href="https://laplateforme.io/newsletter-ia-n1/">
          <img
            className="card_img"
            src="../assets/images/news/NewsletterIA.jpg"
            alt="couverture actualité IA"
          />
        </a>
        <p className="card_title">Newletter IA - n°1</p>
      </div>
      <div className="card">
        <a
          className="card_text"
          href="https://laplateforme.io/les-etudiants-de-la-plateforme_-remportent-la-regate-des-minots-2024/"
        >
          <img
            className="card_img"
            src="../assets/images/news/regatte.jpg"
            alt="couverture actualité IA"
          />
        </a>
        <p className="card_title">On remporte la régate</p>
      </div>
      <div className="card">
        <a
          className="card_text"
          href="https://laplateforme.io/business-solution-special-cybersecurite-hacking/"
        >
          <img
            className="card_img"
            src="../assets/images/news/cyber.jpg"
            alt="couverture actualité IA"
          />
        </a>
        <p className="card_title">Buisness Solution - Cybersécurité hacking</p>
      </div>
      <div className="card">
        <a
          className="card_text"
          href="https://laplateforme.io/business-solution-special-martigues/"
        >
          <img
            className="card_img"
            src="../assets/images/news/solution.jpg"
            alt="couverture actualité IA"
          />
        </a>
        <p className="card_title">Buisness Solution - Special Martigues</p>
      </div>
    </>
  );
};

export default Details;
