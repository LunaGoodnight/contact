import { AddContactPanel } from "@/app/_contact/AddContactPanel";
import { ContactList } from "@/app/_contact/ConcactList";

interface ContactResponse extends Response {
  statusCode?: number;
}
async function getData() {
  try {
    const res: ContactResponse = await fetch(
      "http://localhost:3000/api/contacts",
      { next: { revalidate: 10 } },
    );
    if (res.statusCode !== 200) {
      return null;
    }
    return res.json();
  } catch (e) {
    console.log(e);
  }
}

export const ContactPanel = async () => {
  const res = await getData();
  return (
    <div className="flex gap-3 flex-col p-8 lg:p-20 h-screen">
      <AddContactPanel />
      {res ? (
        <ContactList list={res.data} />
      ) : (
        <div className="text-neutral-500 font-bold text-lg">No Contacts</div>
      )}
    </div>
  );
};
