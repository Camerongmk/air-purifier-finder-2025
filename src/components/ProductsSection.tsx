
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      name: "Levoit Core 300",
      image: "https://m.media-amazon.com/images/I/71Euh5zaA7L._AC_SL1500_.jpg",
      price: "89,99 €",
      rating: "9.2/10",
      bestFor: "Meilleur rapport qualité/prix",
      features: [
        "Filtre HEPA H13 à 3 étages",
        "Mode veille silencieux (24dB)",
        "Timer jusqu'à 8h",
        "Idéal pour pièces jusqu'à 41m²"
      ],
      description: "Le purificateur Levoit Core 300 offre une excellente filtration pour les chambres et salons de taille moyenne à un prix très accessible.",
      amazonLink: "#"
    },
    {
      name: "Xiaomi Air Purifier 4 Lite",
      image: "https://m.media-amazon.com/images/I/51enLs5vgfL._AC_SL1500_.jpg",
      price: "99,99 €",
      rating: "9.0/10",
      bestFor: "Meilleur connecté",
      features: [
        "Contrôle via application smartphone",
        "Capteur laser de particules",
        "Écran OLED",
        "Mode automatique intelligent"
      ],
      description: "Le Xiaomi Air Purifier 4 Lite combine performance et technologie avec un excellent rapport qualité-prix et des fonctionnalités connectées.",
      amazonLink: "#"
    },
    {
      name: "Philips AC1715/10",
      image: "https://m.media-amazon.com/images/I/61SzGgPvJWL._AC_SL1500_.jpg",
      price: "149,99 €",
      rating: "8.8/10",
      bestFor: "Meilleur pour les allergies",
      features: [
        "Filtre NanoProtect HEPA",
        "Mode sommeil ultra-silencieux",
        "Capteur AeraSense",
        "Affichage numérique de la qualité de l'air"
      ],
      description: "Le Philips AC1715/10 est particulièrement efficace contre les allergènes et dispose d'une excellente interface utilisateur.",
      amazonLink: "#"
    }
  ];

  return (
    <section id="top-produits" className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Les Meilleurs Purificateurs d'Air Pas Chers</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-lg">
            Notre sélection des modèles offrant le meilleur rapport qualité-prix en 2025.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              image={product.image}
              price={product.price}
              rating={product.rating}
              bestFor={product.bestFor}
              features={product.features}
              description={product.description}
              amazonLink={product.amazonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
