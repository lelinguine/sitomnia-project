# Architectural Decision Record (ADR)

## Titre : Choix de React pour le développement frontend d'un chatbot intelligent

### Contexte

Lors de la création du frontend de notre chatbot intelligent, nous avons évalué trois frameworks JavaScript populaires : Angular, React et Vue.js. Chacun de ces frameworks présente des caractéristiques distinctes qui répondent à différents besoins de développement.

### Évaluation des technologies

#### Angular

**Vue d'ensemble** : Un framework complet développé par Google, Angular propose un ensemble d'outils incluant le data binding bidirectionnel, l'injection de dépendances et une CLI pour la génération de projets.

**Points forts** :
- Structure fortement opinionnée, ce qui impose une certaine cohérence à travers le projet.
- Outils intégrés pour la gestion des formulaires, des requêtes HTTP et des tests.
- Documentation complète et support de niveau entreprise.

**Points faibles** :
- Courbe d'apprentissage plus raide en raison de sa complexité.
- Taille de bundle plus importante par rapport à d'autres frameworks.

#### React

**Vue d'ensemble** : Une bibliothèque développée par Facebook, React se concentre sur la création de composants UI réutilisables avec un DOM virtuel pour un rendu efficace.

**Points forts** :
- Grande flexibilité et absence d'opinions sur la structure, permettant aux développeurs de choisir les outils complémentaires (ex : Redux, React Query).
- Rendu efficace avec le DOM virtuel, particulièrement utile pour des applications dynamiques.
- Large écosystème et forte communauté de soutien.
- Facilité d'intégration dans des projets existants.

**Points faibles** :
- Nécessite des choix sur les outils et l'architecture, car ce n'est pas un framework complet.
- Dépend des bibliothèques tierces pour la gestion d'état et le routage.

#### Vue.js

**Vue d'ensemble** : Un framework progressif conçu pour la simplicité et l'adaptabilité, Vue.js est connu pour sa syntaxe facile à apprendre et son écosystème complet.

**Points forts** :
- Simple à apprendre et à utiliser, idéal pour des équipes ou projets plus petits.
- Léger et performant.
- Bien adapté pour une intégration dans des applications existantes.

**Points faibles** :
- Écosystème et communauté plus petits par rapport à React.
- Adoption limitée dans les environnements d'entreprise.

### Décision

Nous avons choisi React pour les raisons suivantes :

- **Flexibilité et modularité** : La nature non opinionnée de React nous permet de personnaliser l'architecture selon les besoins spécifiques de notre application de chatbot, en intégrant les outils de gestion d'état et de routage les plus adaptés.
- **Performance** : Le DOM virtuel garantit des mises à jour et des rendus efficaces, ce qui est crucial pour l'interactivité et la dynamique de l'interface d'un chatbot.
- **Communauté et écosystème** : L'écosystème étendu de React offre un accès à de nombreuses bibliothèques et outils, garantissant évolutivité et facilité d'intégration avec d'autres technologies.
- **Expertise de l'équipe** : Notre équipe possède une expérience préalable avec React, ce qui réduit le temps d'intégration et améliore la rapidité du développement.
- **Pérennité** : La large adoption de React et son maintien actif par Meta (anciennement Facebook) garantissent un soutien à long terme et sa pertinence future.

### Conséquences

**Positives** :
- L'architecture modulaire permet un développement rapide et des tests efficaces des composants.
- L'écosystème de React soutient des fonctionnalités avancées comme le lazy loading, optimisant ainsi l'expérience utilisateur.
- La familiarité avec React minimise la courbe d'apprentissage et accélère la livraison du projet.

**Négatives** :
- La configuration initiale peut nécessiter un peu plus de travail par rapport à des frameworks comme Angular.
- La dépendance aux bibliothèques tierces augmente la nécessité d'une gestion prudente des dépendances.

### Alternatives considérées

Bien qu'Angular et Vue.js aient été de bons candidats, ils ne correspondaient pas aussi bien aux exigences et contraintes spécifiques de notre projet. La courbe d'apprentissage plus raide et la taille de bundle plus grande d'Angular ont rendu ce choix moins attrayant, tandis que l'écosystème plus petit de Vue.js posait des défis pour l'évolutivité dans une application à haute complexité.

### Date de la décision

16 janvier 2025

### Statut

Accepté
