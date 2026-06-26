function StatCard({
  value,
  label
}) {
  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
      text-center
      transition-all
      duration-300
      hover:-translate-y-2
      "
    >
      <h3
        className="
        text-4xl
        font-black
        gradient-text
        "
      >
        {value}
      </h3>

      <p
        className="
        text-slate-400
        mt-3
        "
      >
        {label}
      </p>
    </div>
  );
}

export default StatCard;