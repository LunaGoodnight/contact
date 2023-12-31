"use server";

interface AddContactProp {
  newContact: {
    contact: {
      first_name: string;
      last_name: string;
      job: string;
      description: string;
    };
  };
}

export const addContact = async ({ newContact }: AddContactProp) => {
  try {
    const res = await fetch("http://localhost:3000/api/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};
