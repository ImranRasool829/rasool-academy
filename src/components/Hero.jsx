import { motion } from "framer-motion";


function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div className="hero-glow top-20 left-20"></div>

      <div className="section-container w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
          >

            <span
              className="
              text-purple-400
              font-semibold
              uppercase
              tracking-widest
              "
            >
              Welcome To Rasool Academy
            </span>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-black
              mt-6
              leading-tight
              "
            >
              Master Programming &
              Build
              <span className="gradient-text">
                {" "}Real-World Apps
              </span>
            </h1>

            <p
              className="
              text-slate-400
              text-lg
              mt-8
              max-w-xl
              "
            >
              Learn Java, Kotlin,
              Flutter, Android,
              React Native and modern
              software development through
              structured courses,
              practical projects and
              industry-focused training.
            </p>

            <div
              className="
              flex
              flex-wrap
              gap-4
              mt-10
              "
            >

              <button
                className="
                px-8
                py-4
                rounded-xl
                bg-purple-600
                hover:bg-purple-700
                transition
                font-semibold
                "
              >
                Explore Courses
              </button>

              <button
                className="
                px-8
                py-4
                rounded-xl
                glass
                "
              >
                Watch Tutorials
              </button>

            </div>

            {/* TRUST NUMBERS */}

            <div
              className="
              flex
              flex-wrap
              gap-10
              mt-14
              "
            >

              <div>
                <h3 className="text-3xl font-bold">
                  500+
                </h3>
                <p className="text-slate-400">
                  Tutorials
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  10+
                </h3>
                <p className="text-slate-400">
                  Courses
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  50K+
                </h3>
                <p className="text-slate-400">
                  Learners
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  5M+
                </h3>
                <p className="text-slate-400">
                  Views
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5
            }}
          >

            <div
              className="
              glass
              rounded-3xl
              p-8
              "
            >

              <div className="grid grid-cols-2 gap-4">

                {[
                  "Java",
                  "Kotlin",
                  "Flutter",
                  "Android",
                  "React Native",
                  "Jetpack Compose"
                ].map((tech) => (

                  <div
                    key={tech}
                    className="
                    glass
                    p-6
                    rounded-xl
                    text-center
                    text-lg
                    font-semibold
                    "
                  >
                    {tech}
                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;