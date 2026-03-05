"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import ItemList from "./ItemList";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]); 
  }

  return (
    <main className="min-h-screen bg-slate-900 p-8 text-slate-100">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold">Shopping List</h1>

        <div className="rounded-lg bg-white/5 p-6">
          <h2 className="mb-4 text-lg font-semibold">Add Item</h2>
          <NewItem onAddItem={handleAddItem} />
        </div>

        <div className="rounded-lg bg-white/5 p-6">
          <h2 className="mb-4 text-lg font-semibold">Items</h2>
          <ItemList items={items} />
        </div>
      </div>
    </main>
  );
}