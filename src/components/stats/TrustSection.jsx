import StatCard from "./StatCard";
import { stats } from "../../data/stats";

function TrustSection() {
  return (
    <section className="py-24">

      <div className="section-container">

        <div className="text-center mb-14">

          <span
            className="
            text-purple-400
            uppercase
            tracking-widest
            text-sm
            "
          >
            Trusted Learning Platform
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            mt-4
            "
          >
            Empowering Future Developers
          </h2>

          <p
            className="
            text-slate-400
            mt-4
            max-w-2xl
            mx-auto
            "
          >
            Learn programming through
            practical projects, structured
            learning paths and industry-ready
            development skills.
          </p>

        </div>

        <div
          className="
          grid
          md:grid-cols-4
          gap-6
          "
        >

          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default TrustSection;