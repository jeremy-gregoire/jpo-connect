import { Link, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/index">Home</Link>
          </li>
          <li>
            <Link to="/register">S'inscrire</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
