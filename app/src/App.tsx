import { Link, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Profil from "./pages/Profil";
import Home from "./pages/Home";
import Footer from "../assets/components/footer";

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/register">S'inscrire</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

      <div className="App">
        {/* Autres composants de ton application */}

        <Footer />
      </div>
    </>
  );
}
