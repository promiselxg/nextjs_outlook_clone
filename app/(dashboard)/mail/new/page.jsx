"use client";

import { FiChevronDown, FiTrash2, FiTwitch, FiX } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ID, databases } from "@/lib/appwrite";
import Icon from "../../_components/icon/Icon";
import { useRouter } from "next/navigation";
import "./newMail.css";
import SuggestedContacts from "./_components/SuggestedContacts";
import { cn } from "@/lib/utils";

const NewMail = () => {
  const router = useRouter();
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
        ID.unique(),
        {
          receiver_email: [formField.receiver_email],
          cc: [formField.cc],
          message_body: formField.message_body,
          sender_email: formField.sender_email,
          subject: formField.subject,
        }
      );
      router.push("/mail");
      setSubmiting(false);
    } catch (error) {
      setSubmiting(false);
      console.log(error);
    }
  };

  const showComboBox = (comboBoxId) => {
    var allComboBoxes = document.querySelectorAll(".combo-box");
    allComboBoxes.forEach(function (box) {
      box.style.display = "none";
    });

    // Get the clicked input field
    var clickedInput = document.activeElement;

    // Get the position of the clicked input field
    var inputRect = clickedInput.getBoundingClientRect();

    // Get the corresponding combo box
    var comboBox = document.getElementById(comboBoxId);

    // Calculate the distance between input and combo box
    var distance = inputRect.bottom - inputRect.top;

    // Position the combo box below the clicked input field based on distance
    comboBox.style.left = "70px";
    comboBox.style.top = distance + "px";

    // Display the combo box
    comboBox.style.display = "block";
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
                  type="text"
                  name="receiver_email"
                  id="receiver_email"
                  onChange={(e) =>
                    handleInputChange("receiver_email", e.target.value)
                  }
                  onClick={() => showComboBox("combo1")}
                  value={formField.receiver_email}
                  className="form-text bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[--search-box-border] text-sm "
                />
                <div
                  id="combo1"
                  className={cn(
                    `combo-box ${
                      formField?.receiver_email?.length > 3 && "p-[5px]"
                    }`
                  )}
                >
                  <SuggestedContacts value={formField.receiver_email} />
                </div>
              </div>
              <div className="w-full flex gap-2 relative">
                <Button className="bg-transparent flex gap-2 items-center hover:bg-[--seconday-bg] transition-all delay-75 border-[1px] border-[--mail-border] h-9 w-16">
                  Cc
                </Button>
                <input
                  type="text"
                  name="cc"
                  id="cc"
                  onChange={(e) => handleInputChange("cc", e.target.value)}
                  onClick={() => showComboBox("combo2")}
                  value={formField.cc}
                  className="form-text bg-transparent w-full border-[--mail-border] border-b-[1px] outline-none text-[--search-box-border] text-sm"
                />
                <div
                  id="combo2"
                  className={cn(
                    `combo-box ${formField?.cc?.length > 3 && "p-[5px]"}`
                  )}
                >
                  <SuggestedContacts value={formField.cc} />
                </div>
              </div>
            </div>
            <div className="w-full flex gap-2">
              <textarea
                name="subject"
                id="subject"
                onChange={(e) => handleInputChange("subject", e.target.value)}
                value={formField.subject}
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
