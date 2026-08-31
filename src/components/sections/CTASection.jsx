import Button from "../ui/Button.jsx";

export default function CTASection() {
  return (
    <section className="bg-burgundy py-20 md:py-28">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-4xl leading-[1.15] text-ivory md:text-5xl">
          Find Something That Feels Like You.
        </h2>
        <p className="max-w-md text-base leading-relaxed text-ivory/80">
          Explore our collection of jewellery crafted for life&rsquo;s most
          meaningful moments.
        </p>
        <Button
          as="a"
          href="#featured-products"
          variant="secondary"
          className="mt-2 border-ivory/60 text-ivory hover:border-ivory hover:bg-ivory/10"
        >
          Explore Collection
        </Button>
      </div>
    </section>
  );
}
