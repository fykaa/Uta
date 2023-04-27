import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="bg-bgPrimary w-screen h-screen flex flex-col items-center justify-center space-y-20">
      <div className="flex items-center justify-evenly w-full ">
        <div className="font-display text-4xl font-bold">Get Started!</div>
        <div className="font-display text-7xl font-bold">Uta</div>
      </div>
      <div className="flex flex-col items-center  justify-center space-y-8">
        <div className="w-1/2 font-display text-2xl font-medium">
          <div>ARE YOU A MUSICIAN?</div>
          <div>
            THIS IS YOUR STOP TO MATCH WITH INSTRUMENTALIST, MUSICIANS, SINGERS
            AND MORE! (Anonymously)
          </div>
        </div>
        <div className="w-1/2  ">
          <Link to="/find">
            <button className="text-white bg-buttonBg rounded-xl hover:text-buttonBg hover:bg-white p-2 px-3">
              Find Your Music Match
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
