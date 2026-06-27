import { motion } from "framer-motion";
import Button from "../../common/Button";
import HeroStats from "./HeroStats";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-400">
        🚀 Welcome to Rasool Academy
      </span>

      {/* Heading */}
      <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
        Master Modern
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Programming
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        Learn Java, Kotlin, Flutter, Android, React Native and modern software
        development through structured courses, real-world projects and
        industry-ready roadmaps.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Button variant="primary">
          Explore Courses
        </Button>

        <Button variant="secondary">
          Watch Free Tutorials
        </Button>
      </div>

      {/* Trust Line */}
      <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
        <span>✅ Beginner Friendly</span>
        <span>✅ Real Projects</span>
        <span>✅ Lifetime Learning</span>
      </div>

      {/* Stats */}
      <HeroStats />
    </motion.div>
  );
}

export default HeroContent;