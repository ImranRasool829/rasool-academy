function SectionTitle({
  title,
  subtitle
}) {
  return (
    <div className="mb-12">

      <h2
        className="
        text-4xl
        md:text-5xl
        font-bold
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
          text-slate-400
          mt-3
          "
        >
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;