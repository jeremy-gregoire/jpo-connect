import React from "react";

import NavBar from "../../assets/components/header";

const Details: React.FC = () => {
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <h1 className="title">Nos Journées Portes Ouvertes à venir</h1>
      <h1 className="title">Les actualitées de La Plateforme_</h1>
      <div>
        <p>Newletter IA - n°1</p>
        <img
          src="../assets/images/news/NewsletterIA.jpg"
          alt="couverture actualité IA"
          width={150}
        />
        <a href="https://laplateforme.io/newsletter-ia-n1/">lien de l'article</a>
      </div>
      <div>
        <p>On remporte la régate</p>
        <img src="../assets/images/news/regatte.jpg" alt="couverture actualité IA" width={150} />
        <a href="https://laplateforme.io/les-etudiants-de-la-plateforme_-remportent-la-regate-des-minots-2024/">
          lien de l'article
        </a>
      </div>
      <div>
        <p>Buisness Solution - Cybersécurité hacking</p>
        <img src="../assets/images/news/cyber.jpg" alt="couverture actualité IA" width={150} />
        <a href="https://laplateforme.io/business-solution-special-cybersecurite-hacking/">
          lien de l'article
        </a>
      </div>
      <div>
        <p>Buisness Solution - Special Martigues</p>
        <img src="../assets/images/news/solution.jpg" alt="couverture actualité IA" width={150} />
        <a href="https://laplateforme.io/business-solution-special-martigues/">lien de l'article</a>
      </div>
    </>
  );
};

export default Details;
