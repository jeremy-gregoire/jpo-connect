import React from "react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

const Details: React.FC = () => {
  //   const [profileData, setProfileData] = useState<any>(null);
  //   const [error, setError] = useState<any>(null);

  //   useEffect(() => {
  //     axios
  //       .post(
  //         "http://localhost:80/jpo-connect/api/index.php",
  //         {
  //           id: 2,
  //         },
  //         {
  //           params: {
  //             query: "profil",
  //           },
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         console.log(response.data);
  //         setProfileData(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setError(error);
  //       });
  //   }, []);

  return (
    <>
      <p>NOS JPO A VENIR</p>
      {/* {error && <p>Erreur: {error.message}</p>}
      {profileData && (
        <div>
          <p>Prénom: {profileData.firstname}</p>
        </div>
      )} */}
      <p>LES ACTUALITEES DE LA PLATEFORME</p>
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
        <img
          src="../assets/images/news/regatte.jpg"
          alt="couverture actualité IA"
          width={150}
        />
        <a href="https://laplateforme.io/les-etudiants-de-la-plateforme_-remportent-la-regate-des-minots-2024/">
          lien de l'article
        </a>
      </div>
      <div>
        <p>Buisness Solution - Cybersécurité hacking</p>
        <img
          src="../assets/images/news/cyber.jpg"
          alt="couverture actualité IA"
          width={150}
        />
        <a href="https://laplateforme.io/business-solution-special-cybersecurite-hacking/">
          lien de l'article
        </a>
      </div>
      <div>
        <p>Buisness Solution - Special Martigues</p>
        <img
          src="../assets/images/news/solution.jpg"
          alt="couverture actualité IA"
          width={150}
        />
        <a href="https://laplateforme.io/business-solution-special-martigues/">lien de l'article</a>
      </div>
    </>
  );
};

export default Details;
