import { ContactPanel } from "@/app/ContactPanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <div>
        <ContactPanel />
      </div>
    </main>
  );
}
