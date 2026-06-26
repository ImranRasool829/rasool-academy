import instructorImage from "../../assets/emran.jpeg";

function InstructorSection() {
  return (
    <section className="py-24">
      <div className="section-container">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="hero-glow"></div>

              <img
                src={instructorImage}
                alt="Emran Rasool"
                className="
                w-[350px]
                h-[450px]
                object-cover
                rounded-3xl
                border
                border-slate-700
                "
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span
              className="
              text-purple-400
              uppercase
              tracking-widest
              text-sm
              "
            >
              Meet Your Instructor
            </span>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-black
              mt-4
              "
            >
              Emran Rasool
            </h2>

            <p
              className="
              text-xl
              text-slate-300
              mt-4
              "
            >
              Android Developer • Programming Educator • Content Creator
            </p>

            <p
              className="
              text-slate-400
              mt-6
              leading-8
              "
            >
              Passionate about teaching modern software development.
              My mission is to help students learn programming through
              structured learning paths, practical projects and real-world skills.
            </p>

            {/* ACHIEVEMENTS */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="glass p-5 rounded-2xl">
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-slate-400">
                  Tutorials Created
                </p>
              </div>

              <div className="glass p-5 rounded-2xl">
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-slate-400">
                  Programming Courses
                </p>
              </div>

              <div className="glass p-5 rounded-2xl">
                <h3 className="text-2xl font-bold">Java</h3>
                <p className="text-slate-400">
                  Expert Level
                </p>
              </div>

              <div className="glass p-5 rounded-2xl">
                <h3 className="text-2xl font-bold">Android</h3>
                <p className="text-slate-400">
                  Development Specialist
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default InstructorSection;