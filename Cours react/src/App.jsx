import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { User } from "./components/User/User.jsx";
import { Player } from "./components/User/Player.jsx";
import { Routine } from "./components/Routine.jsx";

import "./index.css";

function App() {
  const userFirstName = "Gatien";
  const userLastName = "Bigaré";
  const userHobbies = [
    { id: "1", nom: "Sport" },
    { id: "2", nom: "Art" },
    { id: "3", nom: "Gaming" },
  ];

  return (
    <>
      <div>
        <Header />
        <User
          firstName={userFirstName}
          lastName={userLastName}
          hobbies={userHobbies}
        />
        <Player />
        <Routine />
        <Footer />
      </div>
    </>
  );
}

export default App;
