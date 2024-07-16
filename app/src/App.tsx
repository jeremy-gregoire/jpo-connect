import { Routes, Route } from 'react-router-dom';
import AdminOpendayList from './pages/AdminOpendayList';
import AdminAddOpenday from './pages/AdminAddOpenday';
import AdminModifyOpenday from './pages/AdminModifyOpenday';

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<h1>IL VEUT SE RENDRE POPULAIRE ! MOI, JE VAIS LE RENDRE IMPOPULAIRE !!</h1>}
        />
        <Route path='/admin/opendays' element={<AdminOpendayList />} />
        <Route path='/admin/openday/add' element={<AdminAddOpenday />} />
        <Route path='/admin/openday/:id/modify' element={<AdminModifyOpenday />} />
      </Routes>
    </>
  );
}
