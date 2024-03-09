import Icon from "@/app/(dashboard)/_components/icon/Icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiClock, FiMapPin, FiSmile, FiSquare, FiSun } from "react-icons/fi";
import {
  PiArrowBendDoubleUpLeftLight,
  PiArrowBendUpLeftLight,
  PiArrowBendUpRightThin,
} from "react-icons/pi";
import { CiGrid41 } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";

const page = () => {
  return (
    <>
      <div className="flex w-full ml-2 flex-col">
        <div className="flex w-[98.5%] min-h-10 h-12 p-2 my-2 rounded-[5px] bg-[--single-mail-bg] z-10">
          <h1 className="uppercase text-[rgba(255,255,255,0.8)]">
            FAULTY TRUNCATING MACHINE = USELU BRANCH 097
          </h1>
        </div>
        <div className="pr-[4px] flex h-screen overflow-y-scroll flex-col">
          <div className="w-full  bg-[--single-mail-bg] rounded-[5px] text-[rgba(255,255,255,0.8)] mb-2 mail-body">
            <div className="p-5 flex items-center gap-3 border-b-[--mail-border] border border-t-0 border-l-0  border-r-0">
              <FiClock />
              <p className="text-sm font-[400]">
                Retention: GDPR (10 years) Expires: Sun 2034-03-05 11:46
              </p>
            </div>
            <div className="w-full flex">
              <div className="w-full flex p-3 gap-2">
                <div className="flex h-full  w-10">
                  <Avatar className="h-10 w-10 mt-2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="w-full flex-col">
                  <div className="flex items-center justify-between w-full h-fit">
                    <div>
                      <h1 className="text-sm text-[--mail-text-color]">
                        Okechukwu Deede Anuforo
                      </h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon={<FiSun />} />
                      <Icon icon={<FiSmile />} />
                      <Icon icon={<PiArrowBendUpLeftLight />} />
                      <Icon icon={<PiArrowBendDoubleUpLeftLight />} />
                      <Icon icon={<PiArrowBendUpRightThin />} />
                      <span className="h-[30px] border border-[--border-color]"></span>
                      <Icon icon={<FiSquare />} />
                      <span className="h-[30px] border border-[--border-color]"></span>
                      <Icon icon={<CiGrid41 />} />
                      <span className="h-[30px] border border-[--border-color]"></span>
                      <Icon icon={<SlOptions />} />
                    </div>
                  </div>
                  <div className="flex w-full min-h-10 flex-col">
                    <div className="w-full flex items-center gap-1 justify-between text-sm text-[rgba(255,255,255,0.7)]">
                      <span className="flex items-center gap-1">
                        <p>To:</p>
                        <ul className="flex items-center gap-1">
                          <li className="hover:bg-[--seconday-bg] px-[2px] rounded-sm">
                            <a href="/">Anuforo okechukwu</a>
                          </li>
                        </ul>
                      </span>
                      <span>
                        <p>Fri 2024-03-08 12:30</p>
                      </span>
                    </div>
                    <div className="w-full flex items-center gap-1 text-sm">
                      <span className="flex items-center gap-1">
                        <p>Cc:</p>
                        <ul className="flex items-center gap-1 text-[rgba(255,255,255,1)]">
                          <li className="hover:bg-[--seconday-bg] px-[2px] rounded-sm">
                            <a href="/">Anuforo okechukwu</a>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="w-full py-2 text-wrap whitespace-break-spaces  text-sm text-[--mail-text-color]">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eius odio excepturi tempore ad sapiente rerum dignissimos
                      harum quasi quisquam explicabo? Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Eius odio excepturi tempore
                      ad sapiente rerum dignissimos harum quasi quisquam
                      explicabo?
                    </p>
                  </div>
                  <div className="w-full py-2">
                    <div className="w-3/4 rounded-sm overflow-hidden flex bg-[--user-info-bg]">
                      <div className=" w-1/2 min-h-36  p-4">
                        <span className="mb-2 flex flex-col">
                          <h1 className="capitalize text-[14px] font-bold text-white">
                            Anuforo Okechukwu Deede
                          </h1>
                          <p className="uppercase text-[12px] text-white">
                            Team member,it technical support
                          </p>
                        </span>
                        <span className="flex  gap-1">
                          <FiMapPin className="h-5 w-5" />
                          <h1 className="text-[12px] uppercase">
                            ABUJA - PLOT 792, MOHAMMED BUHARI WAY, CENTRAL
                            BUSINESS DISTRICT
                          </h1>
                        </span>
                      </div>
                      <div className="w-1/2 bg-[url('/assets/access_logo.jpg')] min-h-10 "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  bg-[--single-mail-bg] rounded-[5px] text-[rgba(255,255,255,0.8)] mb-2 mail-body">
            <div className="p-5 flex items-center gap-3 border-b-[--mail-border] border border-t-0 border-l-0  border-r-0">
              <FiClock />
              <p className="text-sm font-[400]">
                Retention: GDPR (10 years) Expires: Sun 2034-03-05 11:46
              </p>
            </div>
            <div className="w-full flex">
              <div className="w-full flex p-3 gap-2">
                <div className="flex h-full  w-10">
                  <Avatar className="h-10 w-10 mt-2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="w-full flex-col">
                  <div className="flex items-center justify-between w-full h-fit">
                    <div>
                      <h1 className="text-sm text-[--mail-text-color]">
                        Okechukwu Deede Anuforo
                      </h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon={<FiSun />} />
                      <Icon icon={<FiSmile />} />
                      <Icon icon={<PiArrowBendUpLeftLight />} />
                      <Icon icon={<PiArrowBendDoubleUpLeftLight />} />
                      <Icon icon={<PiArrowBendUpRightThin />} />
                      <span className="h-[30px] border border-[--border-color]"></span>
                      <Icon icon={<FiSquare />} />
                      <span className="h-[30px] border border-[--border-color]"></span>
                      <Icon icon={<CiGrid41 />} />
                      <span className="h-[30px] border border-[--border-color]"></span>
                      <Icon icon={<SlOptions />} />
                    </div>
                  </div>
                  <div className="flex w-full min-h-10 flex-col">
                    <div className="w-full flex items-center gap-1 justify-between text-sm text-[rgba(255,255,255,0.7)]">
                      <span className="flex items-center gap-1">
                        <p>To:</p>
                        <ul className="flex items-center gap-1">
                          <li className="hover:bg-[--seconday-bg] px-[2px] rounded-sm">
                            <a href="/">Anuforo okechukwu</a>
                          </li>
                        </ul>
                      </span>
                      <span>
                        <p>Fri 2024-03-08 12:30</p>
                      </span>
                    </div>
                    <div className="w-full flex items-center gap-1 text-sm">
                      <span className="flex items-center gap-1">
                        <p>Cc:</p>
                        <ul className="flex items-center gap-1 text-[rgba(255,255,255,1)]">
                          <li className="hover:bg-[--seconday-bg] px-[2px] rounded-sm">
                            <a href="/">Anuforo okechukwu</a>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="w-full py-2 text-wrap whitespace-break-spaces  text-sm text-[--mail-text-color]">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eius odio excepturi tempore ad sapiente rerum dignissimos
                      harum quasi quisquam explicabo? Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Eius odio excepturi tempore
                      ad sapiente rerum dignissimos harum quasi quisquam
                      explicabo?
                    </p>
                  </div>
                  <div className="w-full py-2">
                    <div className="w-3/4 rounded-sm overflow-hidden flex bg-[--user-info-bg]">
                      <div className=" w-1/2 min-h-36  p-4">
                        <span className="mb-2 flex flex-col">
                          <h1 className="capitalize text-[14px] font-bold text-white">
                            Anuforo Okechukwu Deede
                          </h1>
                          <p className="uppercase text-[12px] text-white">
                            Team member,it technical support
                          </p>
                        </span>
                        <span className="flex  gap-1">
                          <FiMapPin className="h-5 w-5" />
                          <h1 className="text-[12px] uppercase">
                            ABUJA - PLOT 792, MOHAMMED BUHARI WAY, CENTRAL
                            BUSINESS DISTRICT
                          </h1>
                        </span>
                      </div>
                      <div className="w-1/2 bg-[url('/assets/access_logo.jpg')] min-h-10 "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;