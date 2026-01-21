import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseStyle =
    "px-8 py-3 rounded-full font-serif transition-all duration-300 text-sm tracking-widest uppercase";
  const styles = {
    primary: "bg-olive-green text-cream hover:bg-olive-dark shadow-md",
    outline:
      "border border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-cream",
    ghost: "text-earth-brown hover:text-olive-green",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
