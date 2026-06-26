function TestimonialCard({
  name,
  text
}) {
  return (
    <div
      className="
      glass
      rounded-2xl
      p-6
      "
    >
      <p className="text-slate-300">
        "{text}"
      </p>

      <h4
        className="
        mt-4
        font-bold
        "
      >
        {name}
      </h4>
    </div>
  );
}

export default TestimonialCard;