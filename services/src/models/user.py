from pydantic import BaseModel, EmailStr
from typing import List, Optional

class AuthRequest(BaseModel):
    email: EmailStr

class User(BaseModel):
    email: EmailStr
    prenom: str
    id: str
    discussions: List = []
    notes: List = []
    agenda: List = []
    preventions: List = []
    reglages: List = []
    questionnaire: List = []

class UserUpdateRequest(BaseModel):
    email: EmailStr
    prenom: Optional[str] = None
    discussions: Optional[List] = None
    notes: Optional[List] = None
    agenda: Optional[List] = None
    preventions: Optional[List] = None
    reglages: Optional[List] = None
    questionnaire: Optional[List] = None