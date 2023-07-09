import { AddContactModal } from "@/app/_modal/AddContactModal";

export const ModalName = {
  addContact: "ADD_CONTACT",
};
const ModalMap = {
  ADD_CONTACT: AddContactModal,
};

export const ModalRoot = () => {
  const DynamicModal = ModalMap["ADD_CONTACT"];
  return <div>adfadsf</div>;
};
