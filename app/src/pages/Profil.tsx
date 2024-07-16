import React, { useEffect, useState } from "react";
import axios from "axios";

const Details: React.FC = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axios
      .post(
        "http://localhost:80/jpo-connect/api/index.php",
        {
          id: 2,
        },
        {
          params: {
            query: "profil",
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setProfileData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  /* 
    Le tableau vide [] signifie que cet effet ne se produira qu'une seule fois, 
    lors du montage du composant.
  */

  return (
    <>
      <h2>Page de profil</h2>
      {error && <p>Erreur: {error.message}</p>}
      {profileData && (
        <div>
          <p>Prénom: {profileData.firstname}</p>
          <p>Nom: {profileData.lastname}</p>
          <p>E-mail: {profileData.email}</p>
          {/* Ajoutez d'autres informations du profil ici */}
        </div>
      )}
    </>
  );
};

export default Details;
