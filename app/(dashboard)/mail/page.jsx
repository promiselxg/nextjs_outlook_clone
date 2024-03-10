"use client";

import Image from "next/image";
import defaultImage from "../../../public/assets/dark.svg";
import { FiChevronDown, FiTrash2, FiTwitch } from "react-icons/fi";
import Icon from "../_components/icon/Icon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { databases } from "@/lib/appwrite";
const Inbox = () => {
  const [submiting, setSubmiting] = useState(false);
  const [formField, setFormField] = useState({
    receiver_email: "",
    cc: "",
    message_body: "",
    sender_email: "okeydeede@gmail.com",
    subject: "",
  });

  const handleInputChange = (fieldName, value) => {
    setFormField((prevFormField) => ({
      ...prevFormField,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmiting(true);
      const response = await databases.createDocument(
        `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
        `${process.env.NEXT_PUBLIC_COLLECTION_ID}`,
        "65ede88ccb9f461f3cb2",
        {
          receiver_email: [formField.receiver_email],
          cc: [formField.cc],
          message_body: formField.message_body,
          sender_email: formField.sender_email,
          subject: formField.subject,
        }
      );
      setSubmiting(false);
      console.log(response);
    } catch (error) {
      setSubmiting(false);
      console.log(error);
    }
  };
  return (
    <>
      <div className=" text-white  w-full hidden">
        <div className="flex w-full items-center h-full  justify-center">
          <div className="w-full flex flex-col items-center -mt-[90px]">
            <h1 className="text-[rgba(255,255,255,0.6)] text-sm">
              Select an Item to read
            </h1>
            <Image
              src={defaultImage}
              width={250}
              height={200}
              alt="Select an Item to read"
            />
            <p className="text-[rgba(255,255,255,0.6)] text-sm">
              Nothing is selected
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full px-2">
        <div className="w-full bg-[--single-mail-bg] mt-2  rounded-t-[5px]">
          <div className="w-full min-h-10  p-3 items-center flex justify-between  border-[--mail-border] border-b-[1px]">
            <div className="flex items-center text-[#212121]">
              <button
                className="btn flex items-center gap-3 bg-[#69afe5] hover:bg-[#77b7f7] transition-all delay-75 p-[6px] rounded-tl rounded-bl disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={
                  submiting ||
                  !formField.receiver_email ||
                  !formField.message_body ||
                  !formField.subject
                }
              >
                Send
              </button>
              <button
                className="btn flex gap-2 bg-[#69afe5] hover:bg-[#77b7f7] transition-all delay-75 p-[10px] rounded-tr rounded-br border-l-[0.1px] border-l-[#212121] disabled:cursor-not-allowed"
                disabled={
                  submiting ||
                  !formField.receiver_email ||
                  !formField.message_body ||
                  !formField.subject
                }
              >
                <FiChevronDown />
              </button>
            </div>
            <div className="flex items-center gap-5">
              <Icon icon={<FiTrash2 />} />
              <Icon icon={<FiTwitch />} />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="w-full flex gap-2 mb-2">
              <Button className="bg-transparent flex gap-2 items-center hover:bg-[--seconday-bg] transition-all delay-75 border-[1px] border-[--mail-border] h-9 w-16">
                To
              </Button>
              <input
                type="text"
                name="receiver_email"
                id="receiver_email"
                onChange={(e) =>
                  handleInputChange("receiver_email", e.target.value)
                }
                value={formField.receiver_email}
                className="bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[--search-box-border] text-sm"
              />
            </div>
            <div className="w-full flex gap-2">
              <Button className="bg-transparent flex gap-2 items-center hover:bg-[--seconday-bg] transition-all delay-75 border-[1px] border-[--mail-border] h-9 w-16">
                Cc
              </Button>
              <input
                type="text"
                name="cc"
                id="cc"
                onChange={(e) => handleInputChange("cc", e.target.value)}
                value={formField.cc}
                className="bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[--search-box-border] text-sm"
              />
            </div>
          </div>
          <div className="w-full flex gap-2">
            <input
              type="text"
              name="subject"
              id="subject"
              onChange={(e) => handleInputChange("subject", e.target.value)}
              value={formField.subject}
              placeholder="Add a subject"
              className="bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[rgba(255,255,255,0.8)] p-3"
            />
          </div>
          <div className="w-full flex gap-2">
            <textarea
              type="text"
              name="message_body"
              id="message_body"
              onChange={(e) =>
                handleInputChange("message_body", e.target.value)
              }
              value={formField.message_body}
              placeholder="Type / to insert files and more"
              className="bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[rgba(255,255,255,0.8)] p-3 h-screen"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;
