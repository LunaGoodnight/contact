import { addContact } from "@/app/_modal/addContact";
import { FormWrapper } from "@/app/_modal/FormWrapper";
import { InputRow } from "@/app/_modal/InputRow";
import { ModalContentWrapper } from "@/app/_modal/ModalContentWrapper";
import { ShadowWrapper } from "@/app/_modal/ShadowWrapper";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ModalTypeContext } from "@/app/_context/Provider";

export const AddContactModal = () => {
  const { setModalType } = useContext(ModalTypeContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");

  const newContact = {
    contact: {
      first_name: firstName,
      last_name: lastName,
      job,
      description,
    },
  };
  const handleAction = () => {
    const checkItem = Object.values(newContact.contact).map((x) => x.trim());
    if (checkItem.every((x) => x.length)) {
      addContact({ newContact }).then((data) => {
        console.log({ data });
        setModalType(null);
      });
    } else {
      alert("enter value!!!!!!!");
    }
  };
  return (
    <ShadowWrapper>
      <ModalContentWrapper>
        <form action={handleAction}>
          <div className="flex justify-between items-center border-b-gray-200 border-b-2 p-2 mb-3">
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
            <InputRow
              title="First Name"
              value={firstName}
              callback={setFirstName}
            />
            <InputRow
              title="Last Name"
              value={lastName}
              callback={setLastName}
            />
            <InputRow title="Job" value={job} callback={setJob} />
            <InputRow
              title="Description"
              value={description}
              callback={setDescription}
            />
          </FormWrapper>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </ModalContentWrapper>
    </ShadowWrapper>
  );
};
