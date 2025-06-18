
from fastapi import HTTPException
from ..models.user import UserRequest
from ..auth.jwt_handler import create_access_token
from ..database.database import user_collection  
from bson import ObjectId

# Connexion / Login
async def login_user(request: UserRequest):
    user = await user_collection.find_one({"email": request.email})
    if user:
        token = create_access_token({"sub": user["email"]})
        user["_id"] = str(user["_id"])  
        return {"status": "success", "token": token, "user": user}
    raise HTTPException(status_code=404, detail="Email not found")

# Créer un nouvel utilisateur
async def create_user_info(request: UserRequest):
    existing = await user_collection.find_one({"email": request.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already exists")

    new_user = {
        "email": request.email,
        "name": request.name,
        "discussions": request.discussions or [],
        "notes": request.notes or [],
        "agenda": request.agenda or [],
        "preventions": request.preventions or [],
        "reglages": request.reglages or [{"textToSpeechEnabled": True, "sharePersonalData": True}],
        "questionnaire": request.questionnaire or [],
    }

    result = await user_collection.insert_one(new_user)
    token = create_access_token({"sub": new_user["email"]})
    new_user["_id"] = str(result.inserted_id)
    return {"status": "success", "token": token, "user": new_user}

# Récupérer les infos utilisateur
async def get_user_info(email: str):
    user = await user_collection.find_one({"email": email})
    if user:
        user["_id"] = str(user["_id"])
        return {"status": "success", "user": user}
    raise HTTPException(status_code=404, detail="User not found")

# Mise à jour des infos utilisateur
async def update_user_info(request: UserRequest, email: str):
    update_data = {
        k: v for k, v in request.dict(exclude_unset=True).items()
        if v is not None and k != "email"
    }
    result = await user_collection.update_one({"email": email}, {"$set": update_data})
    if result.modified_count:
        return await get_user_info(email)
    raise HTTPException(status_code=404, detail="User not found or no changes made")
