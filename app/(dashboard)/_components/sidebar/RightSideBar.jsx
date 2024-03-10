import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { IoCopyOutline } from "react-icons/io5";
import { GoFilter } from "react-icons/go";
import SingleMail from "../../mail/_components/mail/SingleMail";
import { ScrollArea } from "@/components/ui/scroll-area";

const RightSideBar = () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center justify-between h-12 px-2 bg-[--single-mail-bg] mt-2 rounded-t-[5px]">
          <div className="flex w-[20%] text-center justify-center">
            <Checkbox className="h-6 w-6 hidden" />
          </div>
          <div className="flex items-center justify-between  w-[80%] text-white font-[600]">
            <div className="flex gap-3 items-center">
              <Link
                href="/"
                className="leading-10 h-10 border-b-[2px] border-[#69afe5] hover:rounded-sm hover:bg-[--primary-bg] hover:px-2 px-2 transition-all delay-75"
              >
                Focused
              </Link>
              <Link
                href="/"
                className="leading-10 h-10 hover:bg-[--primary-bg] hover:px-2 px-2 transition-all delay-75 hover:rounded-sm"
              >
                Other
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <IoCopyOutline className="h-6 w-6 hover:bg-[--primary-bg] p-[4px] rounded-sm" />
              <GoFilter className="h-6 w-6 hover:bg-[--primary-bg] p-[4px] rounded-sm" />
            </div>
          </div>
        </div>
        <ScrollArea className="w-full h-[600px] bg-[--single-mail-bg]">
          <div>
            <SingleMail />
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default RightSideBar;
