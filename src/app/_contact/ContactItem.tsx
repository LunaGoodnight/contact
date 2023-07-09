import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleDelete } from "@/app/_contact/handleDelete";
import { handleCopy } from "@/app/_contact/handleCopy";
import { handleEdit } from "@/app/_contact/handleEdit";
import { TdElement } from "@/app/_contact/TdElement";
import { InputStyle } from "@/utils/ui/InputStyle";
import {
  faClone,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

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
  const [jobValue, setJobValue] = useState(job);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const paddingSize = 6;

  return (
    <>
      {editMode ? (
        <tr className="sm:table-row flex flex-wrap sm:p-4 border-b-gray-200 border-2 ">
          <TdElement
            padding={2}
            text={
              <InputStyle value={firstNameValue} callback={setFirstNameValue} />
            }
          />
          <TdElement
            padding={2}
            text={
              <InputStyle value={lastNameValue} callback={setLastNameValue} />
            }
          />
          <TdElement
            padding={2}
            text={<InputStyle value={jobValue} callback={setJobValue} />}
          />
          <TdElement
            padding={2}
            text={
              <InputStyle
                value={descriptionValue}
                callback={setDescriptionValue}
              />
            }
          />
          <TdElement
            padding={2}
            text={
              <div className="flex gap-2">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
                <button
                  onClick={() =>
                    handleEdit({
                      first_name,
                      firstNameValue,
                      lastNameValue,
                      last_name,
                      job,
                      jobValue,
                      descriptionValue,
                      description,
                      id,
                    })
                  }
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Confirm
                </button>
              </div>
            }
          />
          <td className={`p-${paddingSize} sm:w-auto`}>
            <div
              onClick={() => handleDelete(id)}
              className="p-3 cursor-pointer text-lg rounded hover:bg-gray-200 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </td>
        </tr>
      ) : (
        <tr className="sm:table-row flex flex-wrap sm:p-2 border-b-gray-200 border-2">
          <TdElement
            text={first_name}
            padding={paddingSize}
            title="First Name"
          />
          <TdElement text={last_name} padding={paddingSize} title="Last Name" />
          <TdElement text={job} padding={paddingSize} title="Job" />
          <TdElement
            text={description}
            padding={paddingSize}
            isFullWidth
            title="Description"
          />
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
              onClick={() => handleDelete(id)}
              className="p-3 cursor-pointer text-lg rounded hover:bg-gray-200 flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </td>

          <td className={`p-${paddingSize} sm:w-auto`}>
            <div
              className="p-3 cursor-pointer text-lg rounded hover:bg-gray-200 flex items-center justify-center"
              onClick={() =>
                handleCopy({ first_name, last_name, job, description })
              }
            >
              <FontAwesomeIcon icon={faClone} />
            </div>
          </td>
        </tr>
      )}
    </>
  );
};
