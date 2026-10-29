# Menu Finder — Filterable List (Starter)

Starter repo for the **Menu Finder (Filterable List)** assignment. You'll turn a static
array into a live, **searchable** list: render it with `.map()` and proper **keys**, wire a
**filter** to a controlled input, and add an **empty state** so a no-match search never
leaves the user staring at a blank screen.

## Run it locally

```bash
npm install
npm run dev
```

Open **http://localhost:3000** — you'll see the menu with a search box that **doesn't work
yet** and `// TODO` markers.

## What to build (in `app/components/FilterableList.tsx`)

| Step | What to add |
|---|---|
| 1 | A `query` state with `useState("")` |
| 2 | A **controlled** search `<input>` — `value={query}` and `onChange` updating state |
| 3 | A **filtered** array — keep only items whose `name` includes the query (case-insensitive) |
| 4 | Render the filtered array with `.map()`, giving each `<li>` a `key={item.id}` |
| 5 | An **empty state** — when the filtered array is empty, show a friendly message instead of the list |

## Requirements

1. Render the list with `.map()` and a stable, unique `key` — use `item.id`, **never the array index**.
2. Typing in the search box shrinks the list in real time (case-insensitive match on `name`).
3. Controlled input: `value` comes from state, `onChange` updates it.
4. Empty state: when no item matches, show a short message instead of an empty list.
5. No type errors — the app compiles and runs cleanly.

## Submit 📸

1. A screenshot of the running app at `http://localhost:3000` showing the list filtering (and the empty-state message for a no-match query).
2. A screenshot of your `FilterableList.tsx` code.
