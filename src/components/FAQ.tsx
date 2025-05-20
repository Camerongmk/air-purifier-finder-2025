
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Questions Fréquentes</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-lg">
            Réponses aux questions les plus courantes sur les purificateurs d'air.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                À quelle fréquence faut-il changer les filtres d'un purificateur d'air ?
              </AccordionTrigger>
              <AccordionContent>
                En général, les filtres HEPA doivent être remplacés tous les 6 à 12 mois, tandis que les filtres à charbon actif peuvent nécessiter un remplacement tous les 3 à 6 mois. Cependant, cela dépend de plusieurs facteurs comme la qualité de l'air de votre environnement, la fréquence d'utilisation et les recommandations spécifiques du fabricant. Certains purificateurs sont équipés d'indicateurs qui vous alertent lorsqu'il est temps de changer les filtres.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Les purificateurs d'air sont-ils efficaces contre les allergies ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, les purificateurs d'air équipés de filtres HEPA sont très efficaces pour éliminer les allergènes comme le pollen, les acariens, les squames d'animaux et les moisissures. Pour les personnes souffrant d'allergies respiratoires, un purificateur d'air de qualité peut significativement réduire les symptômes en éliminant ces particules de l'air intérieur.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Quelle est la différence entre CADR et surface couverte ?
              </AccordionTrigger>
              <AccordionContent>
                Le CADR (Clean Air Delivery Rate) mesure le volume d'air filtré par heure en m³/h pour des polluants spécifiques. La surface couverte indique la taille maximale de la pièce en m² où le purificateur sera efficace. Un CADR élevé avec une plus grande surface couverte signifie généralement un purificateur plus puissant, capable de nettoyer l'air plus rapidement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Un purificateur d'air consomme-t-il beaucoup d'électricité ?
              </AccordionTrigger>
              <AccordionContent>
                La plupart des purificateurs d'air modernes sont assez économes en énergie, consommant généralement entre 15 et 100 watts selon la taille et la vitesse de fonctionnement. C'est comparable à une ampoule LED. Les modèles avec certification énergétique et modes ECO peuvent réduire davantage la consommation. Sur une utilisation continue, cela représente environ 3 à 15 euros par mois sur votre facture d'électricité.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Les purificateurs d'air éliminent-ils les odeurs et les COV ?
              </AccordionTrigger>
              <AccordionContent>
                Les purificateurs équipés de filtres à charbon actif sont efficaces pour éliminer les odeurs et les composés organiques volatils (COV). Le charbon actif absorbe ces molécules gazeuses que les filtres HEPA seuls ne peuvent pas capturer. Pour une élimination optimale des odeurs et des COV, recherchez un purificateur avec une quantité importante de charbon actif ou spécifiquement conçu pour traiter les polluants gazeux.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Un purificateur d'air peut-il remplacer une VMC ?
              </AccordionTrigger>
              <AccordionContent>
                Non, un purificateur d'air et une VMC (Ventilation Mécanique Contrôlée) ont des fonctions différentes. Un purificateur nettoie l'air en circulation dans une pièce, mais ne renouvelle pas l'air. Une VMC assure le renouvellement de l'air en évacuant l'air vicié et en introduisant de l'air frais. Idéalement, les deux systèmes sont complémentaires : la VMC renouvelle l'air, et le purificateur le nettoie des polluants.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
