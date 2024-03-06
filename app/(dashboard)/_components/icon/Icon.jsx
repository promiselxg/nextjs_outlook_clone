import { cn } from "@/lib/utils";

const Icon = ({ icon, text, ...children }) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center gap-2 text-[rgba(255,255,255,0.6)] hover:text-[rgba(255,255,255,1)] transition-all delay-75 hover:cursor-default hover:bg-[--seconday-bg] p-[4px] rounded-sm"
        )}
        {...children}
      >
        {icon ? (
          <span>{icon}</span>
        ) : (
          <span className="flex mr-[14px]">&nbsp;</span>
        )}
        {text && <span>{text}</span>}
      </div>
    </>
  );
};

export default Icon;
