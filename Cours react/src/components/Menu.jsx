import { useState } from "react";

export function Menu() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        {isMenuVisible ? "Cacher le menu" : "Afficher le menu"}
      </button>
      {isMenuVisible ? (
        <ul>
          <li>Nourrir le chien</li>
          <li>Faire mes devoirs</li>
          <li>React</li>
        </ul>
      ) : null}
    </div>
  );
}
