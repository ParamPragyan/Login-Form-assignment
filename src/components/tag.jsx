import React from "react";
import github from "../assets/github.svg";

const tag = () => {
  return (
    <div className=" fixed bottom-0 flex justify-center items-center w-full">
      <div className="flex justify-center gap-2 p-3 items-center">
        <div className="font-normal">
          made by <span className="font-bold">Param Pragyan</span>
        </div>
        <div className="icon">
            <a href="https://github.com/ParamPragyan" target="_blank">
            <img className="w-10" src={github} alt="" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default tag;
