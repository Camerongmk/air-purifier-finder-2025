
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import ProductsSection from "@/components/ProductsSection";
import BuyingGuide from "@/components/BuyingGuide";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <meta property="og:image" content="https://images.unsplash.com/photo-1506018604433-2e0f043d3455?q=80&w=1000&auto=format&fit=crop" />
      </Helmet>
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
