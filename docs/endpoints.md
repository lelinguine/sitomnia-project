[Retour](../readme.md)
# Projet-TER/Endpoints

## Base
- **GET** `/` : Informations des services.
  - **Sorties** : 
    - `api_version` : Numéro de version.
    - `fastapi_version` : Numéro de version de fastapi.
    - `model` : Modèle de l'intelligence artificielle utilisée.

## Model
  - **POST** `/ask` : Envoyer un prompt au server ollama.
    - **Entrées** : 
      - `prompt` (string, requis) : Description du prompt.
    - **Sorties** : 
      - `response` : Réponse au prompt envoyé.