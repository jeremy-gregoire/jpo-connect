import { Route, Routes } from 'react-router-dom';
import AdminEmployeeList from './pages/AdminEmployeeList';
import AdminAddEmployee from './pages/AdminAddEmployee';
import AdminDeleteConfirmationEmployee from './pages/AdminDeleteConfirmationEmployee';
import AdminOpendayList from './pages/AdminOpendayList';
import AdminAddOpenday from './pages/AdminAddOpenday';
import AdminModifyOpenday from './pages/AdminModifyOpenday';
import AdminDeleteConfirmationOpenday from './pages/AdminDeleteConfirmationOpenday';

import NavBar from '../assets/components/header';
import Footer from '../assets/components/footer';

import '../assets/styles/app.css';

export default function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
      </div>
      <Routes>
        <Route
          path='/'
          element={<h1>IL VEUT SE RENDRE POPULAIRE ! MOI, JE VAIS LE RENDRE IMPOPULAIRE !!</h1>}
        />
        <Route path='/admin/opendays' element={<AdminOpendayList />} />
        <Route path='/admin/openday/add' element={<AdminAddOpenday />} />
        <Route path='/admin/openday/:id/modify' element={<AdminModifyOpenday />} />
        <Route path='/admin/openday/:id/delete' element={<AdminDeleteConfirmationOpenday />} />
        <Route path='/admin/employees' element={<AdminEmployeeList />} />
        <Route path='/admin/employee/add' element={<AdminAddEmployee />} />
        <Route path='/admin/employee/:id/delete' element={<AdminDeleteConfirmationEmployee />} />
      </Routes>
      <div className='App'>
        <Footer />
      </div>
    </>
  );
}
