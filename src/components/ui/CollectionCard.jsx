export default function CollectionCard({ collection, tall = false }) {
  return (
    <a
      href="#"
      className={`group relative block overflow-hidden bg-lavender-soft ${
        tall ? "aspect-[3/4.4] md:aspect-[3/4.8]" : "aspect-[3/3.6]"
      }`}
    >
      <img
        src={collection.image}
        alt={collection.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <h3 className="text-2xl md:text-3xl text-ivory">{collection.name}</h3>
        <p className="mt-2 max-w-[26ch] text-sm text-ivory/85">{collection.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm text-ivory border-b border-ivory/50 pb-1 transition-colors group-hover:border-ivory">
          Explore
        </span>
      </div>
    </a>
  );
}
