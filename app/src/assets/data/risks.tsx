export type RiskItem = {
  title: string; // Title of the risk item
  slug: string; // Slug for the risk item (used in the URL)
  risks: string; // Risks associated with the item
  where: string; // Locations where the risk is present
  prevents: string; // Preventive measures to mitigate the risk
};

export type Risk = {
  title: string; // Title of the risk
  icon: string; // Icon representing the risk (https://lucide.dev/icons/)
  slug: string; // Slug for the risk (used in the URL)
  resume: string; // Main description of the risk
  description: string; // Detailed description of the risk
  items: RiskItem[]; // List of items related to the risk
};

const risks: Risk[] = [
  {
    title: "Lieu de vie",
    icon: "Heart",
    slug: "lieu-de-vie",
    resume: "Aménager les espaces pour la vie quotidienne.",
    description: "Certains éléments de votre lieu de vie peuvent s’avérer risqués avec l’âge.",
    items: [
      {
        title: "Le tapis",
        slug: "chutes-logement",
        risks: "Chutes : bords relevés, tapis glissants ou mal fixés.\nDéséquilibre : surface irrégulière ou épaisse.\nMobilité réduite : gêne pour les déambulateurs ou fauteuils.\nProblèmes respiratoires : accumulation de poussière et acariens.",
        where: "undefined",
        prevents: "Retirer le tapis\nAppliquer une surface antidérapante sous le tapis"
      }
    ]
  }
];

export default risks;