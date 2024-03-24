"use client";

import { useInputFormModal } from "@/context/SendMailContext";
import { cn } from "@/lib/utils";
import { FiX } from "react-icons/fi";

const Modal = ({ className, children }) => {
  const { isOpen, close } = useInputFormModal();
  return (
    <>
      {isOpen && (
        <div className="flex absolute w-full top-0 bottom-0 bg-[rgba(0,0,0,0.8)] h-screen items-center  text-white transition-all delay-75">
          <div
            className={cn(
              "flex justify-center mx-auto h-fit rounded-lg p-5",
              className
            )}
          >
            <div className="absolute right-5 top-2">
              <FiX
                className="w-6 h-6 cursor-pointer"
                onClick={() => close(false)}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
