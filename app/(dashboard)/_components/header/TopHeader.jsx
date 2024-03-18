"use client";

import Link from "next/link";
import {
  FiMail,
  FiChevronDown,
  FiMenu,
  FiTrash2,
  FiArchive,
  FiShield,
  FiTag,
  FiFlag,
  FiPaperclip,
  FiClock,
  FiPrinter,
  FiMoreHorizontal,
  FiX,
} from "react-icons/fi";
import Icon from "../icon/Icon";
import { LiaBroomSolid } from "react-icons/lia";
import { BsFolderPlus } from "react-icons/bs";
import {
  PiArrowBendDoubleUpLeftLight,
  PiArrowBendUpLeftLight,
  PiArrowBendUpRightThin,
} from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { client } from "@/lib/appwrite";
import { useEffect, useState } from "react";

const TopHeader = () => {
  const [newMail, setNewMail] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = client.subscribe(
      `databases.${process.env.NEXT_PUBLIC_DATABASE_ID}.collections.${process.env.NEXT_PUBLIC_COLLECTION_ID}.documents`,
      (res) => {
        // Callback will be executed on changes for documents A and all files.
        if (
          res.events.includes("databases.*.collections.*.documents.*.create")
        ) {
          setIsVisible(true);
          setNewMail(res.payload);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const closeNotificationPan = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(closeNotificationPan);
  }, []);

  console.log(isVisible);
  return (
    <>
      <div className="w-[99.5%] min-h-20 bg-[--primary-bg] flex flex-col relative">
        <div className="h-[36px] w-full mx-auto bg-[--primary-bg] mb-[4px] items-center flex">
          <div className="flex items-center w-full gap-5 text-sm text-[--mail-text-color] font-[500]">
            <Link href="/" className="ml-1">
              <FiMenu className="w-10 h-6" />
            </Link>
            <Link href="/" className="border-b-[2px] border-[#69afe5]">
              Home
            </Link>
            <Link href="/">View</Link>
            <Link href="/">Help</Link>
          </div>
        </div>
        <div className="flex items-center gap-3 w-[99.5%] mx-auto bg-[--single-mail-bg] shadow-md  rounded-[5px]  p-[6px] ">
          <span className="flex items-center text-[#212121]">
            <Link href="/mail/new" className="flex items-center">
              <button className="btn flex items-center gap-3 bg-[#69afe5] hover:bg-[#77b7f7] transition-all delay-75 p-1 rounded-tl rounded-bl">
                <FiMail />
                New mail
              </button>
              <button className="btn flex gap-2 bg-[#69afe5] hover:bg-[#77b7f7] transition-all delay-75 p-2 rounded-tr rounded-br border-l-[0.1px] border-l-[#212121]">
                <FiChevronDown />
              </button>
            </Link>
          </span>
          <div className="flex items-center gap-[12px]">
            <Icon icon={<FiTrash2 />} text="Delete" />
            <Icon icon={<FiArchive />} text="Archive" />
            <Icon icon={<FiShield />} text="Report" />
            <Icon icon={<LiaBroomSolid />} text="Sweep" />
            <Icon icon={<BsFolderPlus />} text="Move to" />
            <span className="h-[30px] border border-[--border-color]"></span>
            <Icon icon={<PiArrowBendUpLeftLight />} />
            <Icon icon={<PiArrowBendDoubleUpLeftLight />} />
            <Icon icon={<PiArrowBendUpRightThin />} />
            <span className="h-[30px] border border-[--border-color]"></span>
            <Icon icon={<AiOutlineThunderbolt />} text="Quick steps" />
            <Icon icon={<IoMailOpenOutline />} text="Mark all as read" />
            <Icon icon={<FiTag />} />
            <Icon icon={<FiFlag />} />
            <Icon icon={<FiPaperclip />} />
            <Icon icon={<FiClock />} />
            <Icon icon={<FiArchive />} />
            <span className="h-[30px] border border-[--border-color]"></span>
            <Icon icon={<FiPrinter />} />
            <span className="h-[30px] border border-[--border-color]"></span>
            <Icon icon={<RiArrowGoForwardFill />} />
            <span className="h-[30px] border border-[--border-color]"></span>
            <Icon icon={<FiMoreHorizontal />} />
          </div>
        </div>
        {isVisible && (
          <div
            className="flex w-[300px] bg-[--seconday-bg] p-2 absolute top-3 right-0 z-20 rounded-md overflow-hidden border border-[--border-color]"
            onClick={() => setIsVisible(!isVisible)}
          >
            <Link href={`/mail/inbox/${newMail?.$id}`}>
              <div className="flex p-2 gap-3">
                <div className="mt-1">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="w-full flex flex-col leading-tight">
                  <span className="text-white font-[600] text-sm">
                    {newMail?.sender_email}
                  </span>
                  <span className="text-[--text-blue] font-[600] mb-[2px] text-sm">
                    {newMail?.subject?.substring(0, 20)}...
                  </span>
                  <span className="text-[rgba(255,255,255,0.8)] text-sm">
                    {newMail?.message_body?.substring(0, 30)}
                  </span>
                </div>
              </div>
            </Link>
            <FiX
              className="h-5 w-5 text-[--text-blue] absolute right-2 top-2 hover:text-white transition-all delay-75 hover:cursor-pointer"
              onClick={() => setIsVisible(!isVisible)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default TopHeader;
