# Architectural Decision Record (ADR)

## Titre : Choix de FastAPI pour le développement du backend

### Contexte

Dans le cadre de la création de notre backend pour le chatbot intelligent, nous avons évalué plusieurs frameworks Python populaires : Django, Flask et FastAPI. Chaque framework présente des caractéristiques adaptées à différents types de projets.

### Évaluation des technologies

#### Django

**Vue d'ensemble** : Django est un framework web complet pour Python, offrant une solution tout-en-un avec un ORM intégré, un système d'authentification, et un panneau d'administration.

**Points forts** :
- Structure complète et opinionnée, facilitant le démarrage rapide de projets.
- Un ORM puissant pour la gestion des bases de données.
- Excellente documentation et communauté active.

**Points faibles** :
- Moins performant que d'autres frameworks pour des applications légères et orientées API.
- Lourdeur liée aux fonctionnalités intégrées qui peuvent ne pas être nécessaires pour des projets simples.

#### Flask

**Vue d'ensemble** : Flask est un micro-framework minimaliste pour Python, qui offre une grande flexibilité et une approche modulaire pour la construction d'applications web.

**Points forts** :
- Très léger et flexible, permettant de choisir les bibliothèques et outils nécessaires pour chaque projet.
- Facile à apprendre et à utiliser, idéal pour des projets plus petits.
- Large écosystème d'extensions.

**Points faibles** :
- Manque de fonctionnalités prêtes à l'emploi, nécessitant des choix additionnels pour des fonctionnalités comme la gestion des utilisateurs, l'authentification, etc.
- Moins performant pour des applications nécessitant une gestion concurrente élevée.

#### FastAPI

**Vue d'ensemble** : FastAPI est un framework moderne et rapide pour la création d'APIs RESTful avec Python. Il se distingue par sa vitesse de développement et ses performances élevées grâce à l'utilisation de Python type hints et de l'asyncio.

**Points forts** :
- Très rapide grâce à l'utilisation d'asyncio et de la validation automatique des données via Pydantic.
- Documentation interactive automatique générée avec Swagger UI.
- Support natif pour la validation des types, ce qui améliore la sécurité et la lisibilité du code.
- Excellentes performances pour les API RESTful à grande échelle.
- Facile à utiliser tout en étant adapté à des applications complexes.

**Points faibles** :
- Moins mature que Django, avec une communauté encore en développement.
- Pas de solution intégrée pour des fonctionnalités comme l'ORM (bien qu'il soit possible d'utiliser SQLAlchemy ou d'autres bibliothèques).

### Décision

Nous avons choisi FastAPI pour les raisons suivantes :

- **Performance** : FastAPI est conçu pour offrir des performances exceptionnelles, grâce à l'utilisation du modèle asynchrone. Cela permet d’assurer des réponses rapides et un traitement efficace des requêtes simultanées, ce qui est crucial pour notre application chatbot en temps réel.
- **Facilité d'utilisation et de développement** : La validation automatique des données et la documentation interactive générée par Swagger simplifient considérablement le développement et le débogage des API.
- **Compatibilité avec Python type hints** : L'utilisation des type hints et de Pydantic permet une meilleure gestion des données et une validation des entrées robuste, réduisant ainsi les erreurs et facilitant la maintenance du code.
- **Scalabilité** : FastAPI est conçu pour supporter une montée en charge importante, ce qui est essentiel pour une application comme notre chatbot, qui nécessitera de gérer un grand nombre de requêtes simultanées.
- **Communauté croissante** : Bien que plus récent que Django, FastAPI bénéficie d'une adoption croissante et d'une communauté active, ce qui assure une bonne pérennité du framework.

### Conséquences

**Positives** :
- Des performances optimisées pour les APIs, essentielles pour le temps réel et les interactions utilisateur fréquentes.
- Développement rapide grâce à l'auto-génération de la documentation et la validation automatique des données.
- Facilité d’intégration avec des outils modernes comme SQLAlchemy pour la gestion de base de données.

**Négatives** :
- Moins de fonctionnalités intégrées que Django, nécessitant l'ajout de bibliothèques externes pour certaines tâches comme l'authentification ou la gestion des utilisateurs.
- Moins de maturité que Django, ce qui peut poser des défis pour des cas d'utilisation très spécifiques ou complexes.

### Alternatives considérées

Bien que Django et Flask aient été des options viables, FastAPI a été préféré en raison de ses performances exceptionnelles et de son modèle de développement moderne et flexible. Django semblait trop lourd pour notre projet API-first, tandis que Flask, bien qu'efficace pour des projets plus petits, n’offrait pas les mêmes performances et capacités pour gérer un grand nombre de requêtes simultanées.

### Date de la décision

16 janvier 2025

### Statut

Accepté