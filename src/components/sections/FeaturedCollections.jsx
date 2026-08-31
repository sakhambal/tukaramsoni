import SectionHeading from "../ui/SectionHeading.jsx";
import CollectionCard from "../ui/CollectionCard.jsx";
import { collections } from "../../data/products.js";


export default function FeaturedCollections() {
  const [first, second, third, fourth] = collections;

  return (
    <section id="collections" className="bg-ivory py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="COLLECTIONS" title="Curated For Every Chapter" />

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
          <div className="grid gap-5 md:gap-6">
            <CollectionCard collection={first} />
            <CollectionCard collection={third} />
          </div>
          <div className="grid gap-5 md:gap-6 md:mt-10">
            <CollectionCard collection={second} tall />
            <CollectionCard collection={fourth} />
          </div>
        </div>
      </div>
    </section>
  );
}
