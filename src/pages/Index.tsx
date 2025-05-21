
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import ProductsSection from "@/components/ProductsSection";
import BuyingGuide from "@/components/BuyingGuide";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <ComparisonTable />
        <ProductsSection />
        <BuyingGuide />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
