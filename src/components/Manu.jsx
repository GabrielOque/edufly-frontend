import React from "react";
import { Link } from "react-router-dom";

const Manu = ({ handleLogout }) => {
  return (
    <div className="w-full h-40 absolute right-0 flex flex-col items-start bg-[#0C0C10]">
      <ul className="mt-3  ml-10">
        <li className="font-bold text-2xl mb-5">
          <i className="fa-solid fa-medal text-2xl mr-3" />
          <Link to="/certifications/">Certificaciones</Link>
        </li>
        <li className="font-bold text-2xl">
          <i className="fa-solid fa-person-running text-3xl mr-3" />
          <button onClick={handleLogout}>Cerrar sesion</button>
        </li>
      </ul>
    </div>
  );
};

export default Manu;
