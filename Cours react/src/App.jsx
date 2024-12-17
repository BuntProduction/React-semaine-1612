import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { User } from "./components/User/User.jsx";

import "./index.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <User />
        <Footer />
      </div>
    </>
  );
}

export default App;
