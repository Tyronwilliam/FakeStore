import React from "react";

function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex-col items-center justify-center">
        <div>
          <h1 className="text-center text-black text-lg ">
            Welcome To The FakeStore
          </h1>
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="w-[500px] rounded-full h-[10px] bg-gray-400">
            <div className="h-[10px] bg-orange-500 rounded-full progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
