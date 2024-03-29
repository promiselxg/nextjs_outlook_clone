"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInputFormModal } from "@/context/SendMailContext";
import { databases } from "@/lib/appwrite";
import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const SuggestedContacts = ({ value, inputField }) => {
  const [suggestedContacts, setSuggestedContacts] = useState([]);
  const { handleComboItemClick } = useInputFormModal();

  useEffect(() => {
    const getUser = async () => {
      const response = await databases.listDocuments(
        `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
        `65f736f50c7439686a9f`,
        [Query.search("full_name", `${value}`)]
      );
      setSuggestedContacts(response?.documents);
    };
    getUser();
  }, [value]);

  return (
    <>
      <h1 className="text-[12px] px-2 py-2 text-[--mail-text-color] font-[300] ">
        Suggested contacts
      </h1>
      <ul className="flex text-[--mail-text-color] text-[14px] font-[200] items-center min-h-max flex-col">
        {suggestedContacts?.map((contact) => (
          <li
            className="flex gap-2 items-center hover:bg-[--seconday-bg] hover:cursor-pointer w-full p-1 rounded-md relative"
            onClick={() =>
              handleComboItemClick(inputField, contact?.email_address)
            }
            key={contact?.$id}
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col leading-[1]">
              <span>{contact?.full_name}</span>
              <span>{contact?.email_address}</span>
            </div>
            <FiX className="absolute  right-3 h-4 w-4 text-[--text-blue] closeBtn" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SuggestedContacts;
