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

const TopHeader = () => {
  return (
    <>
      <div className="w-[99.5%] min-h-20 bg-[--primary-bg] flex flex-col">
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
            <button className="btn flex items-center gap-3 bg-[#69afe5] hover:bg-[#77b7f7] transition-all delay-75 p-1 rounded-tl rounded-bl">
              <FiMail />
              New mail
            </button>
            <button className="btn flex gap-2 bg-[#69afe5] hover:bg-[#77b7f7] transition-all delay-75 p-2 rounded-tr rounded-br border-l-[0.1px] border-l-[#212121]">
              <FiChevronDown />
            </button>
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
      </div>
    </>
  );
};

export default TopHeader;
