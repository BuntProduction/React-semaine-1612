import { FirstName } from "./FirstName.jsx";
import { LastName } from "./LastName.jsx";

export function FullName() {
  return (
    <>
      <div>
        <FirstName />
        <LastName />
      </div>
    </>
  );
}
