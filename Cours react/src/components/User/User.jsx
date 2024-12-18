import { Hobbies } from "./Hobbies.jsx";
import { FullName } from "./FullName.jsx";

export function User({ firstName, lastName, hobbies }) {
  return (
    <>
      <div>
        <FullName firstName={firstName} lastName={lastName} />
        <Hobbies hobbies={hobbies} />
      </div>
    </>
  );
}
