
import { Separator } from "@/components/ui/separator";
import { Wind } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 md:py-16 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Wind className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold">RecherchePurificateurs</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#" className="text-sm hover:text-blue-500">
              Accueil
            </a>
            <a href="#comparatif" className="text-sm hover:text-blue-500">
              Comparatif
            </a>
            <a href="#top-produits" className="text-sm hover:text-blue-500">
              Top Produits
            </a>
            <a href="#guide" className="text-sm hover:text-blue-500">
              Guide d'achat
            </a>
            <a href="#faq" className="text-sm hover:text-blue-500">
              FAQ
            </a>
          </div>
        </div>
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Recherche Purificateurs d'Air. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <p className="text-xs text-muted-foreground">
              Mis à jour le 20 mai 2025
            </p>
            <Separator orientation="vertical" className="h-4" />
            <p className="text-xs text-muted-foreground">
              Mentions légales
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
