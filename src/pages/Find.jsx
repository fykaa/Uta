import React from "react";

const Find = () => {
  return (
    <div>
      <div className="bg-bgPrimary w-screen h-screen flex flex-col items-center justify-center space-y-20 ">
        <div className="flex items-center justify-end w-1/2">
          <div className="font-display text-7xl font-bold">Uta</div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="w-2/3 font-display text-3xl font-medium">
            <div>Find people to sing/play/hangout OR create a band with;</div>
          </div>
          <div className="w-1/2  space-x-16">
            <button className="text-white bg-buttonBg rounded-xl hover:text-buttonBg hover:bg-white p-2 px-5">
              Singers
            </button>

            <button className="text-white bg-buttonBg rounded-xl hover:text-buttonBg hover:bg-white p-2 px-6">
              Instrumentalist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
