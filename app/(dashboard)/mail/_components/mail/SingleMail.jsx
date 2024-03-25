"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { FiFlag, FiMail, FiTrash2 } from "react-icons/fi";
import { GrPin } from "react-icons/gr";
import "./SingleMail.css";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { client, databases } from "@/lib/appwrite";
import { SkeletonLoader } from "@/app/(dashboard)/_components/loader/Loader";
import { Query } from "appwrite";
import { cn } from "@/lib/utils";
import { useAccount } from "@/context/AuthContext";

const SingleMail = () => {
  const [mails, setMails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAccount();

  const getAllMails = useCallback(async () => {
    try {
      setLoading(true);
      const response = await databases.listDocuments(
        `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
        `${process.env.NEXT_PUBLIC_COLLECTION_ID}`,
        [
          Query.search("receiver_email", `${user?.email?.split("@")[0]}`),
          Query.orderDesc("$createdAt"),
        ]
      );

      // Query.or([Query.lessThan(5), Query.greaterThan(10)]);

      setLoading(false);
      setMails(response?.documents);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [user?.email]);

  useEffect(() => {
    getAllMails();
    const unsubscribe = client.subscribe(
      `databases.${process.env.NEXT_PUBLIC_DATABASE_ID}.collections.${process.env.NEXT_PUBLIC_COLLECTION_ID}.documents`,
      (res) => {
        // Callback will be executed on changes for documents A and all files.
        if (
          res.events.includes("databases.*.collections.*.documents.*.create")
        ) {
          setMails((prevState) => [res.payload, ...prevState]);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, [getAllMails]);
  console.log(mails);
  return (
    <>
      {loading ? (
        <div className="w-full p-5">
          <SkeletonLoader />
        </div>
      ) : (
        mails?.map((mail) => (
          <div
            className={cn(
              `flex w-full min-h-[90px] items-center hover:bg-[--primary-bg] border-t-[1px] border-[--mail-border] border-b-[1px] relative singleMail ${
                mail?.open ? "readMail" : "unreadMail"
              }`
            )}
            key={mail?.$id}
          >
            <Link href={`/mail/inbox/${mail?.$id}`}>
              <div className="flex p-2 gap-3">
                <div className="mt-1">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="w-full flex flex-col leading-tight">
                  <span className="text-white font-[600] text-sm">
                    {mail?.sender_email}
                  </span>
                  <span
                    className={cn(
                      `font-[600] mb-[2px] text-sm ${
                        mail?.open ? "text-[#ddeae0]" : "text-[--text-blue]"
                      }`
                    )}
                  >
                    {mail?.subject?.substring(0, 20)}...
                  </span>
                  <span className="text-[rgba(255,255,255,0.8)] text-sm">
                    {mail?.message_body?.substring(0, 30)}
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
        ))
      )}
    </>
  );
};

export default SingleMail;
