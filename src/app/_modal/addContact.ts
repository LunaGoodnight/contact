interface AddContactProp {
  contact: {
    first_name: string;
    last_name: string;
    job: string;
    description: string;
  };
}

export const addContact = async (newContact: AddContactProp) => {
  const res = await fetch("http://localhost:3000/api/contacts", {
    method: "POST",
    body: JSON.stringify(newContact),
  });
  const data = res.json();
  console.log({ data });
};
