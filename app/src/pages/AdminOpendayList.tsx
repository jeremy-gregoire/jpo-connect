import axios from 'axios';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const apiPath = 'http://localhost:80/webalizer/jpo-connect';

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

// Setup my type as my schema (test)
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
      <h1>Gestion des journées portes ouvertes</h1>
      <table>
        <thead>
          <tr>
            <th colSpan={5}></th>
            <th>
              <button
                onClick={() => {
                  navigate('/admin/openday/add');
                }}
              >
                Ajouter
              </button>
            </th>
          </tr>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Date de modification</th>
            <th>Date de creation</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
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
    </>
  );
}
