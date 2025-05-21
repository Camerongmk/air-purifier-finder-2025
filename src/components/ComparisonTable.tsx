
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonTable = () => {
  return (
    <section id="comparatif" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Comparatif Simple des Purificateurs d'Air</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-lg">
            Un aperçu rapide des meilleurs purificateurs abordables en 2025
          </p>
        </div>
        
        <div className="overflow-x-auto rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Modèle</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Surface</TableHead>
                <TableHead>Note</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Levoit Core 300</TableCell>
                <TableCell>89,99 €</TableCell>
                <TableCell>41 m²</TableCell>
                <TableCell>9.2/10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Xiaomi Air Purifier 4 Lite</TableCell>
                <TableCell>99,99 €</TableCell>
                <TableCell>43 m²</TableCell>
                <TableCell>9.0/10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Philips AC1715/10</TableCell>
                <TableCell>149,99 €</TableCell>
                <TableCell>60 m²</TableCell>
                <TableCell>8.8/10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Taotronics TT-AP001</TableCell>
                <TableCell>79,99 €</TableCell>
                <TableCell>30 m²</TableCell>
                <TableCell>8.6/10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rowenta Pure Air Essential</TableCell>
                <TableCell>129,99 €</TableCell>
                <TableCell>45 m²</TableCell>
                <TableCell>8.5/10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <p className="text-sm text-muted-foreground mt-4 text-center">
          Mise à jour: Mai 2025
        </p>
      </div>
    </section>
  );
};

export default ComparisonTable;
