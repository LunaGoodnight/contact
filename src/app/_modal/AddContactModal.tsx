import { addContact } from "@/app/_modal/addContact";
import { FormWrapper } from "@/app/_modal/FormWrapper";
import { ModalContentWrapper } from "@/app/_modal/ModalContentWrapper";
import { ShadowWrapper } from "@/app/_modal/ShadowWrapper";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useMemo, useState } from "react";
import { ModalTypeContext } from "@/app/_context/Provider";

export const AddContactModal = () => {
  const { setModalType } = useContext(ModalTypeContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");

  const newContact = useMemo(
    () => ({
      contact: {
        first_name: firstName,
        last_name: lastName,
        job,
        description,
      },
    }),
    [firstName, lastName, job, description],
  );

  return (
    <ShadowWrapper>
      <ModalContentWrapper>
        <form action={() => addContact(newContact)}>
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
          <FormWrapper>
            <div className="flex gap-2 p-2 justify-start items-center">
              <div className="w-1/6">First Name</div>
              <input
                className="w-3/6 border-gray-400 border rounded outline-0 p-2"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex gap-2 p-2 justify-start items-center">
              <div className="w-1/6">Last Name</div>
              <input
                className="w-3/6 border-gray-400 border rounded outline-0 p-2"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </FormWrapper>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </ModalContentWrapper>
    </ShadowWrapper>
  );
};
