import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCommentsByLesson } from "../features/comments/commentsSlice";

const CardDetail = ({ lessons, nameCourse }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleContent = () => {
    dispatch(getCommentsByLesson(lessons._id));
    navigate(`/content/${lessons._id}/${nameCourse}`);
  };

  return (
    <div className="flex w-full justify-between mb-10">
      <div className="py-2">
        <p className="text-xl font-bold mb-1">{lessons.title}</p>
        <p className="text-[#9796AA]">{lessons.description}</p>
        <p className="text-[#9796AA]">{lessons.time} minutos</p>
      </div>
      <div className="py-7 flex">
        <i
          className="fas fa-play text-3xl cursor-pointer "
          onClick={handleContent}
        />
      </div>
    </div>
  );
};

export default CardDetail;
