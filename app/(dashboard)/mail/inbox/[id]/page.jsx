"use client";

import Icon from "@/app/(dashboard)/_components/icon/Icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiClock, FiMapPin, FiSmile, FiSquare, FiSun } from "react-icons/fi";
import {
  PiArrowBendDoubleUpLeftLight,
  PiArrowBendUpLeft,
  PiArrowBendUpLeftLight,
  PiArrowBendUpRightThin,
} from "react-icons/pi";
import { CiGrid41 } from "react-icons/ci";
import { SlActionRedo, SlOptions } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { databases } from "@/lib/appwrite";
import { SkeletonCard } from "@/app/(dashboard)/_components/loader/Loader";
import { Permission, Query, Role } from "appwrite";

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState([]);
  const [senderInfo, setSenderInfo] = useState([]);

  useEffect(() => {
    const getMessage = async () => {
      // get ID
      try {
        const id = pathname.split("/mail/inbox/")[1];
        if (!id) {
          router.push("/mail");
        }
        setLoading(true);
        const response = await databases.getDocument(
          `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
          `${process.env.NEXT_PUBLIC_COLLECTION_ID}`,
          `${id}`
        );
        await databases.updateDocument(
          `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
          `${process.env.NEXT_PUBLIC_COLLECTION_ID}`,
          `${id}`,
          {
            open: true,
          },
          [Permission.update(Role.any())]
        );

        setMessage(response);
        // get sender information
        const user = await databases.listDocuments(
          `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
          "65f736f50c7439686a9f",
          [Query.equal("email_address", [`${message?.sender_email}`])]
        );
        setSenderInfo(user?.documents);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getMessage();
  }, [pathname, router, message?.sender_email]);

  return (
    <>
      {loading ? (
        <div className="w-full p-3">
          <SkeletonCard />
        </div>
      ) : (
        <div className="flex w-full ml-2 flex-col">
          <div className="flex w-[98.5%] min-h-10 h-12 p-2 my-2 rounded-[5px] bg-[--single-mail-bg] z-10">
            <h1 className="uppercase text-[rgba(255,255,255,0.9)] font-[500]">
              {message?.subject}
            </h1>
          </div>
          <div className="pr-[4px] flex h-screen overflow-y-scroll flex-col">
            <div className="w-full  bg-[--single-mail-bg] rounded-[5px] text-[rgba(255,255,255,0.8)] mb-2 mail-body">
              <div className="p-5 flex items-center gap-3 border-b-[--mail-border] border border-t-0 border-l-0  border-r-0">
                <FiClock />
                <p className="text-sm font-[400]">
                  Retention: GDPR (10 years) Expires: {message?.$updatedAt}
                </p>
              </div>
              <div className="w-full flex flex-col">
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
                          {senderInfo?.[0]?.full_name}
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
                          <ul className="flex items-center">
                            {message?.receiver_email?.map((to, i) => (
                              <li
                                className="hover:bg-[--seconday-bg] px-[2px] rounded-sm"
                                key={i}
                              >
                                <a href="/">{to};</a>
                              </li>
                            ))}
                          </ul>
                        </span>
                        <span>
                          <p>{message?.$updatedAt}</p>
                        </span>
                      </div>
                      {message?.cc?.length > 0 && (
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
                      )}
                    </div>
                    <div className="w-full py-2 text-wrap whitespace-break-spaces  text-sm text-[--mail-text-color]">
                      <p>{message?.message_body}</p>
                    </div>
                    <div className="w-full py-2">
                      <div className="w-3/4 rounded-sm overflow-hidden flex bg-[--user-info-bg]">
                        <div className=" w-1/2 min-h-36  p-4">
                          <span className="mb-2 flex flex-col">
                            <h1 className="capitalize text-[14px] font-bold text-white">
                              {senderInfo?.[0]?.full_name}
                            </h1>
                            {senderInfo?.[0]?.jobTitle && (
                              <p className="uppercase text-[12px] text-white">
                                {senderInfo?.[0]?.jobTitle}
                              </p>
                            )}
                          </span>
                          <span className="flex  gap-1">
                            <FiMapPin className="h-4 w-5" />
                            <h1 className="text-[12px] uppercase">
                              abuja, nigeria
                            </h1>
                          </span>
                        </div>
                        <div className="w-1/2 bg-[url('/assets/access_logo.jpg')] min-h-10 "></div>
                      </div>
                    </div>
                    <div className="w-full flex items-center gap-2 my-2">
                      <Button className="bg-transparent flex gap-2 items-center hover:bg-[--active-mail-bg] hover:text-[--unread-mail-border-bg] transition-all delay-75 border-[1px] border-[--mail-border]">
                        <PiArrowBendUpLeft className="h-4 w-4 text-[--unread-mail-border-bg]" />
                        Reply
                      </Button>
                      <Button className="bg-transparent flex gap-2 items-center hover:bg-[--active-mail-bg] hover:text-[--unread-mail-border-bg] transition-all delay-75 border-[1px] border-[--mail-border]">
                        <SlActionRedo className="h-4 w-4 text-[--unread-mail-border-bg]" />
                        Forward
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
