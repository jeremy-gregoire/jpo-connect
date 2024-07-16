import { Link, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">S'inscrire</Link>
          </li>
          <li>
            <Link to="/">Se Connecter</Link>
          </li>
          <li>
            <Link to="/">Profil</Link>
          </li>
          <li>
            <Link to="/">Ajouter JPO</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}
