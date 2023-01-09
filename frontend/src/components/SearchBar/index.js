export function SearchBar({ search, setSearch }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="flex justify-center my-5">
      <input
        id="search-input"
        type="text"
        name="name"
        value={search}
        onChange={handleChange}
        placeholder="Procure usuário por nome, email ou username"
        className="placeholder:italic placeholder:text-slate-400 w-96  bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      />
    </div>
  );
}
