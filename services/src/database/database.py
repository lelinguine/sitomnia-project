# src/database/database.py

from motor.motor_asyncio import AsyncIOMotorClient

# Adresse de connexion MongoDB locale
MONGO_URI = "mongodb://localhost:27017"

# Connexion client
client = AsyncIOMotorClient(MONGO_URI)

# Base de données et collection
db = client["seniors_db"]
user_collection = db["users"]
