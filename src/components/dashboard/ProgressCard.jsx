function ProgressCard({
  title,
  progress
}) {

  return (
    <div
      className="
      glass
      p-6
      rounded-2xl
      "
    >

      <h3
        className="
        text-xl
        font-bold
        "
      >
        {title}
      </h3>

      <div
        className="
        bg-slate-800
        h-3
        rounded-full
        mt-4
        "
      >

        <div
          className="
          bg-purple-600
          h-3
          rounded-full
          "
          style={{
            width:
              `${progress}%`
          }}
        />

      </div>

      <p className="mt-3">
        {progress}% Complete
      </p>

    </div>
  );
}

export default ProgressCard;