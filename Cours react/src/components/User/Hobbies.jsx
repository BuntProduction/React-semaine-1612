export function Hobbies() {
  const hobbiesFromDB = [
    {
      id: "test",
      nom: "testNom",
    },
    {
      id: "test2",
      nom: "testNom2",
    },
  ];
  return (
    <ul>
      {hobbiesFromDB.map((hobby) => {
        return <li key={hobby.id}>{hobby.nom}</li>;
      })}
    </ul>
  );
}
