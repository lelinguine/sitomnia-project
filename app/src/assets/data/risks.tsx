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
    description: "Certains éléments de votre lieu de vie peuvent s'avérer risqués avec l'âge.",
    items: [
      {
        title: "Le tapis",
        slug: "chutes-logement",
        risks: "Chutes : bords relevés, tapis glissants ou mal fixés.\nDéséquilibre : surface irrégulière ou épaisse.\nMobilité réduite : gêne pour les déambulateurs ou fauteuils.\nProblèmes respiratoires : accumulation de poussière et acariens.",
        where: "Non précisé",
        prevents: "Retirer le tapis\nAppliquer une surface antidérapante sous le tapis"
      }
    ]
  },
  {
    title: "Cuisine",
    icon: "Flame",
    slug: "cuisine",
    resume: "Attention aux accidents fréquents en cuisine.",
    description: "La cuisine est un lieu à haut risque pour les personnes âgées : brûlures, coupures, intoxications.",
    items: [
      {
        title: "Brûlures et accidents",
        slug: "brulures-cuisine",
        risks: "Brûlures graves, infection, perte de réflexes, troubles cognitifs.",
        where: "Cuisine (huile chaude, plaques, four, feu allumé oublié)",
        prevents: "Ne jamais laisser de casseroles sans surveillance\nUtiliser des maniques épaisses\nAppareils à arrêt automatique\nAide d'un proche\nOrganisation de la cuisine à hauteur"
      },
      {
        title: "Coupures lors de la préparation",
        slug: "coupures-cuisine",
        risks: "Coupures, infections, perte de dextérité ou vision.",
        where: "Utilisation de couteaux, boîtes de conserve, objets en verre ou métal cassés",
        prevents: "Utiliser des couteaux ergonomiques\nÉviter les outils complexes\nPorter des gants\nDemander de l'aide"
      },
      {
        title: "Intoxication alimentaire",
        slug: "intoxication-alimentaire",
        risks: "Intoxication grave, affaiblissement du système immunitaire.",
        where: "Aliments périmés, mauvaise conservation, mauvaise hygiène",
        prevents: "Vérifier les dates de péremption\nMaintenir le frigo à 4°C\nSe laver les mains\nNettoyer les surfaces"
      }
    ]
  },
  {
    title: "Santé et soins",
    icon: "Cross",
    slug: "sante-et-soins",
    resume: "Gérer les risques liés à la santé au quotidien.",
    description: "Certaines habitudes de santé peuvent représenter un danger important à domicile.",
    items: [
      {
        title: "Intoxication par médicaments",
        slug: "intoxication-medicaments",
        risks: "Erreur de prise, surdosage, interactions dangereuses.",
        where: "Salle de bain, cuisine, confusion des prises",
        prevents: "Utiliser un pilulier\nLire les notices\nConsulter médecin ou pharmacien\nNe pas modifier les doses sans avis"
      },
      {
        title: "Déshydratation",
        slug: "deshydratation",
        risks: "Confusion, fatigue, chutes, aggravation de maladies.",
        where: "À domicile, en période de chaleur ou maladie",
        prevents: "Boire régulièrement\nConsommer des aliments riches en eau\nSurveiller les signes : bouche sèche, fatigue"
      },
      {
        title: "Dénutrition",
        slug: "denutrition",
        risks: "Affaiblissement immunitaire, chutes, ralentissement de guérison.",
        where: "À domicile, en cas de perte d'appétit, solitude, maladie chronique",
        prevents: "Maintenir une alimentation équilibrée\nSurveiller le poids\nConsulter un diététicien"
      }
    ]
  },
  {
    title: "Équipements et installations",
    icon: "Zap",
    slug: "equipements",
    resume: "Assurer la sécurité des équipements domestiques.",
    description: "Les installations vétustes ou dangereuses augmentent les risques domestiques.",
    items: [
      {
        title: "Électrocution ou incendie",
        slug: "electrocution-incendie",
        risks: "Électrocution, incendie, courts-circuits.",
        where: "Prises surchargées, appareils anciens ou défectueux",
        prevents: "Faire vérifier l'installation électrique\nÉviter les multiprises\nDébrancher les appareils\nInstaller des détecteurs"
      },
      {
        title: "Intoxication au monoxyde de carbone",
        slug: "intoxication-co",
        risks: "Gaz incolore, inodore, mortel : maux de tête, nausées, perte de connaissance, décès.",
        where: "Logements mal ventilés, appareils à combustion, garages fermés",
        prevents: "Faire réviser les chauffages\nAérer quotidiennement\nNe pas utiliser de groupe électrogène en intérieur\nInstaller un détecteur de CO"
      },
      {
        title: "Incendie domestique",
        slug: "incendie-domestique",
        risks: "Blessures graves ou mort, difficulté à réagir rapidement.",
        where: "Cuisine (huile surchauffée, appareils), salon (bougies, cigarettes), chambres (chauffage)",
        prevents: "Ne jamais laisser de cuisson sans surveillance\nÉteindre les appareils après usage\nInstaller des détecteurs de fumée et les tester"
      }
    ]
  },
  {
    title: "Facteurs sociaux",
    icon: "Users",
    slug: "facteurs-sociaux",
    resume: "Garder le lien social pour prévenir d'autres risques.",
    description: "L'isolement ou la perte de contact social peut avoir des conséquences graves sur la santé.",
    items: [
      {
        title: "Isolement social",
        slug: "isolement",
        risks: "Dépression, dénutrition, déclin cognitif.",
        where: "À domicile, en cas de solitude ou perte de proches",
        prevents: "Maintenir des contacts réguliers\nParticiper à des activités sociales\nUtiliser la visioconférence ou le téléphone"
      }
    ]
  },
  {
    title: "Eau et bain",
    icon: "Droplet",
    slug: "eau-et-bain",
    resume: "Sécuriser les zones avec de l'eau.",
    description: "L'eau représente un danger réel dans les domiciles, en particulier pour les personnes âgées.",
    items: [
      {
        title: "Noyade",
        slug: "noyade",
        risks: "Perte de connaissance ou chute dans l'eau entraînant noyade.",
        where: "Baignoire, piscine, plans d'eau à proximité",
        prevents: "Ne jamais se baigner seul\nUtiliser des équipements de sécurité\nLimiter l'accès aux zones à risque"
      },
      {
        title: "Suffocation",
        slug: "suffocation",
        risks: "Asphyxie rapide, fausse route alimentaire.",
        where: "Pendant les repas",
        prevents: "Adapter la texture des aliments\nManger lentement et assis\nConsulter un professionnel en cas de troubles de la déglutition"
      }
    ]
  }
];

export default risks;