import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { User } from "./components/User/User.jsx";
import { Player } from "./components/User/Player.jsx";

import "./index.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <User />
        <Player />
        <Footer />
      </div>
    </>
  );
}

export default App;
