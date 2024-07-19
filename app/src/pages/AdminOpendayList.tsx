import axios from "axios";
import { z } from "zod";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import NavBarAdmin from "../../assets/components/header_admin";
import "../../assets/styles/opendays.css";

const apiPath = "http://localhost:80/webalizer/jpo-connect";

const OpendaySchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  max_participants: z.number(),
  nb_participants: z.number(),
  opening_date: z.string(),
  opening_time: z.string(),
  closing_time: z.string(),
  updated_at: z.string(),
  created_at: z.string(),
  id_place: z.number(),
});

// Setup my type as my schema
type Openday = z.infer<typeof OpendaySchema>;

export default function AdminOpendayList() {
  const [opendays, setOpendays] = useState<Openday[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${apiPath}/api/index.php?query=opendays`)
      .then((response) => {
        setOpendays(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavBarAdmin></NavBarAdmin>
      <h1 className="title">Gestion des journées portes ouvertes</h1>
      <button
        className="addButton"
        onClick={() => {
          navigate("/admin/openday/add");
        }}
      >
        Ajouter
      </button>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="titreTH">#</th>
              <th className="titreTH">Titre</th>
              <th className="titreTH">Date de modification</th>
              <th className="titreTH">Date de creation</th>
              <th className="titreTH" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="textTD">1</td>
              <td className="textTD">Manger 5 fruits et légumes par jour</td>
              <td className="textTD">2024-04-14 14:30:45</td>
              <td className="textTD">2024-04-14 14:30:45</td>
              <td className="textTD">
                <button>Modifier</button>
              </td>
              <td className="textTD">
                <button>Supprimer</button>
              </td>
            </tr>
            {opendays.map((openday: Openday) => {
              return (
                <tr key={crypto.randomUUID()}>
                  <td>{openday.id}</td>
                  <td>
                    <Link to={`/openday/${openday.id}`}>{openday.title}</Link>
                  </td>
                  <td>{openday.updated_at}</td>
                  <td>{openday.created_at}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/admin/openday/${openday.id}/modify`);
                      }}
                    >
                      Modifier
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/admin/openday/${openday.id}/delete`);
                      }}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
