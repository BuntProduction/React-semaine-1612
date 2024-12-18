export function Hobbies({ hobbies }) {
  return (
    <ul>
      {hobbies.map((hobby) => (
        <li key={hobby.id}>{hobby.nom}</li>
      ))}
    </ul>
  );
}
