export default ({ filters, setFilters }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-6 flex gap-4 items-center">
      <input
        type="text"
        name="title"
        placeholder="🔍 Search by title"
        value={filters.title}
        onChange={(e) =>
          setFilters({ title: e.target.value })
        }
        className="text-black border p-2 rounded-md flex-1 focus:ring-2 focus:ring-red-400"
      />
      <input
        type="number"
        name="rating"
        placeholder="⭐ Min rating"
        value={filters.rating}
        onChange={(e) =>
          setFilters({  rating: e.target.value })
        }
        className="text-black border p-2 rounded-md w-32 focus:ring-2 focus:ring-red-400"
        min="0"
        max="5"
      />
      <button
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 shadow-md"
        onClick={() => setFilters({ title: "", rating: "" })}
      >
        Reset
      </button>
    </div>
  );
};
