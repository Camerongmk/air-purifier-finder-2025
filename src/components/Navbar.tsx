
import { Button } from "@/components/ui/button";
import { Wind } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Wind className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold">RecherchePurificateurs</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#comparatif" className="text-sm font-medium transition-colors hover:text-blue-500">
            Comparatif
          </a>
          <a href="#top-produits" className="text-sm font-medium transition-colors hover:text-blue-500">
            Top Produits
          </a>
          <a href="#guide" className="text-sm font-medium transition-colors hover:text-blue-500">
            Guide d'achat
          </a>
          <a href="#faq" className="text-sm font-medium transition-colors hover:text-blue-500">
            FAQ
          </a>
        </nav>
        <Button variant="outline" className="hidden md:flex">
          Nos Recherches
        </Button>
        <Button variant="outline" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
