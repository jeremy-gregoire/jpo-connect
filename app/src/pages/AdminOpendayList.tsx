import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AdminOpendayList() {
  const [opendays, setOpendays] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:80/index.php?query=opendays')
      .then((response) => setOpendays(response.data))
      .catch((error) => console.error(error));
    console.log(opendays);
  }, []);

  return (
    <>
      <h1>Gestion des journées portes ouvertes</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Date de modification</th>
            <th>Date de creation</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}
