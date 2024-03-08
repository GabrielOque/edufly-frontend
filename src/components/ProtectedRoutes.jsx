import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const { user, status } = useSelector((state) => state.user);
  const [userLoaded, setUserLoaded] = useState(false);

  if (!user?._id) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    return <Navigate to="/login" replace />;
  }

  // Si el usuario está autenticado y completamente cargado, renderiza el contenido protegido
  return <Outlet />;
};

export default ProtectedRoutes;
