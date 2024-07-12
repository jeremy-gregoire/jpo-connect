// RegisterForm.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // pour l'évènement (e) --> obliger de mettre (e: ChangeEvent<HTMLInputElement>) sinon
    // TypeScript ne reconnait pas l'évènement
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:80/index.php?query=register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la requête");
      }

      const data = await response.json();

      // Vérification de la présence d'une erreur dans la réponse
      if (data && data.error) {
        throw new Error(data.error);
      }

      console.log("Réponse du serveur:", data);
      // Ajoutez ici la logique pour gérer la réponse du backend si nécessaire
    } catch (error) {
      // Typage pour gérer correctement l'erreur
      if (error instanceof Error) {
        console.error("Erreur lors de l'envoi des données:", error.message);
      } else {
        console.error("Erreur inconnue:", error);
      }
    }
  };

  return (
    <div>
      <h2>Page d'inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterForm;
