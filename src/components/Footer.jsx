function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-8">

          <div>

            <h3
              className="
              text-2xl
              font-bold
              gradient-text
              "
            >
              Rasool Academy
            </h3>

            <p className="mt-3 text-slate-400">
              Learn Programming
              From Beginner To Pro.
            </p>

          </div>

          <div>

            <h4 className="font-semibold">
              Courses
            </h4>

            <ul className="mt-4 space-y-2 text-slate-400">
              <li>Java</li>
              <li>Kotlin</li>
              <li>Flutter</li>
              <li>Android</li>
            </ul>

          </div>

          <div>

            <h4 className="font-semibold">
              Resources
            </h4>

            <ul className="mt-4 space-y-2 text-slate-400">
              <li>Tutorials</li>
              <li>Roadmaps</li>
              <li>Blog</li>
            </ul>

          </div>

          <div>

            <h4 className="font-semibold">
              Community
            </h4>

            <ul className="mt-4 space-y-2 text-slate-400">
              <li>YouTube</li>
              <li>GitHub</li>
              <li>LinkedIn</li>
            </ul>

          </div>

        </div>

        <div
          className="
          border-t
          border-slate-800
          mt-10
          pt-6
          text-center
          text-slate-500
          "
        >
          © 2026 Rasool Academy
        </div>

      </div>

    </footer>
  );
}

export default Footer;