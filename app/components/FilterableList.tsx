"use client";

import { useState } from "react";

type MenuItem = {
  id: number;
  name: string;
};

// The data you'd normally fetch from a server.
const MENU: MenuItem[] = [
  { id: 1, name: "Margherita Pizza" },
  { id: 2, name: "Paneer Wrap" },
  { id: 3, name: "Cold Brew" },
  { id: 4, name: "Veg Burger" },
  { id: 5, name: "Masala Fries" },
  { id: 6, name: "Lemon Iced Tea" },
];

export default function FilterableList() {
  // TODO 1: Add a `query` state with useState("").

  // TODO 3: Build a `visible` array — keep only items whose `name`
  //         includes the query (case-insensitive).

  return (
    <div className="list">
      {/* TODO 2: Make this a controlled input.
          Give it value={query} and an onChange that updates the state. */}
      <input placeholder="Search the menu..." />

      {/* TODO 5: Empty state — when nothing matches, show a friendly
          message instead of the list (decide off the FILTERED array). */}

      <ul>
        {/* TODO 4: Render the filtered array with .map(),
            giving each <li> a key={item.id} (never the index). */}
        {MENU.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
