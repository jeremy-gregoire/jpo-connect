import { Routes, Route } from 'react-router-dom';
import AdminOpendayList from './pages/AdminOpendayList';
import AdminAddOpenday from './pages/AdminAddOpenday';

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<h1>IL VEUT SE RENDRE POPULAIRE ! MOI, JE VAIS LE RENDRE IMPOPULAIRE !!</h1>}
        />
        <Route path='/admin/openday-manager' element={<AdminOpendayList />} />
        <Route path='/admin/openday-manager-add' element={<AdminAddOpenday />} />
      </Routes>
    </>
  );
}
