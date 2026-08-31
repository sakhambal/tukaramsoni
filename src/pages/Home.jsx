import Hero from "../components/sections/Hero.jsx";
import FeaturedCollections from "../components/sections/FeaturedCollections.jsx";
import BrandStory from "../components/sections/BrandStory.jsx";
import FeaturedProducts from "../components/sections/FeaturedProducts.jsx";
import WhyChooseUs from "../components/sections/WhyChooseUs.jsx";
import CTASection from "../components/sections/CTASection.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BrandStory />
      <FeaturedProducts />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
