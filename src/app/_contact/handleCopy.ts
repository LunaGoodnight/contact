import Swal from "sweetalert2";
import { addContact } from "@/app/_serverAction/addContact";

interface HandleCopyProp {
  first_name: string;
  last_name: string;
  job: string;
  description: string;
}
export const handleCopy = ({
  first_name,
  last_name,
  job,
  description,
}: HandleCopyProp) => {
  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to copy this contact?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirm",
  }).then((result) => {
    if (result.isConfirmed) {
      const newContact = {
        contact: {
          first_name,
          last_name,
          job,
          description,
        },
      };

      addContact({ newContact }).then((res) => {
        if (res.statusCode === 201) {
          Swal.fire({
            title: "Success!",
            text: res.message,
            icon: "success",
            timer: 3000,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Please enter all the values",
            icon: "error",
          });
        }
      });
    }
  });
};
