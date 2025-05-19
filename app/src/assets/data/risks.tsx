export type RiskItem = {
  title: string; // Title of the risk item
  isChecked: boolean; // Indicates if the item is checked (for user interaction)
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
        isChecked: false,
        slug: "chutes-logement",
        risks: "- Chutes : bords relevés, tapis glissants ou mal fixés.\n- Déséquilibre : surface irrégulière ou épaisse.\n- Mobilité réduite : gêne pour les déambulateurs ou fauteuils.\n- Problèmes respiratoires : accumulation de poussière et acariens.",
        where: "Non précisé",
        prevents: "- Retirer le tapis\n- Appliquer une surface antidérapante sous le tapis"
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
        isChecked: false,
        slug: "brulures-cuisine",
        risks: "Brûlures graves, infection, perte de réflexes, troubles cognitifs.",
        where: "Cuisine (huile chaude, plaques, four, feu allumé oublié)",
        prevents: "- Ne jamais laisser de casseroles sans surveillance\n- Utiliser des maniques épaisses\n- Appareils à arrêt automatique\n- Aide d'un proche\n- Organisation de la cuisine à hauteur"
      },
      {
        title: "Coupures lors de la préparation",
        isChecked: false,
        slug: "coupures-cuisine",
        risks: "Coupures, infections, perte de dextérité ou vision.",
        where: "Utilisation de couteaux, boîtes de conserve, objets en verre ou métal cassés",
        prevents: "- Utiliser des couteaux ergonomiques\n- Éviter les outils complexes\n- Porter des gants\n- Demander de l'aide"
      },
      {
        title: "Intoxication alimentaire",
        isChecked: false,
        slug: "intoxication-alimentaire",
        risks: "Intoxication grave, affaiblissement du système immunitaire.",
        where: "Aliments périmés, mauvaise conservation, mauvaise hygiène",
        prevents: "- Vérifier les dates de péremption\n- Maintenir le frigo à 4°C\n- Se laver les mains\n- Nettoyer les surfaces"
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
        isChecked: false,
        slug: "intoxication-medicaments",
        risks: "Erreur de prise, surdosage, interactions dangereuses.",
        where: "Salle de bain, cuisine, confusion des prises",
        prevents: "- Utiliser un pilulier\n- Lire les notices\n- Consulter médecin ou pharmacien\n- Ne pas modifier les doses sans avis"
      },
      {
        title: "Déshydratation",
        isChecked: false,
        slug: "deshydratation",
        risks: "Confusion, fatigue, chutes, aggravation de maladies.",
        where: "À domicile, en période de chaleur ou maladie",
        prevents: "- Boire régulièrement\n- Consommer des aliments riches en eau\n- Surveiller les signes : bouche sèche, fatigue"
      },
      {
        title: "Dénutrition",
        isChecked: false,
        slug: "denutrition",
        risks: "Affaiblissement immunitaire, chutes, ralentissement de guérison.",
        where: "À domicile, en cas de perte d'appétit, solitude, maladie chronique",
        prevents: "- Maintenir une alimentation équilibrée\n- Surveiller le poids\n- Consulter un diététicien"
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
        isChecked: false,
        slug: "electrocution-incendie",
        risks: "Électrocution, incendie, courts-circuits.",
        where: "Prises surchargées, appareils anciens ou défectueux",
        prevents: "- Faire vérifier l'installation électrique\n- Éviter les multiprises\n- Débrancher les appareils\n- Installer des détecteurs"
      },
      {
        title: "Intoxication au monoxyde de carbone",
        isChecked: false,
        slug: "intoxication-co",
        risks: "Gaz incolore, inodore, mortel : maux de tête, nausées, perte de connaissance, décès.",
        where: "Logements mal ventilés, appareils à combustion, garages fermés",
        prevents: "- Faire réviser les chauffages\n- Aérer quotidiennement\n- Ne pas utiliser de groupe électrogène en intérieur\n- Installer un détecteur de CO"
      },
      {
        title: "Incendie domestique",
        isChecked: false,
        slug: "incendie-domestique",
        risks: "Blessures graves ou mort, difficulté à réagir rapidement.",
        where: "Cuisine (huile surchauffée, appareils), salon (bougies, cigarettes), chambres (chauffage)",
        prevents: "- Ne jamais laisser de cuisson sans surveillance\n- Éteindre les appareils après usage\n- Installer des détecteurs de fumée et les tester"
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
        isChecked: false,
        slug: "isolement",
        risks: "Dépression, dénutrition, déclin cognitif.",
        where: "À domicile, en cas de solitude ou perte de proches",
        prevents: "- Maintenir des contacts réguliers\n- Participer à des activités sociales\n- Utiliser la visioconférence ou le téléphone"
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
        isChecked: false,
        slug: "noyade",
        risks: "Perte de connaissance ou chute dans l'eau entraînant noyade.",
        where: "Baignoire, piscine, plans d'eau à proximité",
        prevents: "- Ne jamais se baigner seul\n- Utiliser des équipements de sécurité\n- Limiter l'accès aux zones à risque"
      },
      {
        title: "Suffocation",
        isChecked: false,
        slug: "suffocation",
        risks: "Asphyxie rapide, fausse route alimentaire.",
        where: "Pendant les repas",
        prevents: "- Adapter la texture des aliments\n- Manger lentement et assis\n- Consulter un professionnel en cas de troubles de la déglutition"
      }
    ]
  }
];

export default risks;