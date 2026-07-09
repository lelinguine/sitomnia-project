import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.router import router

load_dotenv()

MODEL_NAME = os.getenv("OLLAMA_MODEL", "llama3.2:1b")

app = FastAPI(root_path="/service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://sitomnia.valentinluginbuhl.fr",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
async def root():
    return {
        "status": "success",
        "api_version": "0.3-a",
        "fastapi_version": "0.110.0",
        "model": MODEL_NAME
    }