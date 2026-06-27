import { motion } from "framer-motion";

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/20",

    secondary:
      "border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white",

    outline:
      "border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;