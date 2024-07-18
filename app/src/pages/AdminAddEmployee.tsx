import axios from 'axios';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const EmployeeSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  avatar: z.string(),
});

// Setup my types as my schemas
type Employee = z.infer<typeof EmployeeSchema>;

const apiPath = 'http://localhost:80/webalizer/jpo-connect';

export default function AdminAddEmployee() {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData: FormData = new FormData(e.target as HTMLFormElement);

    const employee: Employee = {
      firstname: formData.get('firstname')?.toString() || '',
      lastname: formData.get('lastname')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      password: formData.get('password')?.toString() || '',
      avatar: '',
    };
    const safeObject = EmployeeSchema.safeParse(employee);

    if (safeObject.success) {
      axios
        .post(
          `${apiPath}/api/index.php`,
          {
            firstname: employee.firstname,
            lastname: employee.lastname,
            email: employee.email,
            password: employee.password,
            avatar: employee.avatar,
          },
          {
            params: {
              query: 'addEmployee',
            },
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((_) => {
          navigate('/admin/employees');
        })
        .catch((error) => console.error(error));
    } else {
      console.error(safeObject.error);
    }
  };

  return (
    <>
      <h1>Ajouter un employé</h1>
      <form onSubmit={handleSubmit} method='post'>
        <div>
          <label htmlFor='firstname'>Prénom</label>
          <input type='text' name='firstname' id='firstname' required />
        </div>

        <div>
          <label htmlFor='lastname'>Nom de famille</label>
          <input type='text' name='lastname' id='lastname' required />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' required />
        </div>

        <div>
          <label htmlFor='password'>Mot de passe</label>
          <input type='password' name='password' id='password' min={8} required />
        </div>

        <button type='submit'>Ajouter</button>
      </form>
    </>
  );
}
