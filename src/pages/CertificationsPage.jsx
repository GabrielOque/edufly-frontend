import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import CardCertifications from "../components/CardCertifications";

const CertificationsPage = () => {
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
        <h2 className="text-white font-bold text-xl">EduFly / Certificados</h2>
        <div className="mt-7 font-bold text-white">
          <div className="mt-7 w-full lg:flex lg:justify-start">
            {user.certifications.map((certification) => (
              <div
                className="flex flex-wrap justify-center items-center w-full"
                key={certification._id}
              >
                <CardCertifications
                  key={certification._id}
                  certification={certification}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
