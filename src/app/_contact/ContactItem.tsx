import { TdElement } from "@/app/_contact/TdElement";
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactItem = ({
  first_name,
  last_name,
  job,
  description,
}: {
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}) => {
  const paddingSize = 4;
  return (
    <tr className="sm:table-row flex flex-wrap sm:p-0 p-2 sm:border-none border-b-gray-300 border-2">
      <TdElement text={first_name} padding={paddingSize} />
      <TdElement text={last_name} padding={paddingSize} />
      <TdElement text={job} padding={paddingSize} />
      <TdElement text={description} padding={paddingSize} />
      <TdElement
        text={
          <div className="p-3 cursor-pointer text-lg rounded hover:bg-gray-400 flex items-center justify-center">
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
        }
        padding={paddingSize}
      />
      <TdElement
        text={
          <div className="p-3 cursor-pointer text-lg rounded hover:bg-gray-400 flex items-center justify-center">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        }
        padding={paddingSize}
      />
    </tr>
  );
};
