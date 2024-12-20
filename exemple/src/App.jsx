import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
    <Routes>
      <Route path="/" element={<PageAccueil />} />
      <Route path="/about" element={<PageApropos />} />
    </Routes>
  );
}

export default App;
