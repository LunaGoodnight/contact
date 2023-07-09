import { ContactContext } from "@/app/_context/Provider";
import { AddContactModal } from "@/app/_modal/AddContactModal";
import { useContext } from "react";

export const ModalName = {
  addContact: "ADD_CONTACT",
};
const ModalMap = {
  ADD_CONTACT: AddContactModal,
};

export const ModalRoot = () => {
  const isModal = useContext(ContactContext);
  const DynamicModal = ModalMap["ADD_CONTACT"];
  return <div>adfadsf</div>;
};
