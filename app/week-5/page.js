import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 p-8 text-slate-100">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-6 text-3xl font-bold">New Item</h1>
        <NewItem />
      </div>
    </main>
  );
}
