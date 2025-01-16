# Architectural Decision Record (ADR)

## Titre : Choix de Python comme langage pour le backend

### Contexte

Dans le cadre de la construction du backend pour notre chatbot intelligent, nous avons décidé d’utiliser Python comme langage principal. Python est un choix courant pour la gestion des modèles de langage, en particulier pour les applications impliquant des LLMs (Large Language Models), et est largement utilisé dans la communauté de l'intelligence artificielle et du machine learning.

### Évaluation des langages

#### Python

**Vue d'ensemble** : Python est un langage de programmation interprété, connu pour sa simplicité et sa lisibilité. Il est largement utilisé pour le développement de solutions d'IA, de machine learning et de data science grâce à son écosystème riche en bibliothèques et frameworks spécialisés.

**Points forts** :
- **Écosystème puissant pour l'IA** : Python dispose de nombreuses bibliothèques et frameworks dédiés à l'intelligence artificielle, au machine learning et à la gestion de modèles de langage (par exemple, TensorFlow, PyTorch, Hugging Face Transformers, etc.).
- **Support des LLMs** : Python est le langage de référence pour l'intégration, l'entraînement et l'exploitation des LLMs, avec une prise en charge étendue des bibliothèques permettant de travailler avec des modèles pré-entraînés.
- **Communauté active** : Une grande communauté de développeurs, de chercheurs et d'entreprises qui contribuent activement à son développement et à son écosystème.
- **Simplicité et lisibilité** : La syntaxe simple de Python facilite le développement rapide et la maintenance du code, ce qui est essentiel pour une équipe agile.
- **Interopérabilité** : Python s'intègre bien avec d'autres technologies et services, ce qui est crucial pour l'extension de notre application avec de nouveaux outils et services tiers.

**Points faibles** :
- **Performance** : En tant que langage interprété, Python peut être moins performant que des langages compilés comme C++ ou Go, bien que cela soit compensé par des bibliothèques optimisées et l'utilisation de solutions comme Cython ou NumPy pour les calculs intensifs.

#### Autres langages considérés

1. **JavaScript (Node.js)** :
   - Bien que populaire pour les applications web et les APIs, JavaScript n'offre pas le même niveau de support et d'écosystème pour l'intelligence artificielle que Python. Son utilisation pour les LLMs serait moins efficace et plus complexe.

2. **Java** :
   - Java est un langage robuste et performant, mais son écosystème de bibliothèques pour l'intelligence artificielle est moins développé par rapport à Python. De plus, Java nécessite plus de boilerplate et n'est pas aussi rapide à développer que Python pour des prototypes et des projets agiles.

3. **C++** :
   - Bien que C++ soit très performant, il est beaucoup plus complexe à utiliser et à maintenir que Python. De plus, l'écosystème d'outils de machine learning et de traitement du langage naturel est moins accessible en C++.

### Décision

Nous avons choisi Python pour les raisons suivantes :

- **Optimisation pour les LLMs** : Python est le langage le plus utilisé pour l'entraînement et l'exploitation de modèles de langage de grande taille (LLMs). Il bénéficie d'une vaste gamme de bibliothèques et de frameworks dédiés à l'IA et au machine learning, ce qui est crucial pour notre chatbot.
- **Écosystème riche et mature** : Python offre une large collection de bibliothèques qui facilitent le travail avec des LLMs, comme Hugging Face Transformers, TensorFlow, PyTorch et spaCy, qui sont déjà largement utilisés dans des projets similaires.
- **Rapidité de développement** : La simplicité et la lisibilité de Python permettent une mise en œuvre rapide et une facilité de maintenance, ce qui est essentiel pour un projet avec des cycles de développement rapides.
- **Communauté et support** : La communauté Python est extrêmement active dans le domaine de l'IA, avec un soutien constant en termes de mises à jour des bibliothèques, de forums de discussion et de documentation.
- **Adaptabilité** : Python est adapté aux prototypes rapides tout en étant capable de gérer des systèmes de production à grande échelle. De plus, il s'intègre facilement avec des services externes et des technologies modernes.

### Conséquences

**Positives** :
- Un accès direct à l'écosystème IA, facilitant le travail avec des modèles de langage pré-entraînés et l'ajout de nouvelles fonctionnalités à notre chatbot.
- Un développement rapide grâce à la simplicité et à la lisibilité de Python, ce qui accélère le cycle de livraison.
- Une grande flexibilité pour évoluer et intégrer de nouveaux outils ou frameworks si nécessaire.

**Négatives** :
- Moins performant que des langages compilés pour des tâches très intensives en calcul, mais cela peut être atténué par l'utilisation de bibliothèques spécialisées et de serveurs puissants pour les tâches les plus gourmandes en ressources.

### Alternatives considérées

Bien que d'autres langages comme JavaScript, Java et C++ aient été envisagés, Python s'est imposé comme le choix évident en raison de son écosystème riche pour l'intelligence artificielle et sa popularité dans le traitement des LLMs. Son support étendu, sa simplicité et son adaptabilité en font la meilleure option pour notre projet de chatbot intelligent.

### Date de la décision

16 janvier 2025

### Statut

Accepté