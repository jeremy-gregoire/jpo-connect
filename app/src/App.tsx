import { Route, Routes } from 'react-router-dom';
import AdminEmployeeList from './pages/AdminEmployeeList';
import AdminAddEmployee from './pages/AdminAddEmployee';

export default function App() {
  return (
    <>
      <h1>IL VEUT SE RENDRE POPULAIRE ! MOI, JE VAIS LE RENDRE IMPOPULAIRE !!</h1>
      <Routes>
        <Route path='/admin/employees' element={<AdminEmployeeList />} />
        <Route path='/admin/employee/add' element={<AdminAddEmployee />} />
      </Routes>
    </>
  );
}
