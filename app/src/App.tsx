import { Routes, Route } from 'react-router-dom';
import AdminOpendayList from './pages/AdminOpendayList';

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<h1>IL VEUT SE RENDRE POPULAIRE ! MOI, JE VAIS LE RENDRE IMPOPULAIRE !!</h1>}
        />
        <Route path='/admin/jpo-manager' element={<AdminOpendayList />} />
      </Routes>
    </>
  );
}
