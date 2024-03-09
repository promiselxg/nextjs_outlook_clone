import { cn } from "@/lib/utils";
import React from "react";

const LinkWithIcon = ({ icon, label, ...children }) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center gap-2 text-[rgba(255,255,255,0.8)] hover:text-[rgba(255,255,255,1)] transition-all delay-75 hover:cursor-default  p-[4px] rounded-sm"
        )}
        {...children}
      >
        {icon ? (
          <span className="-mt-[2px]">{icon}</span>
        ) : (
          <span className="flex mr-[14px]">&nbsp;</span>
        )}
        {label && (
          <span className="flex items-center gap-2 font-[300] text-sm">
            {label}
          </span>
        )}
      </div>
    </>
  );
};

const LinkWithIconWrapper = ({ children }) => {
  return (
    <>
      <div className="flex items-center hover:cursor-pointer hover:bg-[--single-mail-bg] rounded-md py-2 px-2  text-white transition-all delay-75 LinkWithIconWrapper">
        {children}
      </div>
    </>
  );
};

export { LinkWithIcon, LinkWithIconWrapper };
