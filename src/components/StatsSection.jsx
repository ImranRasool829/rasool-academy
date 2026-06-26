function StatsSection() {

  const stats = [
    {
      value: "50+",
      label: "Courses"
    },
    {
      value: "100K+",
      label: "Students"
    },
    {
      value: "500+",
      label: "Videos"
    },
    {
      value: "5M+",
      label: "Views"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((item, index) => (

          <div
            key={index}
            className="
            glass
            rounded-2xl
            p-8
            text-center
            "
          >
            <h3
              className="
              text-4xl
              font-bold
              text-purple-500
              "
            >
              {item.value}
            </h3>

            <p className="text-slate-400 mt-2">
              {item.label}
            </p>
          </div>

        ))}

      </div>

    </section>
  );
}

export default StatsSection;