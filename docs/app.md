# Documentation de l'application Sitomnia

## Présentation

Sitomnia est une application React (Next.js) destinée à accompagner les personnes âgées dans leur quotidien. Elle propose un assistant personnel, un agenda, un carnet de notes, un questionnaire de personnalisation, ainsi que des informations de prévention.

---

## Architecture des dossiers

```
/app
  /src
    /app
      /acceuil
      /agenda
      /connexion
      /demarrage
      /notes
      /parametrage
      /prevention
      /questionnaire
      /questions
      /reglages
      /test
      layout.tsx
      base.css
      ...
    /assets
      /datas
        questions.tsx
        risks.tsx
      icon.png
    /components
      Bar.tsx
      Icon.tsx
      Auth.tsx
      /button
      /menu
      /modal
      /text
      ...
    /context
      AgendaContext.tsx
      DiscussionContext.tsx
      NotesContext.tsx
      RiskContext.tsx
      UserContext.tsx
    /utils
      adapt.ts
      date.ts
      ...
    /controller
      UserController.ts
```

### Description des principaux dossiers/fichiers

- **/src/app** : Contient toutes les pages de l'application, chaque dossier correspond à une route.
- **/src/assets/datas** : Données statiques (questions du questionnaire, risques, etc.).
- **/src/components** : Composants réutilisables (barre de navigation, boutons, modales, etc.).
- **/src/context** : Contexts React pour la gestion d'état global (utilisateur, agenda, notes, etc.).
- **/src/utils** : Fonctions utilitaires (adaptation des risques, formatage de date, etc.).
- **/src/controller** : Fonctions de communication avec l'API (utilisateur).

---

## Fonction de chaque page dans `/src/app`

- **/acceuil/page.tsx**  
  Page d'accueil après connexion. Affiche un message de bienvenue personnalisé et le menu principal.

- **/agenda/page.tsx**  
  Affiche l'agenda de l'utilisateur : événements à venir, événements récurrents, accès à l'historique.

- **/agenda/details/page.tsx**  
  Permet de créer, modifier ou supprimer un événement de l'agenda (titre, date, heure, note).

- **/agenda/historique/page.tsx**  
  Liste les événements passés, triés du plus récent au plus ancien.

- **/connexion/page.tsx**  
  Page de connexion par email. Redirige vers la création de compte si l'email n'existe pas.

- **/demarrage/page.tsx**  
  Page d'introduction présentant l'application et ses fonctionnalités.

- **/notes/page.tsx**  
  Liste des notes de l'utilisateur, possibilité d'accéder au détail de chaque note.

- **/notes/details/page.tsx**  
  Création ou modification d'une note, avec support de la dictée vocale.

- **/parametrage/page.tsx**  
  Création du compte utilisateur (saisie du prénom).

- **/prevention/page.tsx**  
  Liste des catégories de risques et conseils de prévention.

- **/prevention/list/page.tsx**  
  Liste des items de prévention pour une catégorie donnée.

- **/prevention/list/detail/page.tsx**  
  Détail d'un item de prévention (risques, lieux, conseils).

- **/questionnaire/page.tsx**  
  Questionnaire pour personnaliser l'expérience utilisateur (pièces du logement, équipements, etc.).

- **/questionnaire/resultats/page.tsx**  
  Affiche le récapitulatif des réponses au questionnaire.

- **/questions/page.tsx**  
  Historique des questions posées à l'assistant (IA).

- **/questions/discussion/page.tsx**  
  Interface de discussion avec l'assistant personnel (chat IA).

- **/reglages/page.tsx**  
  Paramètres de l'application : synthèse vocale, partage des données, relancer le questionnaire.

- **/test/page.tsx**  
  Page de test pour expérimenter des fonctionnalités (ex : synthèse vocale).

- **layout.tsx**  
  Layout principal de l'application, gère les providers de context et l'authentification.

---

## À propos du fichier `Auth.tsx`

Le fichier **Auth.tsx** (dans `/src/components`) est un composant de protection de routes. Il vérifie à chaque chargement de page si l'utilisateur est authentifié via un token stocké dans le localStorage.  
- Si le token est absent ou invalide, il redirige l'utilisateur vers la page de démarrage ou de connexion.
- Si le token est valide, il charge les données utilisateur (profil, réglages, questionnaire, discussions, notes, risques, agenda) dans les contextes globaux de l'application.
- Il empêche l'accès aux pages principales tant que l'utilisateur n'a pas complété le questionnaire.
- Ce composant englobe tout le contenu de l'application pour garantir la cohérence de l'état utilisateur et la sécurité des routes.

---

## Notes complémentaires

- L'application utilise React Context pour la gestion d'état global (utilisateur, agenda, notes, etc.).
- Les données utilisateur sont synchronisées via une API (voir `/src/controller/UserController.ts`).
- L'interface est adaptée pour une utilisation simple et accessible.