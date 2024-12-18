// exercice onclick
export function Routine() {
  const handleEatClick = () => {
    alert("Clic sur manger !");
  };

  const handleSleepClick = () => {
    alert("Clic sur dormir !");
  };

  const handleStudyClick = () => {
    alert("Clic sur étudier !");
  };

  return (
    <div>
      <button onClick={handleEatClick}>Manger</button>
      <button onClick={handleSleepClick}>Dormir</button>
      <button onClick={handleStudyClick}>Etudier</button>
    </div>
  );
}
