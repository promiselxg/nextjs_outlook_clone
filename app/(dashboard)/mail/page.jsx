import Image from "next/image";
import defaultImage from "../../../public/assets/dark.svg";
import { FiChevronDown, FiTrash2, FiTwitch } from "react-icons/fi";
import Icon from "../_components/icon/Icon";
import { Button } from "@/components/ui/button";
const Inbox = () => {
  return (
    <>
      <div className=" text-white  w-full hidden">
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
      <div className="flex w-full px-2">
        <div className="w-full bg-[--single-mail-bg] mt-2  rounded-t-[5px]">
          <div className="w-full min-h-10  p-3 items-center flex justify-between  border-[--mail-border] border-b-[1px]">
            <div className="flex items-center text-[#212121]">
              <button className="btn flex items-center gap-3 bg-[#69afe5]  p-[6px] rounded-tl rounded-bl">
                Send
              </button>
              <button className="btn flex gap-2 bg-[#69afe5]  p-[10px] rounded-tr rounded-br border-l-[0.1px] border-l-[#212121]">
                <FiChevronDown />
              </button>
            </div>
            <div className="flex items-center gap-5">
              <Icon icon={<FiTrash2 />} />
              <Icon icon={<FiTwitch />} />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="w-full flex gap-2 mb-2">
              <Button className="bg-transparent flex gap-2 items-center hover:bg-[--active-mail-bg] hover:text-[--unread-mail-border-bg] transition-all delay-75 border-[1px] border-[--mail-border] h-9 w-16">
                To
              </Button>
              <input
                type="text"
                name=""
                id=""
                className="bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[--search-box-border] text-sm"
              />
            </div>
            <div className="w-full flex gap-2">
              <Button className="bg-transparent flex gap-2 items-center hover:bg-[--active-mail-bg] hover:text-[--unread-mail-border-bg] transition-all delay-75 border-[1px] border-[--mail-border] h-9 w-16">
                Cc
              </Button>
              <input
                type="text"
                name=""
                id=""
                className="bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[--search-box-border] text-sm"
              />
            </div>
          </div>
          <div className="w-full flex gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="Add a subject"
              className="bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[rgba(255,255,255,0.8)] p-3"
            />
          </div>
          <div className="w-full flex gap-2">
            <textarea
              type="text"
              name=""
              id=""
              placeholder="Add a subject"
              className="bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[rgba(255,255,255,0.8)] p-3 h-screen"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
