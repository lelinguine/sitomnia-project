# Architectural Decision Record (ADR)

## Titre : Choix d'un framework web plutôt qu'un framework mobile pour le chatbot

### Contexte

Dans le cadre du développement de notre agent conversationnel, nous avons envisagé deux options principales pour l'interface utilisateur : utiliser un framework web ou un framework mobile. Bien que le chatbot puisse être utilisé sur des appareils mobiles (tablettes ou smartphones), son usage principal n'est pas encore clairement défini, et une version 100 % dédiée aux mobiles n'est pas nécessaire à ce stade.

### Évaluation des options

#### Framework web

**Vue d'ensemble** : Les frameworks web permettent de développer des applications accessibles via un navigateur. Ils offrent des interfaces adaptables grâce à des techniques de responsive design ou des frameworks comme React, Angular ou Vue.js.

**Points forts** :
- **Portabilité** : Les applications web sont accessibles depuis n'importe quel appareil disposant d'un navigateur, sans besoin d'installation.
- **Développement rapide** : Les frameworks web sont souvent plus rapides à configurer et à développer, en particulier pour des prototypes.
- **Adaptabilité** : Avec un design responsive, une seule application peut être optimisée pour différents types d'appareils (ordinateurs, tablettes, smartphones).
- **Mise à jour centralisée** : Les changements sont immédiatement disponibles pour tous les utilisateurs, sans besoin de mises à jour via un App Store.
- **Flexibilité technique** : Possibilité d'intégrer rapidement des fonctionnalités tierces et de tester des concepts.

**Points faibles** :
- **Moins d’intégration avec les fonctionnalités natives** : Les frameworks web ont des limites pour accéder aux fonctionnalités spécifiques des appareils mobiles (caméra, notifications push, etc.).
- **Performance** : Une application web peut être légèrement moins performante qu'une application native, notamment pour des interactions intensives.
- **Connectivité** : Une application web dépend d'une connexion Internet, bien que des solutions comme les Progressive Web Apps (PWA) puissent pallier ce problème.

#### Framework mobile (natif ou multiplateforme)

**Vue d'ensemble** : Les frameworks mobiles comme Flutter, React Native ou Swift permettent de créer des applications qui s’exécutent directement sur les appareils mobiles, offrant une expérience utilisateur native ou quasi-native.

**Points forts** :
- **Expérience utilisateur optimisée** : Les applications mobiles offrent une meilleure intégration avec les fonctionnalités natives des appareils, comme les capteurs ou les notifications.
- **Performance native** : Les frameworks mobiles fournissent des performances optimales pour les interactions complexes.
- **Disponibilité hors ligne** : Les applications mobiles peuvent fonctionner sans connexion Internet dans certains cas.

**Points faibles** :
- **Coût et effort de développement** : Le développement mobile, même avec des frameworks multiplateformes, demande souvent plus de temps et d’effort, notamment pour respecter les exigences des App Stores.
- **Mises à jour** : Toute modification nécessite une publication sur les App Stores, ce qui ralentit le déploiement des évolutions.
- **Portabilité limitée** : Une application mobile ne peut pas être utilisée directement sur des appareils non mobiles sans adaptations spécifiques.

### Décision

Nous avons choisi d'utiliser un framework web pour le développement de l'interface utilisateur de notre chatbot, pour les raisons suivantes :

- **Simplicité et rapidité de développement** : Un framework web permet de développer rapidement un prototype fonctionnel sans se soucier des contraintes spécifiques aux App Stores ou des complexités liées à la création d'une application mobile native.
- **Accessibilité multiplateforme** : Le chatbot sera accessible depuis n'importe quel appareil équipé d'un navigateur, qu'il s'agisse d'un ordinateur, d'une tablette ou d'un smartphone, sans nécessiter d'installation.
- **Flexibilité et évolutivité** : Le développement web offre la possibilité d'adapter facilement l'interface utilisateur en fonction des retours utilisateurs ou de nouveaux besoins.
- **Incertitude sur les usages mobiles** : Le cas d'usage principal n'étant pas encore clairement orienté vers le mobile, le développement web permet de répondre aux besoins immédiats sans investir dans une solution mobile native.

### Conséquences

**Positives** :
- Une solution rapide à mettre en place, permettant de se concentrer sur les fonctionnalités principales du chatbot.
- Une portée plus large avec un seul code base, accessible à la fois sur desktop, tablette et smartphone.
- Une flexibilité accrue pour itérer sur le design et les fonctionnalités selon les besoins émergents.

**Négatives** :
- Une intégration limitée avec les fonctionnalités natives des appareils mobiles, comme les notifications push ou l’accès au matériel.
- Une performance potentiellement inférieure à celle d’une application native, notamment pour des interactions intensives.
- Une dépendance à une connexion Internet, bien que des solutions comme les PWAs puissent atténuer ce problème.

### Alternatives considérées

1. **Framework mobile natif ou multiplateforme** :
   - Rejeté pour éviter la complexité et le coût initial, ainsi que les contraintes des App Stores.
2. **Hybridation avec PWA** :
   - Peut être envisagée comme évolution future, permettant une meilleure expérience utilisateur mobile sans abandonner l'approche web initiale.

### Date de la décision

16 janvier 2025

### Statut

Accepté