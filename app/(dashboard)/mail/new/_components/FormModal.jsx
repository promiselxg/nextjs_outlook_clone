"use client";

import { useInputFormModal } from "@/context/SendMailContext";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import SuggestedContacts from "./SuggestedContacts";

const FormModal = () => {
  const {
    formView,
    handleInputChange,
    formField,
    formData,
    handleRemoveReceiverEmail,
  } = useInputFormModal();
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
    comboBox.style.left = "0px";
    comboBox.style.top = distance + "0px";
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
      {formView === "receiver_email" && (
        <>
          <div className="dialog_header w-full">To</div>
          <div className="py-3">
            <div className="py-[4px] relative">
              <input
                name="receiver_email"
                id="receiver_email"
                onChange={(e) =>
                  handleInputChange("receiver_email", e.target.value)
                }
                onClick={() => showComboBox("combo1")}
                type="text"
                className="bg-transparent w-full border border-[--mail-border] outline-none text-[rgba(255,255,255,0.8)] text-sm tracking-[0.03em] p-3 rounded-[5px]"
              />
              <div className="w-full  mt-2">
                <ul className="flex flex-wrap gap-2">
                  {formData?.receiver_email?.map((item, i) => (
                    <li
                      key={i}
                      className="bg-[--unread-mail-text-bg] hover:bg-[--open-mail-pane-bg] flex items-center w-fit relative flex-row-reverse p-[4px] rounded-md gap-1 transition-all delay-75  text-[rgba(255,255,255,0.8)] text-sm"
                      onClick={() => handleRemoveReceiverEmail(formView, item)}
                    >
                      <FiX className="w-4 h-4 cursor-pointer" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div id="combo1" className={cn(`combo-box`)}>
                <SuggestedContacts
                  value={formField?.receiver_email}
                  inputField={formView}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FormModal;
