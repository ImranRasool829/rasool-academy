import { motion } from "framer-motion";
import { technologies } from "../../../data/heroData";
import TechBadge from "../TechBadge";

function HeroTechGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="
        relative
        grid
        grid-cols-2
        gap-5
        lg:grid-cols-2
      "
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
        >
          <TechBadge title={tech} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HeroTechGrid;