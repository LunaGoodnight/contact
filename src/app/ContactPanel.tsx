import { ContactList } from "@/app/ConcactList";

interface ContactResponse extends Response {
  statusCode?: number;
}
async function getData() {
  const res: ContactResponse = await fetch(
    "http://localhost:3000/api/contacts",
  );

  console.log({ res });
  if (res.statusCode !== 200) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
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
