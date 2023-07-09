"use client";

import { ModalTypeContext } from "@/app/_context/Provider";
import { modalName } from "@/app/_modal/ModalRoot";
import { useContext } from "react";

export const AddContactPanel = () => {
  const { setModalType } = useContext(ModalTypeContext);
  return (
    <div className="flex justify-end w-full">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setModalType(modalName.addContact)}
      >
        Add Contact
      </button>
    </div>
  );
};
