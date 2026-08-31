export default function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-lavender-soft aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ivory/95 px-5 py-3 text-center text-sm tracking-wide text-ink transition-transform duration-300 ease-out group-hover:translate-y-0">
          <a href="#" className="focus-visible:outline-none">
            View Details
          </a>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-stone">{product.category}</p>
          <h3 className="mt-1 text-xl text-ink">{product.name}</h3>
        </div>
        <p className="whitespace-nowrap text-sm text-burgundy font-medium mt-1">{product.price}</p>
      </div>
    </div>
  );
}
