"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name"); // "name" or "category"

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  });

  return (
    <section className="space-y-4">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`rounded-md px-3 py-2 text-sm ${
            sortBy === "name" ? "bg-slate-700" : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          Sort by Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`rounded-md px-3 py-2 text-sm ${
            sortBy === "category"
              ? "bg-slate-700"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
}