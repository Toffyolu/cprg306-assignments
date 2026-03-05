"use client";
export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-between rounded-md bg-white/10 px-4 py-3">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm opacity-80">Category: {category}</p>
      </div>
      <span className="rounded-full bg-white/15 px-3 py-1 text-sm">
        x{quantity}
      </span>
    </li>
  );
}