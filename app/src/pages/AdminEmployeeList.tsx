import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const apiPath = 'http://localhost:80/webalizer/jpo-connect';

type Employee = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  updated_at: string;
  created_at: string;
};

export default function AdminEmployeeList() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    axios
      .get(`${apiPath}/api/index.php?query=employees`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td colSpan={8}></td>
            <td>
              <button
                onClick={() => {
                  navigate('/admin/employee/add');
                }}
              >
                Ajouter
              </button>
            </td>
          </tr>
          <tr>
            <th>#</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>avatar</th>
            <th>Compte modifier le</th>
            <th>Enregistrer le</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={crypto.randomUUID()}>
                <td>{employee.id}</td>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>{employee.email}</td>
                <td>{employee.avatar}</td>
                <td>{employee.updated_at}</td>
                <td>{employee.created_at}</td>
                <td>
                  <button>Modifier</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`/admin/employee/${employee.id}/delete`);
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
