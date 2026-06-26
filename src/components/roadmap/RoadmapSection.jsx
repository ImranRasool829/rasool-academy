import RoadmapCard from "./RoadmapCard";
import { roadmap } from "../../data/roadmap";

function RoadmapSection() {
  return (
    <section className="py-24">

      <div className="section-container">

        <div className="text-center mb-16">

          <span
            className="
            text-purple-400
            uppercase
            tracking-widest
            text-sm
            "
          >
            Learning Path
          </span>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            mt-4
            "
          >
            Your Developer Roadmap
          </h2>

          <p
            className="
            text-slate-400
            max-w-2xl
            mx-auto
            mt-4
            "
          >
            Follow a structured learning path
            from beginner to professional
            software developer.
          </p>

        </div>

        <div className="space-y-6">

          {roadmap.map((item) => (
            <RoadmapCard
              key={item.id}
              step={item.id}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default RoadmapSection;