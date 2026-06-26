import { workItems } from "../../data/work";

function MyWorkSection() {
  return (
    <section className="py-24">
      <div className="section-container">

        <div className="text-center mb-16">

          <span className="text-purple-400 uppercase tracking-widest text-sm">
            My Work
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Building Knowledge Across Platforms
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {workItems.map((item) => (
            <div
              key={item.id}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-purple-400 mt-3">
                {item.category}
              </p>

              <p className="text-slate-400 mt-4">
                {item.description}
              </p>

              <button
                className="
                mt-6
                px-5
                py-3
                rounded-xl
                bg-purple-600
                hover:bg-purple-700
                transition
                "
              >
                Explore
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default MyWorkSection;