from fastapi import APIRouter
from ..models.user import AuthRequest, UserUpdateRequest
from ..controllers.user_controller import authenticate_user, update_user_info, create_user_info

router = APIRouter()

@router.post("/auth")
async def authenticate(request: AuthRequest):
    return authenticate_user(request)

@router.patch("/user")
async def update_user(request: UserUpdateRequest):
    return update_user_info(request)

@router.post("/user")
async def create_user(request: UserUpdateRequest):
    return create_user_info(request)