// src/components/Navbar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, logOut } = useAuth();
  const { state } = useCart();
  const navigate = useNavigate();

  const active = ({ isActive }) =>
    isActive ? "font-bold text-white" : "text-white hover:text-gray-200";

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-400 p-4 flex justify-between">
      <NavLink to="/" className="text-xl font-bold text-white">Apex Shopy</NavLink>
      <div className="flex items-center gap-4">
        <NavLink to="/" className={active}>Home</NavLink>
        {user ? (
          <>
            <NavLink to="/products" className={active}>Products</NavLink>
            <NavLink to="/cart" className={active}>
              Cart ({state.items.length})
            </NavLink>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-600 rounded text-white hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={active}>Login</NavLink>
            <NavLink to="/signup" className={active}>Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}



