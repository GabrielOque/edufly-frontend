import React from "react";
import { useSelector } from "react-redux";

const CardCertifications = ({ certification }) => {
  const { user } = useSelector((state) => state.user);
  const { name, lastName } = user;
  return (
    <div className="w-full flex justify-center text-black mb-8">
      <div className="lg:w-2/3 w-full rounded-lg bg-white flex flex-col justify-center items-center py-5">
        <h2 className="font-bold text-4xl pb-8 text-center">
          CERTIFICADO DE {certification.titleCourse}
        </h2>
        <h3 className="pb-8">ESTE DOCUMENTO CERTIFICA QUE</h3>
        <p className="pb-1">
          {name} {lastName}
        </p>
        <h3 className="pb-8 text-center">
          HA COMPLETADO SATISFACTORIAMENTE EL CURSO DE
          {certification.titleCourse}
        </h3>
        <i className="fa-solid fa-medal text-[150px]" />
      </div>
    </div>
  );
};

export default CardCertifications;
