import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import CardCategory from "../components/CardCategory";
import { getFullName } from "../helpers/helpers";

const Home = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div
      className="w-full h-full flex flex-col items-center overflow-y-auto"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#4A5568 #2D3748",
      }}
    >
      <Navbar />
      <div className="w-[80%] flex flex-col mt-10  h-full ">
        <h1 className="font-bold lg:text-4xl text-white text-2xl">
          Bienvenido {getFullName(user.name, user.lastName)}
        </h1>
        <div className="flex flex-wrap justify-evenly lg:mt-20 mt-10">
          {user.idCourses.map((course) => (
            <CardCategory key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
