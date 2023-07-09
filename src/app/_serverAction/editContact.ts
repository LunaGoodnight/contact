"use server";

interface ContactInfo {
  info: {
    first_name?: string;
    last_name?: string;
    job?: string;
    description?: string;
  };
}
export const editContact = async (id: number, contactInfo: ContactInfo) => {
  const res = await fetch(`http://localhost:3000/api/contacts/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactInfo),
  });
  return await res.json();
};
