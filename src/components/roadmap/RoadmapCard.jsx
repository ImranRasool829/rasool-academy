function RoadmapCard({
  step,
  title,
  description
}) {
  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
      relative
      "
    >

      <div
        className="
        w-12
        h-12
        rounded-full
        bg-purple-600
        flex
        items-center
        justify-center
        font-bold
        mb-5
        "
      >
        {step}
      </div>

      <h3
        className="
        text-2xl
        font-bold
        "
      >
        {title}
      </h3>

      <p
        className="
        text-slate-400
        mt-3
        "
      >
        {description}
      </p>

    </div>
  );
}

export default RoadmapCard;