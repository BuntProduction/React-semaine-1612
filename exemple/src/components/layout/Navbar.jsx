// for tailwind : https://nerdcave.com/tailwind-cheat-sheet
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 p-6 flex justify-between items-center">
      <div className="text-xl font-bold">
        <NavLink to="/">Accueil</NavLink>
      </div>
      <ul className="flex space-x-5">
        <li className="hover:cursor-pointer hover:text-gray-300">Accueil</li>
        <li className="hover:cursor-pointer hover:text-gray-300">À propos</li>
        <li className="hover:cursor-pointer hover:text-gray-300">Contact</li>
      </ul>
    </nav>
  );
}
