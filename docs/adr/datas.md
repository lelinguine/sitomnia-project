# Architectural Decision Record (ADR)

## Titre : Pertinence de l'intégration d'une base de données pour un prototype d'agent conversationnel avec un LLM

### Contexte

Dans le cadre du développement de notre prototype d'agent conversationnel utilisant un modèle de langage de grande taille (LLM), nous avons envisagé l'intégration d'une base de données pour la gestion des informations utilisateurs et des conversations. Toutefois, étant donné que le projet est encore au stade de prototype, la question se pose de savoir si cette complexité supplémentaire est nécessaire dès le départ.

### Évaluation des options

#### Intégration d'une base de données

**Vue d'ensemble** : L'intégration d'une base de données permettrait de stocker de manière persistante les informations liées aux utilisateurs, aux conversations et à d'autres données spécifiques, facilitant ainsi la gestion et l'analyse des interactions à long terme.

**Points forts** :
- **Persistance des données** : La base de données permettrait de conserver les informations utilisateurs et les historiques de conversations entre les sessions, ce qui peut être utile pour la personnalisation de l'expérience.
- **Scalabilité** : Une base de données permettrait d'évoluer plus facilement à mesure que le projet se développe, en offrant une gestion structurée et optimisée des données.
- **Facilité d’analyse** : Les données structurées seraient plus faciles à analyser, permettant des insights sur les interactions et l'amélioration du modèle.

**Points faibles** :
- **Complexité supplémentaire** : L'intégration et la gestion d'une base de données ajoutent de la complexité au projet, notamment en termes de configuration, de sécurité des données et de gestion des requêtes.
- **Temps et effort** : La mise en place et la gestion de la base de données peuvent ralentir le développement initial du prototype, ce qui n'est peut-être pas nécessaire dans cette phase précoce.
- **Besoin de gestion des erreurs et des pannes** : Les systèmes de bases de données nécessitent une gestion spécifique des erreurs, des pannes et des backups, ce qui ajoute une couche de maintenance supplémentaire.

#### Gestion locale des données (sans base de données)

**Vue d'ensemble** : En gérant les données localement, l'agent conversationnel pourrait stocker les informations temporairement en mémoire ou dans des fichiers locaux pendant la session, sans nécessiter de persistance entre les sessions.

**Points forts** :
- **Simplicité et rapidité** : La gestion locale des données permet de réduire la complexité du projet en évitant l'intégration d'une base de données et ses configurations.
- **Agilité** : Cela permet un développement rapide, sans se soucier des aspects liés à la gestion d'une base de données.
- **Économie de ressources** : Moins de ressources sont nécessaires pour la gestion des données et des opérations sur la base de données, ce qui peut être un avantage pour un prototype.

**Points faibles** :
- **Absence de persistance** : Les données ne sont pas conservées après chaque session, ce qui limite la capacité de personnalisation de l'agent conversationnel sur le long terme.
- **Limité en termes d'évolutivité** : Si l'agent conversationnel évolue et devient plus complexe, la gestion des données locales pourrait ne pas être suffisante pour répondre aux nouveaux besoins.

### Décision

Nous avons choisi de ne pas intégrer une base de données dans un premier temps pour les raisons suivantes :

- **Simplicité et rapidité de développement** : L'absence de base de données permet de réduire la complexité du projet et d'éviter de perdre du temps sur des aspects techniques qui ne sont pas critiques à ce stade du prototype.
- **Focalisation sur l'agent conversationnel et le LLM** : L'objectif initial est de tester et d'évaluer l'agent conversationnel dans sa capacité à interagir avec les utilisateurs. Ajouter une base de données à ce stade pourrait détourner l'attention des objectifs principaux du projet.
- **Gestion locale des données suffisante pour le prototype** : Dans la phase de prototype, la gestion temporaire des données (en mémoire ou dans des fichiers locaux) est suffisante pour tester les fonctionnalités de base et recueillir des retours sur l'interaction avec le LLM.
- **Évolution future** : Si le prototype devient plus mature et que des fonctionnalités de persistance des données deviennent nécessaires, nous pourrons envisager d'ajouter une base de données à ce moment-là, en tenant compte de l'architecture et des besoins du système à ce moment-là.

### Conséquences

**Positives** :
- Développement rapide et simplifié, permettant de se concentrer sur l'agent conversationnel et l'optimisation de l'interaction utilisateur.
- Réduction des coûts et des ressources nécessaires pour la gestion d'une base de données au début du projet.
- Flexibilité pour évoluer vers une solution de gestion de données plus robuste à l'avenir.

**Négatives** :
- Absence de persistance des données, ce qui limite la capacité à personnaliser l'expérience utilisateur au-delà de la session en cours.
- Le manque de stockage persistant pourrait rendre difficile la gestion des historiques de conversation ou l'analyse détaillée des interactions sur le long terme.

### Alternatives considérées

L'intégration d'une base de données a été envisagée, mais elle a été rejetée à ce stade en raison de la complexité supplémentaire qu'elle apporterait sans une nécessité immédiate. La gestion locale des données a été jugée plus adaptée pour un prototype, permettant ainsi de se concentrer sur les aspects essentiels de l'agent conversationnel sans ajouter de surcharge technique.

### Date de la décision

16 janvier 2025

### Statut

Accepté