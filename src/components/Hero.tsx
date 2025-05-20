
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center text-center md:text-left gap-8">
        <div className="space-y-3 flex-1">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Comparatif Purificateurs d'Air <span className="text-blue-500">Pas Chers</span> 2025
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Découvrez notre sélection des meilleurs purificateurs d'air abordables pour améliorer la qualité de l'air de votre maison.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Voir le comparatif
            </Button>
            <Button size="lg" variant="outline">
              Guide d'achat
            </Button>
          </div>
          <div className="w-full max-w-3xl p-4 rounded-lg bg-white shadow-lg mt-8">
            <p className="text-sm text-muted-foreground mb-2">
              Mis à jour le 20 mai 2025
            </p>
            <p className="font-medium">
              Après avoir testé plus de 30 modèles, nous avons sélectionné les 10 meilleurs purificateurs d'air abordables du marché.
            </p>
          </div>
        </div>
        <div className="flex-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1506018604433-2e0f043d3455?q=80&w=1000&auto=format&fit=crop" 
            alt="Purificateur d'air moderne dans un salon" 
            className="rounded-lg shadow-lg w-full max-w-md mx-auto"
          />
          <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg hidden md:block">
            <p className="font-bold">Qualité de l'air</p>
            <p className="text-sm">Protégez votre santé</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
