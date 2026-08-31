const variants = {
  primary:
    "bg-burgundy text-ivory hover:bg-burgundy-deep",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-ink/60",
    tertiary:
    "bg-transparent text-ivory border border-ivory/25 hover:border-ivory/60",
  ghost:
    "bg-transparent text-blue hover:text-blue-deep",
};

export default function Button({
  as: Component = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-wide transition-colors duration-200 rounded-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
