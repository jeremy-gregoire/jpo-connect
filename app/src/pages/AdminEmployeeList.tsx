import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBarAdmin from "../../assets/components/header_admin";
import "../../assets/styles/opendays.css";

const apiPath = "http://localhost:80/webalizer/jpo-connect";

type Employee = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  updated_at: string;
  created_at: string;
};

type Role = {
  id: number;
  label: string;
};

export default function AdminEmployeeList() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>("3");

  useEffect(() => {
    axios
      .get(`${apiPath}/api/index.php?query=employees`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error(error));

    axios
      .get(`${apiPath}/api/index.php?query=roles`)
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Role modified`);
  };

  return (
    <>
      <NavBarAdmin></NavBarAdmin>
      <h1 className="title">Liste des employées</h1>
      <button
        className="addButton"
        onClick={() => {
          navigate("/admin/employee/add");
        }}
      >
        Ajouter
      </button>
      <div className="table">
        <table>
          <thead>
            <tr>
              <td colSpan={8}></td>
              <td></td>
            </tr>
            <tr>
              <th className="titreTH">#</th>
              <th className="titreTH">firstname</th>
              <th className="titreTH">lastname</th>
              <th className="titreTH">email</th>
              <th className="titreTH">avatar</th>
              <th className="titreTH">Compte modifier le</th>
              <th className="titreTH">Enregistrer le</th>
              <th className="titreTH">Role</th>
              <th className="titreTH">Action</th>
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
                    <form onSubmit={handleSubmit} method="post">
                      <input type="hidden" name="employeeId" value={employee.id} />
                      <select
                        name="roles"
                        id="roles"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value as string)}
                      >
                        {roles.map((role) => {
                          return (
                            <option key={crypto.randomUUID()} value={role.id}>
                              {role.label}
                            </option>
                          );
                        })}
                      </select>
                      <button type="submit">Modifier</button>
                    </form>
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
      </div>
    </>
  );
}
