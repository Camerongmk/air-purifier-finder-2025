
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  rating: string;
  bestFor: string;
  features: string[];
  description: string;
  amazonLink: string;
}

const ProductCard = ({
  name,
  image,
  price,
  rating,
  bestFor,
  features,
  description,
  amazonLink,
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-contain bg-gray-50 p-4"
          />
          <Badge className="absolute top-2 right-2 bg-blue-500">
            {rating}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-muted-foreground">Prix: <span className="text-blue-500 font-bold">{price}</span></p>
        </div>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          {bestFor}
        </Badge>
        <p className="text-sm">{description}</p>
        <div className="space-y-2">
          <p className="text-sm font-medium">Caractéristiques clés:</p>
          <ul className="text-sm space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="mr-2 h-4 w-4 text-green-500 mt-0.5"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" asChild>
          <a href={amazonLink} target="_blank" rel="noopener noreferrer">
            Voir sur Amazon
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
