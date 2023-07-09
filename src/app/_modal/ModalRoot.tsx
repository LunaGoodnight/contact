"use client";

import { ModalTypeContext } from "@/app/_context/Provider";
import { AddContactModal } from "@/app/_modal/AddContactModal";
import React, { useContext } from "react";

export const modalName = {
  addContact: "ADD_CONTACT",
};

interface ModalMapType {
  [k: string]: () => React.ReactNode;
}
const ModalMap: ModalMapType = {
  ADD_CONTACT: AddContactModal,
};

export const ModalRoot = () => {
  const { modalType } = useContext(ModalTypeContext);
  if (!modalType) return null;
  const DynamicModal = ModalMap[modalType];
  return <DynamicModal />;
};
