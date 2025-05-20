
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CloudSnow, AirVent } from "lucide-react";

const BuyingGuide = () => {
  return (
    <section id="guide" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Guide d'Achat</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-lg">
            Comment choisir le purificateur d'air qui vous convient ?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AirVent className="h-5 w-5 mr-2 text-blue-500" />
                Les critères à prendre en compte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Surface de la pièce</h4>
                <p className="text-sm text-muted-foreground">
                  Le purificateur doit être adapté à la taille de la pièce où vous souhaitez l'utiliser. Chaque modèle indique la surface maximale recommandée en m².
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">CADR (Clean Air Delivery Rate)</h4>
                <p className="text-sm text-muted-foreground">
                  Ce débit d'air pur indique la quantité d'air filtré par heure. Plus il est élevé, plus le purificateur est efficace et rapide pour nettoyer l'air.
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Type de filtration</h4>
                <p className="text-sm text-muted-foreground">
                  Les filtres HEPA sont les plus efficaces, capturant jusqu'à 99,97% des particules de 0,3 micron. La norme H13 est particulièrement recommandée.
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Niveau sonore</h4>
                <p className="text-sm text-muted-foreground">
                  Important pour une utilisation dans une chambre à coucher. Cherchez un modèle avec un mode nuit silencieux (moins de 30 dB).
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CloudSnow className="h-5 w-5 mr-2 text-blue-500" />
                Fonctionnalités supplémentaires
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Capteurs de qualité de l'air</h4>
                <p className="text-sm text-muted-foreground">
                  Certains modèles sont équipés de capteurs qui mesurent la qualité de l'air en temps réel et ajustent automatiquement leur fonctionnement.
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Connectivité</h4>
                <p className="text-sm text-muted-foreground">
                  Les modèles connectés permettent un contrôle à distance via une application smartphone et offrent souvent des analyses détaillées de la qualité de l'air.
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Coût des filtres de rechange</h4>
                <p className="text-sm text-muted-foreground">
                  N'oubliez pas de considérer le prix des filtres à remplacer régulièrement (généralement tous les 6 à 12 mois) dans votre budget total.
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Consommation électrique</h4>
                <p className="text-sm text-muted-foreground">
                  Un facteur important pour une utilisation continue. Les modèles économes en énergie peuvent réduire significativement le coût d'utilisation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Types de filtres</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border rounded-md bg-blue-50">
                <h4 className="font-semibold mb-2">Filtres HEPA</h4>
                <p className="text-sm">Capturent 99,97% des particules de 0,3 micron, idéaux pour les allergènes, pollen, et poussières fines.</p>
              </div>
              <div className="p-4 border rounded-md bg-green-50">
                <h4 className="font-semibold mb-2">Filtres à charbon actif</h4>
                <p className="text-sm">Éliminent les odeurs, fumées et composés organiques volatils (COV).</p>
              </div>
              <div className="p-4 border rounded-md bg-purple-50">
                <h4 className="font-semibold mb-2">Préfiltres</h4>
                <p className="text-sm">Capturent les grosses particules comme les cheveux et la poussière, prolongeant la durée de vie du filtre HEPA.</p>
              </div>
              <div className="p-4 border rounded-md bg-yellow-50">
                <h4 className="font-semibold mb-2">Ionisateurs</h4>
                <p className="text-sm">Émettent des ions négatifs qui s'attachent aux particules pour les faire tomber, mais peuvent produire de l'ozone.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BuyingGuide;
