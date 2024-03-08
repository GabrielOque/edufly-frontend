import React from "react";
import { getFullName } from "../helpers/helpers";

const CardComment = ({ comment }) => {
  return (
    <div className="ml-3 mb-5 flex">
      <img className="w-10 h-10 rounded-full mr-3" src={comment.avatarUser} />

      <div>
        <h2 className="font-bold text-xl">
          {getFullName(comment.nameUser, comment.lastNameUser)}
        </h2>
        <p className="text-[#9796AA] pl-3 pt-1">{comment.comment}</p>
      </div>
    </div>
  );
};

export default CardComment;
