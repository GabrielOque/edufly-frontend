import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../features/users/usersSlice.js";
import Spinner from "../components/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [isvisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(fetchLogin(data));
    reset();
  };

  const handleVisible = () => {
    setIsVisible(!isvisible);
  };

  useEffect(() => {
    // Redirige al usuario a la página de inicio después de un inicio de sesión exitoso
    if (status === "succeeded" && user?._id) {
      navigate("/home");
    }
  }, [status, user, navigate]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div className="lg:w-1/2 w-full  flex flex-col justify-center items-center rounded-xl bg-[#15161A] py-12">
        <img
          className="w-[500px] h-[300px] object-cover rounded-lg mb-4"
          src="https://edukame.com/sites/default/files/styles/articulo_completo/public/tranquilidad.jpg"
          alt="not render"
        />
        <h1 className="font-bold text-4xl lg:my-10 my-3 text-white">
          Bienvenido a EduFly
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:w-1/2 w-full lg:px-0 px-6 "
        >
          {/* register your input into the hook by invoking the "register" function */}
          <input
            placeholder="Correo electrónico"
            className="my-5 py-3 px-2 font-bold bg-[#1C1D23] text-[#9796AA] border-[#9796AA] rounded-md"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
            })}
          />

          {errors.email && (
            <span className="text-red-600  -mt-3">
              El correo es un campo equerido
            </span>
          )}

          {/* include validation with required or other standard HTML validation rules */}

          <div className="relative">
            <input
              type={isvisible ? "text" : "password"}
              autoComplete="off"
              placeholder="Contraseña"
              className="my-5 py-3 px-2 font-bold bg-[#1C1D23] text-[#9796AA] border-[#9796AA] rounded-md flex flex-row w-full"
              {...register("password", { required: true })}
            />
            {isvisible ? (
              <i
                className="cursor-pointer fas fa-eye absolute top-[27px] right-[10px] text-2xl text-[#9796AA]"
                onClick={handleVisible}
              />
            ) : (
              <i
                className="cursor-pointer fas fa-eye-slash absolute top-[27px] right-[10px] text-2xl text-[#9796AA]"
                onClick={handleVisible}
              />
            )}
          </div>

          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-red-600  -mt-3">
              La contraseña es un campo requerido
            </span>
          )}
          <button className="bg-[#191AE4] text-white py-2 px-2 rounded-lg my-5 font-bold flex justify-center items-center hover:bg-[#0E0F7C] hover:text-[#FFFFFF]">
            {status === "loading" ? <Spinner /> : "Iniciar sesión"}
          </button>

          {error && <span className="text-red-600">{error}</span>}
          {!user?._id && <span className="text-green-600">{user.message}</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
