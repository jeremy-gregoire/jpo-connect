import React, { FormEvent } from "react";
import axios from "axios";

import NavBar from "../../assets/components/header";
import "../../assets/styles/register.css";

const RegisterForm: React.FC = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // permet d'éviter de recharger la page
    e.preventDefault();
    // recupère le formuaire et ses data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    /* 
      ici on change la méthode Fecth par l'utilisation du module Axios
      je n'ai plus d'erreur dans la console
      mais les données ne sont pas envoyé dans la base de donnée 
    */
    axios
      .post(
        "http://localhost:80/jpo-connect/api/index.php",
        {
          firstname: formData.get("firstname"),
          lastname: formData.get("lastname"),
          email: formData.get("email"),
          password: formData.get("password"),
        },
        {
          // index.php?query=register
          params: {
            query: "register",
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));

    form.reset();
  };

  return (
    <div>
      <div className="App">
        <NavBar />
      </div>
      <h1 className="title">Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Prénom:</label>
          <input type="text" id="firstname" name="firstname" required />
        </div>
        <div>
          <label htmlFor="lastname">Nom:</label>
          <input type="text" id="lastname" name="lastname" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterForm;
