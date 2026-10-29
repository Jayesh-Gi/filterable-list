import FilterableList from "./components/FilterableList";

export default function Page() {
  return (
    <main className="finder">
      <h1>Menu Finder</h1>
      <p>Search the menu below.</p>
      <FilterableList />
    </main>
  );
}
