import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { FiFlag, FiMail, FiTrash2 } from "react-icons/fi";
import { GrPin } from "react-icons/gr";
import "./SingleMail.css";
import Link from "next/link";

const SingleMail = () => {
  return (
    <>
      <div className="flex w-[99%] min-h-[90px] items-center hover:bg-[--primary-bg] border-t-[1px] border-[--mail-border] border-b-[1px] relative singleMail">
        <Link href="/mail/inbox/11111oaiapa">
          <div className="flex p-2 gap-3">
            <div className="mt-1">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="w-full flex flex-col leading-tight">
              <span className="text-white font-[600] text-[15px]">
                Internal communication
              </span>
              <span className="text-[--text-blue] font-[600] mb-[2px] text-sm">
                Join us today- Night of T...{" "}
              </span>
              <span className="text-[rgba(255,255,255,0.8)] text-sm">
                Dear colleague, thank you for y...
              </span>
            </div>
          </div>
          <div className="absolute top-0 h-full p-[4px] right-0 flex items-center mailDeleteBtn hover:bg-[rgba(239,109,109,0.2)] hover:text-white">
            <FiTrash2 className="w-5 h-5 text-[rgba(255,255,255,0.4)] trash" />
          </div>
          <div className="absolute top-0 right-8 p-2 flex items-center gap-3 w-fit bg-[--primary-bg]  text-white px-3 mailOptions text-[rgba(255,255,255,0.4)]">
            <FiMail />
            <FiFlag />
            <GrPin />
          </div>
          <div className="absolute top-0 flex items-center h-[88px] mailCheckbox bg-[--primary-bg] w-fit">
            <Checkbox className="h-6 w-6 mx-3 rounded-sm border border-[rgba(255,255,255,0.4)]" />
          </div>
        </Link>
      </div>
      <div className="flex w-[99%] min-h-[90px] items-center hover:bg-[--primary-bg] border-t-[1px] border-[--mail-border] border-b-[1px] relative singleMail">
        <div className="flex p-2 gap-3">
          <div className="mt-1">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full flex flex-col leading-tight">
            <span className="text-white font-[600] text-[15px]">
              Internal communication
            </span>
            <span className="text-[--text-blue] font-[600] mb-[2px] text-sm">
              Join us today- Night of T...{" "}
            </span>
            <span className="text-[rgba(255,255,255,0.8)] text-sm">
              Dear colleague, thank you for y...
            </span>
          </div>
        </div>
        <div className="absolute top-0 h-full p-[4px] right-0 flex items-center mailDeleteBtn hover:bg-[rgba(239,109,109,0.2)] hover:text-white">
          <FiTrash2 className="w-5 h-5 text-[rgba(255,255,255,0.4)] trash" />
        </div>
        <div className="absolute top-0 right-8 p-2 flex items-center gap-3 w-fit bg-[--primary-bg]  text-white px-3 mailOptions text-[rgba(255,255,255,0.4)]">
          <FiMail />
          <FiFlag />
          <GrPin />
        </div>
        <div className="absolute top-0 flex items-center h-[88px] mailCheckbox bg-[--primary-bg] w-fit">
          <Checkbox className="h-6 w-6 mx-3 rounded-sm border border-[rgba(255,255,255,0.4)]" />
        </div>
      </div>
      <div className="flex w-[99%] min-h-[90px] items-center hover:bg-[--primary-bg] border-t-[1px] border-[--mail-border] border-b-[1px] relative singleMail">
        <div className="flex p-2 gap-3">
          <div className="mt-1">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full flex flex-col leading-tight">
            <span className="text-white font-[600] text-[15px]">
              Internal communication
            </span>
            <span className="text-[--text-blue] font-[600] mb-[2px] text-sm">
              Join us today- Night of T...{" "}
            </span>
            <span className="text-[rgba(255,255,255,0.8)] text-sm">
              Dear colleague, thank you for y...
            </span>
          </div>
        </div>
        <div className="absolute top-0 h-full p-[4px] right-0 flex items-center mailDeleteBtn hover:bg-[rgba(239,109,109,0.2)] hover:text-white">
          <FiTrash2 className="w-5 h-5 text-[rgba(255,255,255,0.4)] trash" />
        </div>
        <div className="absolute top-0 right-8 p-2 flex items-center gap-3 w-fit bg-[--primary-bg]  text-white px-3 mailOptions text-[rgba(255,255,255,0.4)]">
          <FiMail />
          <FiFlag />
          <GrPin />
        </div>
        <div className="absolute top-0 flex items-center h-[88px] mailCheckbox bg-[--primary-bg] w-fit">
          <Checkbox className="h-6 w-6 mx-3 rounded-sm border border-[rgba(255,255,255,0.4)]" />
        </div>
      </div>
      <div className="flex w-[99%] min-h-[90px] items-center hover:bg-[--primary-bg] border-t-[1px] border-[--mail-border] border-b-[1px] relative singleMail">
        <div className="flex p-2 gap-3">
          <div className="mt-1">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full flex flex-col leading-tight">
            <span className="text-white font-[600] text-[15px]">
              Internal communication
            </span>
            <span className="text-[--text-blue] font-[600] mb-[2px] text-sm">
              Join us today- Night of T...{" "}
            </span>
            <span className="text-[rgba(255,255,255,0.8)] text-sm">
              Dear colleague, thank you for y...
            </span>
          </div>
        </div>
        <div className="absolute top-0 h-full p-[4px] right-0 flex items-center mailDeleteBtn hover:bg-[rgba(239,109,109,0.2)] hover:text-white">
          <FiTrash2 className="w-5 h-5 text-[rgba(255,255,255,0.4)] trash" />
        </div>
        <div className="absolute top-0 right-8 p-2 flex items-center gap-3 w-fit bg-[--primary-bg]  text-white px-3 mailOptions text-[rgba(255,255,255,0.4)]">
          <FiMail />
          <FiFlag />
          <GrPin />
        </div>
        <div className="absolute top-0 flex items-center h-[88px] mailCheckbox bg-[--primary-bg] w-fit">
          <Checkbox className="h-6 w-6 mx-3 rounded-sm border border-[rgba(255,255,255,0.4)]" />
        </div>
      </div>
      <div className="flex w-[99%] min-h-[90px] items-center hover:bg-[--primary-bg] border-t-[1px] border-[--mail-border] border-b-[1px] relative singleMail">
        <div className="flex p-2 gap-3">
          <div className="mt-1">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full flex flex-col leading-tight">
            <span className="text-white font-[600] text-[15px]">
              Internal communication
            </span>
            <span className="text-[--text-blue] font-[600] mb-[2px] text-sm">
              Join us today- Night of T...{" "}
            </span>
            <span className="text-[rgba(255,255,255,0.8)] text-sm">
              Dear colleague, thank you for y...
            </span>
          </div>
        </div>
        <div className="absolute top-0 h-full p-[4px] right-0 flex items-center mailDeleteBtn hover:bg-[rgba(239,109,109,0.2)] hover:text-white">
          <FiTrash2 className="w-5 h-5 text-[rgba(255,255,255,0.4)] trash" />
        </div>
        <div className="absolute top-0 right-8 p-2 flex items-center gap-3 w-fit bg-[--primary-bg]  text-white px-3 mailOptions text-[rgba(255,255,255,0.4)]">
          <FiMail />
          <FiFlag />
          <GrPin />
        </div>
        <div className="absolute top-0 flex items-center h-[88px] mailCheckbox bg-[--primary-bg] w-fit">
          <Checkbox className="h-6 w-6 mx-3 rounded-sm border border-[rgba(255,255,255,0.4)]" />
        </div>
      </div>
      <div className="flex w-[99%] min-h-[90px] items-center hover:bg-[--primary-bg] border-t-[1px] border-[--mail-border] border-b-[1px] relative singleMail">
        <div className="flex p-2 gap-3">
          <div className="mt-1">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full flex flex-col leading-tight">
            <span className="text-white font-[600] text-[15px]">
              Internal communication
            </span>
            <span className="text-[--text-blue] font-[600] mb-[2px] text-sm">
              Join us today- Night of T...{" "}
            </span>
            <span className="text-[rgba(255,255,255,0.8)] text-sm">
              Dear colleague, thank you for y...
            </span>
          </div>
        </div>
        <div className="absolute top-0 h-full p-[4px] right-0 flex items-center mailDeleteBtn hover:bg-[rgba(239,109,109,0.2)] hover:text-white">
          <FiTrash2 className="w-5 h-5 text-[rgba(255,255,255,0.4)] trash" />
        </div>
        <div className="absolute top-0 right-8 p-2 flex items-center gap-3 w-fit bg-[--primary-bg]  text-white px-3 mailOptions text-[rgba(255,255,255,0.4)]">
          <FiMail />
          <FiFlag />
          <GrPin />
        </div>
        <div className="absolute top-0 flex items-center h-[88px] mailCheckbox bg-[--primary-bg] w-fit">
          <Checkbox className="h-6 w-6 mx-3 rounded-sm border border-[rgba(255,255,255,0.4)]" />
        </div>
      </div>
      <div className="flex w-[99%] min-h-[90px] items-center hover:bg-[--primary-bg] border-t-[1px] border-[--mail-border] border-b-[1px] relative singleMail">
        <div className="flex p-2 gap-3">
          <div className="mt-1">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full flex flex-col leading-tight">
            <span className="text-white font-[600] text-[15px]">
              Internal communication
            </span>
            <span className="text-[--text-blue] font-[600] mb-[2px] text-sm">
              Join us today- Night of T...{" "}
            </span>
            <span className="text-[rgba(255,255,255,0.8)] text-sm">
              Dear colleague, thank you for y...
            </span>
          </div>
        </div>
        <div className="absolute top-0 h-full p-[4px] right-0 flex items-center mailDeleteBtn hover:bg-[rgba(239,109,109,0.2)] hover:text-white">
          <FiTrash2 className="w-5 h-5 text-[rgba(255,255,255,0.4)] trash" />
        </div>
        <div className="absolute top-0 right-8 p-2 flex items-center gap-3 w-fit bg-[--primary-bg]  text-white px-3 mailOptions text-[rgba(255,255,255,0.4)]">
          <FiMail />
          <FiFlag />
          <GrPin />
        </div>
        <div className="absolute top-0 flex items-center h-[88px] mailCheckbox bg-[--primary-bg] w-fit">
          <Checkbox className="h-6 w-6 mx-3 rounded-sm border border-[rgba(255,255,255,0.4)]" />
        </div>
      </div>
    </>
  );
};

export default SingleMail;
