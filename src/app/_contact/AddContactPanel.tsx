async function postData() {
  const res = await fetch("http://localhost:3000/api/contacts");

  return res.json();
}

export const AddContactPanel = async () => {
  return (
    <div className="flex justify-end w-full">
      <button type="button" className="bg-blue-400 rounded text-white p-2">
        Add Contact
      </button>
    </div>
  );
};