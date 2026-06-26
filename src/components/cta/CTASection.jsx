import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-24">
      <div className="section-container">

        <div
          className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-r
          from-purple-700
          via-indigo-700
          to-blue-700
          p-10
          md:p-16
          text-center
          "
        >
          <div className="max-w-3xl mx-auto">

            <span
              className="
              uppercase
              tracking-widest
              text-sm
              text-purple-100
              "
            >
              Start Your Journey
            </span>

            <h2
              className="
              text-4xl
              md:text-6xl
              font-black
              mt-5
              "
            >
              Ready To Become
              A Software Developer?
            </h2>

            <p
              className="
              mt-6
              text-lg
              text-purple-100
              "
            >
              Learn Java, Kotlin, Android,
              Flutter and modern development
              through structured learning paths
              and practical projects.
            </p>

            <div
              className="
              flex
              flex-wrap
              justify-center
              gap-4
              mt-10
              "
            >
              <Link
                to="/courses"
                className="
                px-8
                py-4
                bg-white
                text-slate-900
                rounded-xl
                font-bold
                hover:scale-105
                transition
                "
              >
                Explore Courses
              </Link>

              <a
                href="https://www.youtube.com/@emran_rasool_official"
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-8
                py-4
                border
                border-white/40
                rounded-xl
                font-semibold
                hover:bg-white/10
                transition
                "
              >
                Watch Free Tutorials
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CTASection;