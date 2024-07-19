import axios from "axios";
import { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import NavBarAdmin from "../../assets/components/header_admin";

const apiPath = "http://localhost:80/webalizer/jpo-connect";

export default function AdminDeleteConfirmationEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    axios.delete(`${apiPath}/api/index.php`, {
      data: {
        id: id,
      },
      params: {
        query: "deleteEmployee",
      },
    });

    navigate(`/admin/employees`);
  };

  return (
    <>
      <NavBarAdmin></NavBarAdmin>
      <h1>Confirmation de la suppression</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Vous vous apprêtiez à supprimer un employé de la boite. Il/Elle sera supprimée de la base
          de données.
        </p>
        <p>
          Cette action est irréversible, et ne peut faire l'objet d'un retour en arrière et d'un
          d'argent !
        </p>
        <button type="submit">Supprimer</button>
        <Link to="/admin/employees">Revenir en arrière</Link>
      </form>
    </>
  );
}
