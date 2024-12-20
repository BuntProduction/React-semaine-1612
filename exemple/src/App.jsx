import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // cf https://www.w3schools.com/react/react_router.asp
import { Navbar } from "./components/layout/Navbar.jsx";

function PageAccueil() {
  return (
    <main>
      <h1>Test</h1>
    </main>
  );
}

function PageApropos() {
  return (
    <main>
      <h1>Page</h1>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/about" element={<PageApropos />} />
      </Routes>
    </Router>
  );
}

export default App;
