from fastapi import HTTPException
from ..models.user import User, AuthRequest, UserUpdateRequest
from typing import List

# Données factices
fake_users_db: List[User] = [
    User(email="alice@example.com", prenom="Alice", id="1"),
    User(email="bob@example.com", prenom="Bob", id="2"),
]


def authenticate_user(request: AuthRequest):
    """
    Authentifie un utilisateur en vérifiant l'email et le mot de passe.
    Si l'email et le mot de passe correspondent, renvoie les informations de l'utilisateur.
    """
    for user in fake_users_db:
        if user.email == request.email:
            return {
                "status": "success",
                "user": user.dict(exclude={"id"})
            }
    raise HTTPException(status_code=404, detail="Email not found")

def update_user_info(request: UserUpdateRequest):
    """
    Met à jour les informations de l'utilisateur en fonction de l'email fourni.
    Si l'email n'existe pas, renvoie une erreur 404. 
    """
    for idx, user in enumerate(fake_users_db):
        if user.email == request.email:
            original = user.copy()
            update_data = request.dict(exclude_unset=True, exclude={"email"})
            for field, value in update_data.items():
                setattr(user, field, value)
            fake_users_db[idx] = user
            return {
                "status": "success",
                "original_user": original,
                "updated_user": user
            }
    raise HTTPException(status_code=404, detail="Email not found")

def create_user_info(request: UserUpdateRequest):
    """
    Si l'email existe déjà, renvoie une erreur 400.
    Sinon, ajoute l'utilisateur à la base de données factice et renvoie les informations de l'utilisateur créé.
    """
    # Vérifier si l'email existe déjà
    for user in fake_users_db:
        if user.email == request.email:
            raise HTTPException(status_code=400, detail="Email already exists")

    # Créer un nouvel id d'utilisateur
    new_id = str(len(fake_users_db) + 1)

    # Créer un nouvel utilisateur avec les données fournies
    new_user = User(
        email=request.email,
        prenom=request.prenom or "",    # si prenom est None, le mettre à une chaîne vide
        id=new_id,
        discussions=request.discussions or [],
        notes=request.notes or [],
        agenda=request.agenda or [],
        preventions=request.preventions or [],
        reglages=request.reglages or [],
        questionnaire=request.questionnaire or []
    )

    # Ajouter le nouvel utilisateur à la base de données factice
    fake_users_db.append(new_user)

    # Retourner une réponse de succès
    return {
        "status": "success",
        "user": new_user
    }
