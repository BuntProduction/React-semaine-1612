import { FirstName } from "./FirstName.jsx";
import { LastName } from "./LastName.jsx";

export function FullName({ firstName, lastName }) {
  return (
    <>
      <div>
        <FirstName firstName={firstName} />
        <LastName lastName={lastName} />
      </div>
    </>
  );
}
