[Retour](../readme.md)
# Projet-TER/Endpoints

## Base
- **GET** `/` : Informations des services.
  - **Sorties** : 
    - `api_version` : Numéro de version.
    - `fastapi_version` : Numéro de version de fastapi.
    - `model` : Modèle de l'intelligence artificielle utilisée.

## Model
- **POST** `/ask` : Envoyer un prompt au serveur ollama.
  - **Entrées** : 
    - `prompt` (string, requis) : Description du prompt.
  - **Sorties** : 
    - `response` : Réponse au prompt envoyé.

## Authentification & Utilisateur

- **POST** `/login` : Connexion d'un utilisateur.
  - **Entrées** : 
    - `email` (string, requis)
    - `name` (string, requis)
  - **Sorties** :
    - `token` : Token JWT d'accès.
    - `user` : Données utilisateur (hors id).

- **GET** `/verify` : Vérification du token et récupération des informations utilisateur (token requis).
  - **Sorties** :
    - `user` : Données utilisateur.

- **POST** `/user` : Création d'un nouvel utilisateur.
  - **Entrées** :
    - `email` (string, requis)
    - `name` (string, requis)
    - autres champs optionnels (discussions, notes, agenda, etc.)
  - **Sorties** :
    - `token` : Token JWT d'accès.
    - `user` : Données utilisateur.

- **PATCH** `/user` : Mettre à jour les informations de l'utilisateur courant (token requis).
  - **Entrées** :
    - Champs utilisateur à modifier.
  - **Sorties** :
    - `user` : Données utilisateur mises à jour.

## Explication de l'architecture des fichiers/dossiers

- `main.py` : Point d'entrée principal de l'application FastAPI.
- `src/router.py` : Définition des routes principales de l'API.
- `src/controllers/` : Logique métier pour chaque ressource (ex : user_controller.py pour les utilisateurs).
- `src/models/` : Schémas de données (Pydantic) pour la validation et la sérialisation.
- `src/datas/` : Données simulées ou statiques (ex : users_db).
- `src/auth/` : Gestion de l'authentification (JWT, dépendances de sécurité).
- `docs/` : Documentation technique et endpoints.

## Explication du système de token (JWT)

L'API utilise des tokens JWT (JSON Web Token) pour sécuriser les routes nécessitant une authentification. Lors de la connexion ou de la création d'un utilisateur, un token est généré et renvoyé au client. Ce token doit être envoyé dans l'en-tête `Authorization` (Bearer) pour accéder aux routes protégées (`/users/me`, etc.).

- Le token contient l'email de l'utilisateur dans le champ `sub`.
- La vérification du token est faite à chaque requête protégée via une dépendance FastAPI.
- Si le token est invalide ou expiré, l'accès est refusé (erreur 401).

```mermaid
graph TD
    Client-->|POST /login|API
    API-->|Génère JWT|Client
    Client-->|GET /users/me (avec JWT)|API
    API-->|Vérifie JWT|API
    API-->|Renvoie données utilisateur|Client
```