import React from "react";
import { useNavigate } from "react-router-dom";

const CardCategory = ({ course }) => {
  const navigate = useNavigate();
  const handlePageCategory = () => {
    navigate(`/category/${course.name}/${course._id}`);
  };
  return (
    <div
      className="w-[250px] text-white cursor-pointer mx-2 my-6 transition-transform transform-gpu hover:scale-105"
      onClick={handlePageCategory}
    >
      <p className="text-white font-bold mb-2 text-xl">{course.name}</p>
      <img className="object-contain rounded-xl" src={course.image} />

      <p className="mt-2">{course.summary}</p>
      <div className="w-full text-start font-bold">
        <p className="mt-2 font-bold">{course.quantitylessons} Lecciones</p>
        <p>Profesor {course.teacher}</p>
      </div>
    </div>
  );
};

export default CardCategory;
