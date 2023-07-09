import { AddContactPanel } from "@/app/_contact/AddContactPanel";
import { ContactList } from "@/app/_contact/ConcactList";

interface ContactResponse extends Response {
  statusCode?: number;
}
async function getData() {
  const res: ContactResponse = await fetch(
    "http://localhost:3000/api/contacts",
  );

  return res.json();
}

export const ContactPanel = async () => {
  const res = await getData();
  console.log({ res });
  return (
    <div className="p-20 flex gap-3 flex-col">
      <AddContactPanel />
      {res.data.length ? (
        <ContactList list={res.data} />
      ) : (
        <div className="text-neutral-500 font-bold text-lg">No Contacts</div>
      )}
    </div>
  );
};
