import SectionHeading from "../ui/SectionHeading.jsx";
import ProductCard from "../ui/ProductCard.jsx";
import { products } from "../../data/products.js";

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="bg-ivory py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="THE EDIT" title="Pieces Worth Remembering" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
