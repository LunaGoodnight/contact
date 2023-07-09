import { TdElement } from "@/app/_contact/TdElement";
import { deleteContact } from "@/app/_serverAction/deleteContact";
import { InputStyle } from "@/utils/ui/InputStyle";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Swal from "sweetalert2";

export const ContactItem = ({
  id,
  first_name,
  last_name,
  job,
  description,
}: {
  id: number;
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}) => {
  const [editMode, setEditMode] = useState(false);
  const [firstNameValue, setFirstNameValue] = useState(first_name);
  const [lastNameValue, setLastNameValue] = useState(last_name);
  const [jobValue, setJoValueb] = useState(job);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const paddingSize = 4;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this contact?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteContact(id).then((res) => {
          if (res.statusCode === 200) {
            Swal.fire({
              title: "Success!",
              text: res.message,
              icon: "success",
              timer: 3000,
            });
          }
        });
      }
    });
  };
  return (
    <tr className="sm:table-row flex flex-wrap sm:p-0 p-2 border-b-gray-300 border-2 min-h-[20]">
      {editMode ? (
        <>
          <TdElement
            text={
              <InputStyle value={firstNameValue} callback={setFirstNameValue} />
            }
          />
          <TdElement
            text={
              <InputStyle value={lastNameValue} callback={setLastNameValue} />
            }
          />
          <TdElement
            text={<InputStyle value={jobValue} callback={setJoValueb} />}
          />
          <TdElement
            text={
              <InputStyle
                value={descriptionValue}
                callback={setDescriptionValue}
              />
            }
          />
          <TdElement text={<div>Cancel</div>} />
        </>
      ) : (
        <>
          <TdElement text={first_name} padding={paddingSize} />
          <TdElement text={last_name} padding={paddingSize} />
          <TdElement text={job} padding={paddingSize} />
          <TdElement text={description} padding={paddingSize} />
          <td className={`p-${paddingSize} sm:w-auto`}>
            <div
              className="p-3 cursor-pointer text-lg rounded hover:bg-gray-200 flex items-center justify-center"
              onClick={() => setEditMode(true)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>
          </td>
          <td className={`p-${paddingSize} sm:w-auto`}>
            <div
              onClick={handleDelete}
              className="p-3 cursor-pointer text-lg rounded hover:bg-gray-200 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </td>
        </>
      )}
    </tr>
  );
};
