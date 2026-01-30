import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 p-8 text-slate-100">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-6 text-3xl font-bold">Shopping List</h1>

        <div className="rounded-lg bg-white/5 p-6">
          <GroceryItemList />
        </div>
      </div>
    </main>
  );
}

