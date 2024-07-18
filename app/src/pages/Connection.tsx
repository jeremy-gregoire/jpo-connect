import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<any>(null);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Réinitialiser l'erreur

    try {
      const response = await axios.post(
        "http://localhost:80/jpo-connect/api/index.php",
        { email, password },
        {
          params: {
            query: "connection",
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("POUR VOIR SI C'EST ENVOYER");
      console.log(response.data); // Affichez la réponse pour déboguer

      if (response.data) {
        setProfileData(response.data.user);
        navigate("/"); // Rediriger vers la page d'accueil
      } else {
        setError("Email ou mot de passe incorrect.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête:", error);

      // Affichez les détails de l'erreur
      if (axios.isAxiosError(error)) {
        console.error("Réponse de l'erreur:", error.response?.data);
        setError(error.response?.data?.message || "Une erreur s'est produite. Veuillez réessayer.");
      } else {
        setError("Une erreur s'est produite. Veuillez réessayer.");
      }
    }
  };

  return (
    <>
      {error && <p>Erreur: {error}</p>}
      {profileData ? (
        <div>
          <p>
            Bienvenue, {profileData.firstname} {profileData.lastname}!
          </p>
          <p>Email: {profileData.email}</p>
          {/* Ajoutez d'autres informations du profil ici */}
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Se connecter</button>
        </form>
      )}
    </>
  );
};

export default Login;
