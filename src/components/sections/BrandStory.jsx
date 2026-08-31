import Button from "../ui/Button.jsx";

export default function BrandStory() {
  return (
    <section id="brand-story" className="bg-lavender-soft py-20 md:py-28">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div className="order-2 md:order-1">
          <div className="aspect-[4/5] w-full overflow-hidden">
            <img
              src="https://loremflickr.com/900/1125/goldsmith,handcraft?lock=2"
              alt="A goldsmith shaping a piece of jewellery by hand"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 max-w-lg md:order-2">
          <span className="text-xs tracking-[0.18em] text-blue font-medium">
            OUR STORY
          </span>
          <h2 className="mt-5 text-4xl leading-[1.12] text-ink md:text-5xl">
            Crafted With Tradition. Designed For Today.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone">
            Tukaram Soni began at a small workbench, where every setting was
            checked by hand and every stone chosen with care. That discipline
            still shapes how each piece is made &mdash; slowly, deliberately,
            and with an eye trained over generations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone">
            We build jewellery meant to outlast trends: pieces you reach for
            without a second thought, and pass on without hesitation.
          </p>
          <Button as="a" href="#" variant="ghost" className="mt-6 px-0">
            Discover Our Story &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
