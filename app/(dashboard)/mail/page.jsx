import RightSideBar from "../_components/sidebar/RightSideBar";

const Inbox = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <div className="w-[26%]">
          <RightSideBar />
        </div>
        <div className=" text-white flex w-[74%]">
          <h1>mail box</h1>
        </div>
      </div>
    </>
  );
};

export default Inbox;
