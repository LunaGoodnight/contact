"use server";
export const deleteContact = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};
