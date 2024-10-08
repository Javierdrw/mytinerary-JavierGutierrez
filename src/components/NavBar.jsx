import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { IoPersonSharp } from "react-icons/io5";

const routes = [
  { to: "/", text: "Home" },
  { to: "/Cities", text: "Cities" },
  { to: "/logo", text: "login" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="bg-neutral-900/80 h-full grid grid-cols-3 py-2 px-6">
      <NavLink to="/">
        <h1 className="text-3xl text-white font-bold w-fit  mt-4 hover:underline">
        My Tinerary
        </h1>
      </NavLink>
      <NavLink to="/">
        <img src={logo} alt="Logo" className="h-[12vh] rounded-full mx-auto" />
      </NavLink>

     
      <button onClick={toggleMenu} className="text-white text-3xl lg:hidden">
        &#9776;
      </button>

      
      <ul
        className={`lg:flex gap-4 lg:mr-2 items-center my-auto justify-end text-white text-xl font-bold absolute lg:static top-[126px] left-0 w-full bg-neutral-900/80 lg:bg-transparent transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0 lg:max-h-[500px]"
        }`}
      >
        {routes.map((r, index) => (
          <li key={index} className="p-3">
            <NavLink
              to={r.to}
              className={({ isActive }) =>
                r.text === "login"
                  ? "bg-blue-500 text-white px-4 py-2 w-fit transition-all duration-300 ease-in-out rounded hover:bg-blue-700 flex items-center"
                  : isActive
                  ? "text-red-600 hover:underline"
                  : "hover:underline"
              }
            >
              {r.text === "login" ? (
                <>
                  <IoPersonSharp className="mr-2" />
                  {r.text}
                </>
              ) : (
                r.text
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}