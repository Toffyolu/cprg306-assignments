"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return (
      <main className="min-h-screen bg-slate-900 p-8 text-slate-100">
        <div className="mx-auto max-w-xl rounded-lg bg-white/5 p-6">
          <h1 className="mb-4 text-2xl font-bold">Access Denied</h1>
          <p>Please log in first to view the shopping list.</p>
        </div>
      </main>
    );
  }

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    async function loadItems() {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }

    loadItems();
  }, [user]);

  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);
    setItems([...items, { ...newItem, id }]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-slate-900 p-8 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold">Shopping List</h1>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="space-y-6 md:w-1/2">
            <div className="rounded-lg bg-white/5 p-6">
              <h2 className="mb-4 text-lg font-semibold">Add Item</h2>
              <NewItem onAddItem={handleAddItem} />
            </div>

            <div className="rounded-lg bg-white/5 p-6">
              <h2 className="mb-4 text-lg font-semibold">Items</h2>
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
          </div>

          <div className="md:w-1/2">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}