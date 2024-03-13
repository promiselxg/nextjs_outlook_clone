import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { FiX } from "react-icons/fi";

const SuggestedContacts = () => {
  return (
    <>
      <h1 className="text-[12px] px-2 py-2 text-[--mail-text-color] font-[300] ">
        Suggested contacts
      </h1>
      <ul className="flex text-[--mail-text-color] text-[14px] font-[200] items-center min-h-max flex-col">
        <li className="flex gap-2 items-center hover:bg-[--seconday-bg] hover:cursor-pointer w-full p-1 rounded-md relative">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-[1]">
            <span>Anuforo Okechukwu</span>
            <span>okeydeede@gmail.com</span>
          </div>
          <FiX className="absolute  right-3 h-4 w-4 text-[--text-blue] closeBtn" />
        </li>
        <li className="flex gap-2 items-center hover:bg-[--seconday-bg] hover:cursor-pointer w-full p-1 rounded-md relative">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-[1]">
            <span>Anuforo Okechukwu</span>
            <span>okeydeede@gmail.com</span>
          </div>
          <FiX className="absolute  right-3 h-4 w-4 text-[--text-blue] closeBtn" />
        </li>
      </ul>
    </>
  );
};

export default SuggestedContacts;
