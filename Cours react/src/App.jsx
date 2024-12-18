import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { User } from "./components/User/User.jsx";
import { Player } from "./components/User/Player.jsx";
import { Routine } from "./components/Routine.jsx";
import { Menu } from "./components/Menu.jsx";

import "./index.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <User />
        <Player />
        <Routine />
        <Footer />
        <Menu />
      </div>
    </>
  );
}

export default App;
