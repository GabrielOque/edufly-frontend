import React, { useEffect } from "react";
import CardDetail from "../components/CardDetail";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchLesson } from "../features/lesson/lessonSlice";

const ContentCategory = () => {
  const dispatch = useDispatch();
  const { lessons } = useSelector((state) => state.lesson);
  const { name, id } = useParams();

  useEffect(() => {
    dispatch(fetchLesson(id));
  }, []);
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
        <h2 className="text-white font-bold text-xl">Curso / {name}</h2>
        <div className="mt-7 font-bold text-white">
          <h2 className="font-bold text-xl">Lecciones</h2>
          <div className="mt-7">
            {lessons.map((lesson) => (
              <CardDetail key={lesson._id} lessons={lesson} nameCourse={name} />
            ))}
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ContentCategory;
