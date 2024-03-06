import React from "react";
import RightSideBar from "../../_components/sidebar/RightSideBar";

const page = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-[26%]">
          <RightSideBar />
        </div>
        <div className="bg-[red] text-white flex w-[74%]">
          <h1>draft box</h1>
        </div>
      </div>
    </>
  );
};

export default page;
