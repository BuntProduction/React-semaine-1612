export function Player() {
  const score = 400;
  let result;
  if (score <= 500) {
    result = "Perdant";
  } else {
    result = "Vainqueur";
  }
  return (
    <div>
      {result}
      <p>Voici le score : {score}</p>
      <p>
        Avec un opérateur ternaire : {score <= 500 ? "Perdant" : "Vainqueur"}
      </p>
    </div>
  );
}
