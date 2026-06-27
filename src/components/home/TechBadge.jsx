import { motion } from "framer-motion";

function TechBadge({ title }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="
        group
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        backdrop-blur-xl
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:border-purple-500/50
        hover:shadow-purple-500/20
      "
    >
      <h3
        className="
          text-lg
          font-bold
          text-white
          group-hover:text-purple-400
          transition
        "
      >
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Professional Learning Path
      </p>
    </motion.div>
  );
}

export default TechBadge;