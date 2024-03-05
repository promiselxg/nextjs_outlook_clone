import Link from "next/link";
import { FiCalendar, FiCheck, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { LuCloud, LuGrip } from "react-icons/lu";

const MiniSideBar = () => {
  return (
    <>
      <div className="bg-[--seconday-bg] w-[50px] min-h-screen   items-center  text-center border-r-[1px] border-r-[--border-color]">
        <ul className="mini_sidebar flex flex-col">
          <li className="flex items-center justify-center hover:bg-[#333] hover:cursor-pointer w-[50px] h-[35px] transition-all delay-75">
            <Link href="/mail">
              <FiMail />
            </Link>
          </li>
          <li className="flex items-center justify-center hover:bg-[#333] hover:cursor-pointer w-[50px] h-[35px] transition-all delay-75">
            <Link href="/">
              <FiCalendar />
            </Link>
          </li>
          <li className="flex items-center justify-center hover:bg-[#333] hover:cursor-pointer w-[50px] h-[35px] transition-all delay-75">
            <Link href="/">
              <FiUser />
            </Link>
          </li>
          <li className="flex items-center justify-center hover:bg-[#333] hover:cursor-pointer w-[50px] h-[35px] transition-all delay-75">
            <Link href="/">
              <FiUsers />
            </Link>
          </li>
          <li className="flex items-center justify-center hover:bg-[#333] hover:cursor-pointer w-[50px] h-[35px] transition-all delay-75">
            <Link href="/">
              <FiCheck />
            </Link>
          </li>
          <li className="flex items-center justify-center hover:bg-[#333] hover:cursor-pointer w-[50px] h-[35px] transition-all delay-75">
            <Link href="/">
              <LuCloud />
            </Link>
          </li>
          <li className="flex items-center justify-center hover:bg-[#333] hover:cursor-pointer w-[50px] h-[35px] transition-all delay-75">
            <Link href="/">
              <LuGrip />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MiniSideBar;
