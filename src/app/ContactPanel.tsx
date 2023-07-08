import { ContactList } from "@/app/ConcactList";

async function getData() {
  const res = await fetch("http://localhost:3000/api/contacts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const ContactPanel = async () => {
  const res = await getData();
  console.log({ res });
  return (
    <div>
      {res.data.length ? (
        <div>
          <ContactList list={res.data} />
        </div>
      ) : (
        <div>No Contacts</div>
      )}
    </div>
  );
};
