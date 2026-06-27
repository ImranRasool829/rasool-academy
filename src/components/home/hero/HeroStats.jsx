import { motion } from "framer-motion";
import { heroStats } from "../../../data/heroData";

function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
      {heroStats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2 + index * 0.1,
            duration: 0.5,
          }}
          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/60
            p-5
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-purple-500/50
          "
        >
          <h3 className="text-3xl font-black text-white">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default HeroStats;