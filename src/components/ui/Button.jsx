function Button({
  children,
  onClick,
  className = ""
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3
        rounded-xl
        font-semibold
        transition
        bg-purple-600
        hover:bg-purple-700
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;