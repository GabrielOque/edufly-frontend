import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/users/usersSlice";
import { useDispatch } from "react-redux";
import Menu from "../components/Manu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full border-b-1 text-white relative">
      <nav className="w-full border-b border-white py-5 px-10 flex justify-between">
        <ul className="flex justify-between items-center lg:w-2/3">
          <li className="font-bold text-2xl">
            <i className="fas fa-user-graduate text-white mr-3" />
            <Link to="/home">EduFly</Link>
          </li>
        </ul>
        <div className="lg:block hidden lg:w-1/3">
          <ul className="flex justify-between items-center  text-2xl">
            <li>
              <Link to="/certifications/">Certificaciones</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Cerrar sesion</button>
            </li>

            <li>
              <img
                className="w-20 h-20 -my-3 object-contain rounded-full"
                src={user.avatar}
              />
            </li>
          </ul>
        </div>
        <div onClick={handleToggle}>
          <i className="fas fa-bars text-2xl lg:hidden block" />
        </div>
      </nav>
      {toggle && <Menu handleLogout={handleLogout} />}
    </div>
  );
};

export default Navbar;
