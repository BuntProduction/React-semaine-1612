import React, { useState, useEffect } from "react";

const RECUPERER_PERSOS = "https://thronesapi.com/api/v2/Characters";

async function getPersonnages() {
  try {
    const reponse = await fetch(RECUPERER_PERSOS);
    const data = await reponse.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des personnages :", error);
    return [];
  }
}

export function GOT() {
  const [persos, setPersos] = useState([]);

  useEffect(() => {
    getPersonnages().then((personnages) => {
      setPersos(personnages);
    });
  }, []);

  return (
    <div>
      <h2>Persos de GOT</h2>
      {persos.map((personnage) => {
        return (
          <div key={personnage.id}>
            <h3>{personnage.fullName}</h3>
            <img src={personnage.imageUrl} alt={personnage.fullName} />
            <p>{personnage.title}</p>
          </div>
        );
      })}
    </div>
  );
}
