import { Hammer, Clock, Heart, ShieldCheck } from "lucide-react";
import { features } from "../../data/products.js";

const icons = [Hammer, Clock, Heart, ShieldCheck];

export default function WhyChooseUs() {
  return (
    <section className="bg-pink-soft py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-xl">
          <span className="text-xs tracking-[0.18em] text-blue font-medium">
            WHY TUKARAM SONI
          </span>
          <h2 className="mt-5 text-4xl leading-[1.1] text-ink md:text-5xl">
            What Stays With You
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div key={feature.title}>
                <Icon size={26} strokeWidth={1.4} className="text-burgundy" />
                <h3 className="mt-5 text-xl text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
