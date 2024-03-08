import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import CardDetail from "../components/CardDetail";
import CardComment from "../components/CardComment";
import {
  fetchComments,
  getCommentsByLesson,
} from "../features/comments/commentsSlice";
import { fetchCertificate } from "../features/users/usersSlice";

const ContentDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { lessons } = useSelector((state) => state.lesson);
  const { comments, status } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { id, name } = useParams();
  const lesson = lessons.find((lesson) => lesson._id === id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let comment = {
      comment: data.comment,
      idLesson: id,
      idUser: user._id,
      nameUser: user.name,
      lastNameUser: user.lastName,
      avatarUser: user.avatar,
    };
    dispatch(fetchComments(comment));
    reset();
  };

  useEffect(() => {
    dispatch(getCommentsByLesson(id));
  }, []);

  const handleCertificate = () => {
    let data = {
      idUser: user._id,
      titleCourse: name,
    };

    dispatch(fetchCertificate(data));
    setIsVisible(true);
  };

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
          <div className="mt-7 w-full lg:flex lg:justify-start">
            <iframe
              className="h-[300px] w-[100%] lg:h-[500px] lg:w-[50%]"
              src={lesson?.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="lg:w-[50%]  text-white ml-0 lg:ml-5 lg:mt-0 mt-3">
              <h2 className="lg:ml-3 ml-0 mb-4 font-bold text-3xl">
                Comentarios
              </h2>
              <div
                className="lg:max-h-[380px] lg:min-h-[380px] min-h-[200px] max-h-[200px] overflow-y-auto overflow-x-hidden"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#4A5568 #2D3748",
                }}
              >
                {status === "loading" ? (
                  <p>Cargando...</p>
                ) : (
                  comments.map((comment) => (
                    <CardComment key={comment._id} comment={comment} />
                  ))
                )}
                {comments.length === 0 && (
                  <div className="flex justify-center items-center w-full h-[100px] ">
                    <i className="fa-solid fa-comment-slash text-3xl mr-3" />
                    <p className="font-bold text-3xl">
                      No hay comentarios para este comentarios
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full ml-0 lg:ml-3 pr-5 relative">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    placeholder="Escribir un comentario"
                    className="my-5 py-3 px-2 font-bold bg-[#1C1D23] text-[#9796AA] border-[#9796AA] rounded-md w-full "
                    {...register("comment", {
                      required: true,
                    })}
                  />

                  <button>
                    <i className="fa-solid fa-paper-plane absolute text-[#9796AA] text-xl top-[30px] right-[30px] cursor-pointer" />
                  </button>

                  {errors.comment && (
                    <span className="text-red-600  -mt-3">
                      Escribe algo para comentar
                    </span>
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="w-full content-center mt-8 ">
            {lessons.map((lesson) => (
              <div key={lesson._id}>
                <div
                  className={lesson._id === id ? "bg-[#272730] px-3 " : "px-3"}
                >
                  <CardDetail lessons={lesson} nameCourse={name} />
                </div>
              </div>
            ))}
          </div>
          <div className="mb-10 flex  items-center">
            <button
              onClick={handleCertificate}
              className="bg-[#3E8BFF] text-white font-bold py-2 px-5 rounded-md"
            >
              Certifica este curso
            </button>
            <div className="opacity-0">
              {setTimeout(() => {
                setIsVisible(false);
              }, 2000)}
            </div>
            {isVisible && (
              <div className="flex">
                <i className="fa-solid fa-check text-2xl mr-2" />
                <p className="text-white font-bold text-2xl lg:block hidden">
                  Ver en certificaciones
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ContentDetails;
