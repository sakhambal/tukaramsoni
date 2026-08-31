export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-xl ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-xs tracking-[0.18em] text-blue font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl leading-[1.1] text-ink">{title}</h2>
    </div>
  );
}
