import Swal from "sweetalert2";
import { editContact } from "@/app/_serverAction/editContact";

interface HandleEditProps {
  firstNameValue: string;
  first_name: string;
  lastNameValue: string;
  last_name: string;
  jobValue: string;
  job: string;
  descriptionValue: string;
  description: string;
  id: number;
}
export const handleEdit = ({
  firstNameValue,
  first_name,
  lastNameValue,
  last_name,
  jobValue,
  job,
  descriptionValue,
  description,
  id,
}: HandleEditProps) => {
  if (
    firstNameValue === first_name &&
    lastNameValue === last_name &&
    jobValue === job &&
    descriptionValue === description
  ) {
    Swal.fire({
      title: "You didn't change anything",
      icon: "error",
      timer: 3000,
      showConfirmButton: false,
    });
  } else {
    const contactInfo = {
      info: {
        ...(first_name !== firstNameValue && { first_name: firstNameValue }),
        ...(last_name !== lastNameValue && { last_name: lastNameValue }),
        ...(job !== jobValue && { job: jobValue }),
        ...(description !== descriptionValue && {
          description: descriptionValue,
        }),
      },
    };

    editContact(id, contactInfo).then((res) => {
      if (res.stasusCode === 201) {
        Swal.fire({
          title: "Success!",
          text: res.message,
          icon: "success",
          timer: 3000,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: res.message,
          icon: "error",
          timer: 4000,
          showConfirmButton: true,
        });
      }
    });
  }
};
