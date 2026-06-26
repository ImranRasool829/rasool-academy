function CategoryFilter({
  category,
  setCategory
}) {

  const categories = [
    "All",
    "Java",
    "Kotlin",
    "Flutter"
  ];

  return (
    <div className="flex gap-3 flex-wrap">

      {categories.map(item => (

        <button
          key={item}
          onClick={() =>
            setCategory(item)
          }
          className={`
            px-4 py-2 rounded-lg
            ${
              category === item
                ? "bg-purple-600"
                : "bg-slate-800"
            }
          `}
        >
          {item}
        </button>

      ))}

    </div>
  );
}

export default CategoryFilter;