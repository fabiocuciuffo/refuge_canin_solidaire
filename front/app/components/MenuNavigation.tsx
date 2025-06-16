import { Link } from "react-router";

const MenuNavigation = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center rounded-none">
      <Link to="/" className="text-2xl font-bold text-blue-700">
        Refuge Canin Solidaire
      </Link>
      <ul className="flex space-x-8">
        <li>
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/ressources"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            Ressources
          </Link>
        </li>
        <li>
          <Link
            to="/adoptions"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            Adoption
          </Link>
        </li>
        <li>
          <Link
            to="/a-propos"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNavigation;
