"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="flex cursor-pointer items-center justify-between rounded-md bg-white/10 px-4 py-3 hover:bg-white/20"
    >
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