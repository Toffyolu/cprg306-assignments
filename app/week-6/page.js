"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./ItemList";
import NewItem from "./NewItem";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-slate-900 p-8 text-slate-100">
      <div className="mx-auto max-w-xl space-y-6">
        <h1 className="text-3xl font-bold">Shopping List</h1>

        <NewItem onAddItem={handleAddItem} />

        <div className="rounded-lg bg-white/5 p-6">
          <ItemList items={items} />
        </div>
      </div>
    </main>
  );
}