import { motion } from "framer-motion";

function HeroBackground() {
  return (
    <>
      {/* Main Purple Glow */}
      <div
        className="
          absolute
          top-24
          left-20
          h-72
          w-72
          rounded-full
          bg-purple-600/20
          blur-[120px]
          -z-10
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          bottom-20
          right-10
          h-80
          w-80
          rounded-full
          bg-blue-600/20
          blur-[140px]
          -z-10
        "
      />

      {/* Floating Circle */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-40
          right-24
          h-24
          w-24
          rounded-full
          border
          border-purple-500/30
          backdrop-blur-sm
        "
      />

      {/* Floating Circle */}
      <motion.div
        animate={{
          y: [12, -12, 12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-28
          left-32
          h-16
          w-16
          rounded-full
          border
          border-slate-500/30
        "
      />
    </>
  );
}

export default HeroBackground;