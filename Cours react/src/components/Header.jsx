import classes from "./Header.module.css";

export function Header() {
  console.log(classes);
  return (
    <header className={classes.container}>
      <h1>Site de test cours react</h1>
    </header>
  );
}
