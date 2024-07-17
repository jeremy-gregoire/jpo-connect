import NavBar from "../assets/components/header";
import Footer from "../assets/components/footer";

import '../assets/styles/app.css';

export default function App() {
  return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <div className="App">
        <Footer />
      </div>
    </>
  );
}
