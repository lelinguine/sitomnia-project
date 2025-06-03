from fastapi import APIRouter
from ..models.user import AuthRequest, UserUpdateRequest
from ..controllers.user_controller import authenticate_user

router = APIRouter()

@router.post("/auth")
async def authenticate(request: AuthRequest):
    return authenticate_user(request)

# @router.patch("/user")
# async def update_user(request: UserUpdateRequest):
#     return update_user_info(request)