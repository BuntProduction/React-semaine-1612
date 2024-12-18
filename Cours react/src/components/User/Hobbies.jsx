import { useState } from "react";

export function Hobbies() {
  const [hobbies, setHobbies] = useState([
    { id: "1", nom: "Art" },
    { id: "2", nom: "Sport" },
  ]);

  const [newHobby, setNewHobby] = useState("");

  const handleInputChange = (event) => {
    setNewHobby(event.target.value);
  };

  const handleAddHobby = () => {
    if (newHobby.trim() === "") {
      alert("Champ pas bon");
      return;
    }

    const newHobbyObject = {
      id: Date.now().toString(),
      nom: newHobby.trim(),
    };
    setHobbies((prevHobbies) => [...prevHobbies, newHobbyObject]);
    setNewHobby("");
  };

  return (
    <div>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.nom}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newHobby}
        onChange={handleInputChange}
        placeholder="Ajouter un hobby"
      />
      <button onClick={handleAddHobby}>Ajouter</button>
    </div>
  );
}
