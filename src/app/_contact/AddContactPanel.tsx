"use client";

import { ModalTypeContext } from "@/app/_context/Provider";
import { useContext } from "react";

async function postData() {
  const res = await fetch("http://localhost:3000/api/contacts");

  return res.json();
}

export const AddContactPanel = () => {
  const { setModalType } = useContext(ModalTypeContext);

  return (
    <div className="flex justify-end w-full">
      <button
        type="button"
        className="bg-blue-400 rounded text-white p-2"
        onClick={() => setModalType()}
      >
        Add Contact
      </button>
    </div>
  );
};
