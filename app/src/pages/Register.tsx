import React, { FormEvent } from "react";
import axios from "axios";

const RegisterForm: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   role: "",
  // });

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

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
    // try {
    //   const response = await axios.post(
    //     "http://localhost:80/jpo-connect/api/index.php?query=register",
    //     new URLSearchParams(formData).toString(),
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   console.log("Réponse du serveur:", response.data);
    //   console.log(formData);
    // } catch (error: any) {
    //   if (error instanceof Error) {
    //     console.error("Erreur lors de l'envoi des données:", error.message);
    //     console.error("Erreur inconnue:", error);
    //   }
    // }
  };

  return (
    <div>
      <h2>Page d'inscription</h2>
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
