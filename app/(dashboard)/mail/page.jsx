import Image from "next/image";
import defaultImage from "../../../public/assets/dark.svg";
const Inbox = () => {
  return (
    <>
      <div className=" text-white flex w-full">
        <div className="flex w-full items-center h-full  justify-center">
          <div className="w-full flex flex-col items-center -mt-[90px]">
            <h1 className="text-[rgba(255,255,255,0.6)] text-sm">
              Select an Item to read
            </h1>
            <Image
              src={defaultImage}
              width={250}
              height={200}
              alt="Select an Item to read"
            />
            <p className="text-[rgba(255,255,255,0.6)] text-sm">
              Nothing is selected
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
