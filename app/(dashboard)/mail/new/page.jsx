"use client";

import { FiChevronDown, FiTrash2, FiTwitch, FiX } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ID, databases } from "@/lib/appwrite";
import Icon from "../../_components/icon/Icon";
import { useRouter } from "next/navigation";
import "./newMail.css";

import { useInputFormModal } from "@/context/SendMailContext";
import { useAccount } from "@/context/AuthContext";

const NewMail = () => {
  const router = useRouter();
  const [submiting, setSubmiting] = useState(false);
  const { isOpen, openModal, formField, handleInputChange, formData } =
    useInputFormModal();
  const { user } = useAccount();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmiting(true);
      await databases.createDocument(
        `${process.env.NEXT_PUBLIC_DATABASE_ID}`,
        `${process.env.NEXT_PUBLIC_COLLECTION_ID}`,
        ID.unique(),
        {
          receiver_email: formField?.to,
          message_body: formField?.message_body,
          sender_email: user?.email,
          subject: formField?.subject,
        }
      );
      router.push("/mail");
      setSubmiting(false);
    } catch (error) {
      setSubmiting(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is not an input field or combo box
      if (
        !event.target.matches("input") &&
        !event.target.matches(".combo-box")
      ) {
        // Hide all combo boxes
        const allComboBoxes = document.querySelectorAll(".combo-box");
        allComboBoxes.forEach((box) => {
          box.style.display = "none";
        });
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
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
                {submiting ? "Please wait..." : "Send"}
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
          <form autoComplete="off">
            <div className="w-full p-2">
              <div className="w-full flex gap-2 mb-2 relative">
                <Button className="bg-transparent flex gap-2 items-center hover:bg-[--seconday-bg] transition-all delay-75 border-[1px] border-[--mail-border] h-9 w-16">
                  To
                </Button>
                <input
                  name="receiver_email"
                  id="receiver_email"
                  onClick={() => openModal(!isOpen, "receiver_email")}
                  value={formData?.receiver_email?.join(";")}
                  readOnly
                  className="form-text bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[rgba(255,255,255,0.8)] text-sm tracking-[0.03em] whitespace-pre-wrap text-wrap"
                />
              </div>
              {/* <div className="w-full flex gap-2 relative">
                <Button className="bg-transparent flex gap-2 items-center hover:bg-[--seconday-bg] transition-all delay-75 border-[1px] border-[--mail-border] h-9 w-16">
                  Cc
                </Button>
                <input
                  type="text"
                  name="cc"
                  id="cc"
                  onClick={() => openModal(!isOpen, "cc")}
                  value={formData?.cc?.join(";")}
                  readOnly
                  className="form-text bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[rgba(255,255,255,0.8)] text-sm tracking-[0.03em]"
                />
              </div> */}
            </div>
            <div className="w-full flex gap-2">
              <textarea
                name="subject"
                id="subject"
                onChange={(e) => handleInputChange("subject", e.target.value)}
                value={formField?.subject}
                placeholder="Add a subject"
                className="bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[rgba(255,255,255,0.8)] p-3 h-[50px] resize-none"
              ></textarea>
            </div>
            <div className="w-full flex gap-2">
              <textarea
                name="message_body"
                id="message_body"
                onChange={(e) =>
                  handleInputChange("message_body", e.target.value)
                }
                value={formField.message_body}
                placeholder="Type / to insert files and more"
                className="bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[rgba(255,255,255,0.8)] p-3 h-screen  resize-none"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewMail;
