const Icon = ({ icon, text }) => {
  return (
    <>
      <div className="flex items-center gap-2 text-[rgba(255,255,255,0.6)] hover:text-[rgba(255,255,255,1)] transition-all delay-75 hover:cursor-default hover:bg-[--seconday-bg] p-[4px] rounded-sm">
        {icon && <span>{icon}</span>}
        {text && <span>{text}</span>}
      </div>
    </>
  );
};

export default Icon;
