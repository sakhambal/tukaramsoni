import Button from "../ui/Button.jsx";
import HeroImg from "../../assets/images/TS-ImageMain.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-pink-soft h-auto">
      <div
        className="h-[90vh] w-full flex justify-center items-center flex-col bg-cover bg-center "
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="max-w-5xl flex justify-center items-center flex-col z-10">
          <span className="text-xs tracking-[0.18em] text-ivory font-medium">
            TIMELESS CRAFTSMANSHIP
          </span>
          <h1 className="mt-5 text-5xl leading-[1.08] text-ivory sm:text-6xl lg:text-7xl text-center text-pretty">
            Jewellery That Becomes Part of Your Story.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory text-center">
            Each piece is shaped by hand and built to be worn well for weddings,
            quiet Tuesdays, and everything in between.
          </p>
        </div>
        <div className="mt-9 flex flex-wrap items-center gap-4 z-10">
          <Button as="a" href="#featured-products" variant="primary">
            Explore Collection
          </Button>
          <Button as="a" href="#brand-story" variant="tertiary">
            Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
