import Swal from "sweetalert2";
import { deleteContact } from "@/app/_serverAction/deleteContact";

export const handleDelete = (id: number) => {
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
  });
};
