from fastapi import HTTPException
from ..models.user import User, AuthRequest, UserUpdateRequest
from typing import List

# Données factices
fake_users_db: List[User] = [
    User(email="alice@example.com", prenom="Alice", id="1"),
    User(email="bob@example.com", prenom="Bob", id="2"),
]

def authenticate_user(request: AuthRequest):
    for user in fake_users_db:
        if user.email == request.email:
            return {
                "status": "success",
                "user": user.dict(exclude={"id"})
            }
    raise HTTPException(status_code=404, detail="Email not found")

# def update_user_info(request: UserUpdateRequest):
#     for idx, user in enumerate(fake_users_db):
#         if user.email == request.email:
#             original = user.copy()
#             update_data = request.dict(exclude_unset=True, exclude={"email"})
#             for field, value in update_data.items():
#                 setattr(user, field, value)
#             fake_users_db[idx] = user
#             return {
#                 "status": "success",
#                 "original_user": original,
#                 "updated_user": user
#             }
#     raise HTTPException(status_code=404, detail="Email not found")
