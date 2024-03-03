import { FishIcon, SearchIcon } from "lucide-react";
import { LuGrip } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { BiBell, BiBulb, BiConversation } from "react-icons/bi";
import { LuCalendarCheck2, LuMailCheck, LuFolderCog } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Searchbar = () => {
  return (
    <>
      <div className="flex w-full text-white bg-[--seconday-bg] items-center h-[50px]">
        <div className="hover:bg-[--text-gray] hover:cursor-pointer transition-all delay-75 flex p-3 w-fit h-[50px] items-center">
          <LuGrip className="text-[--text-gray-500] h-5 w-5" />
        </div>
        <div className="flex w-1/6">
          <h1 className=" font-[500] text-[--text-blue] ml-2">Outlook</h1>
        </div>
        <div className="w-2/4 ">
          <div className="w-[40%] flex items-center bg-[--text-gray] border border-[--search-box-border] rounded-[7px] h-[30px]">
            <SearchIcon className="h-4 w-4 ml-2 text-[rgba(255,255,255,0.7)]" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="w-[40%] bg-transparent outline-none border-none ml-[4px] text-[14px] text-white placeholder:text-[rgba(255,255,255,0.7)]"
            />
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-end">
          <ul className="flex items-center gap-2">
            <li className="h-[50px] flex items-center hover:bg-[--text-gray] px-3 hover:cursor-pointer transition-all delay-75">
              <BiConversation className="text-[--search-box-border]" />
            </li>
            <li className="h-[50px] flex items-center hover:bg-[--text-gray] px-3 hover:cursor-pointer transition-all delay-75">
              <LuCalendarCheck2 className="text-[--search-box-border]" />
            </li>
            <li className="h-[50px] flex items-center hover:bg-[--text-gray] px-3 hover:cursor-pointer transition-all delay-75">
              <LuFolderCog className="text-[--search-box-border]" />
            </li>
            <li className="h-[50px] flex items-center hover:bg-[--text-gray] px-3 hover:cursor-pointer transition-all delay-75">
              <BiBell className="text-[--search-box-border]" />
            </li>
            <li className="h-[50px] flex items-center hover:bg-[--text-gray] px-3 hover:cursor-pointer transition-all delay-75">
              <FiSettings className="text-[--search-box-border]" />
            </li>
            <li className="h-[50px] flex items-center hover:bg-[--text-gray] px-3 hover:cursor-pointer transition-all delay-75">
              <BiBulb className="text-[--search-box-border]" />
            </li>
            <li className="h-[50px] px-2 flex items-center hover:bg-[--text-gray] hover:cursor-pointer transition-all delay-75">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
