import { ContactPanel } from "@/app/ContactPanel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="lg:mb-0 lg:text-left">
        <ContactPanel />
      </div>
    </main>
  );
}
