
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ComparisonTable = () => {
  return (
    <section id="comparatif" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter">Tableau Comparatif 2025</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-lg">
            Comparez les caractéristiques des meilleurs purificateurs d'air abordables pour faire le choix idéal selon vos besoins.
          </p>
        </div>
        
        <div className="overflow-x-auto rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Modèle</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Surface (m²)</TableHead>
                <TableHead>CADR</TableHead>
                <TableHead>Filtration</TableHead>
                <TableHead>Niveau Sonore</TableHead>
                <TableHead>Note</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Levoit Core 300</TableCell>
                <TableCell>89,99 €</TableCell>
                <TableCell>41 m²</TableCell>
                <TableCell>187 m³/h</TableCell>
                <TableCell>HEPA H13</TableCell>
                <TableCell>24-50 dB</TableCell>
                <TableCell>
                  <Badge className="bg-green-500">9.2/10</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Xiaomi Air Purifier 4 Lite</TableCell>
                <TableCell>99,99 €</TableCell>
                <TableCell>43 m²</TableCell>
                <TableCell>360 m³/h</TableCell>
                <TableCell>HEPA H11</TableCell>
                <TableCell>33-61 dB</TableCell>
                <TableCell>
                  <Badge className="bg-green-500">9.0/10</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Philips AC1715/10</TableCell>
                <TableCell>149,99 €</TableCell>
                <TableCell>60 m²</TableCell>
                <TableCell>333 m³/h</TableCell>
                <TableCell>HEPA NanoProtect</TableCell>
                <TableCell>15-54 dB</TableCell>
                <TableCell>
                  <Badge className="bg-green-500">8.8/10</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Taotronics TT-AP001</TableCell>
                <TableCell>79,99 €</TableCell>
                <TableCell>30 m²</TableCell>
                <TableCell>150 m³/h</TableCell>
                <TableCell>HEPA H13</TableCell>
                <TableCell>25-45 dB</TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">8.6/10</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rowenta Pure Air Essential</TableCell>
                <TableCell>129,99 €</TableCell>
                <TableCell>45 m²</TableCell>
                <TableCell>230 m³/h</TableCell>
                <TableCell>NanoCaptur+</TableCell>
                <TableCell>32-52 dB</TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">8.5/10</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <p className="text-sm text-muted-foreground mt-4 text-center">
          * CADR: Clean Air Delivery Rate (débit d'air pur) - plus il est élevé, plus le purificateur est efficace.
        </p>
      </div>
    </section>
  );
};

export default ComparisonTable;
