import { ShadowWrapper } from "@/app/_modal/ShadowWrapper";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ModalTypeContext } from "@/app/_context/Provider";

export const AddContactModal = () => {
  const { setModalType } = useContext(ModalTypeContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <ShadowWrapper>
      <div className="relative bg-white rounded-lg shadow h-32 translate-y-[-50px] transition-all duration-300 ease-in-out p-4 w-4/6">
        <div className="flex justify-between items-center border-b-gray-200 border-b-2 p-2">
          <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
            Add Contact
          </h5>
          <button
            type="button"
            onClick={() => setModalType(null)}
            className="p-2"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="flex gap-2">
          <div className="w-2/6">First Name</div>
          <input
            className="w-4/6"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
    </ShadowWrapper>
  );
};
