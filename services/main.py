from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
import fastapi

app = FastAPI()

OLLAMA_URL = "http://localhost:11434/api/chat"
MODEL_NAME = "llama3.2:3b"
API_VERSION = "1.0.0-a"

class PromptRequest(BaseModel):
    prompt: str

@app.get("/")
async def root():
    return {
        "api_version": API_VERSION,
        "fastapi_version": fastapi.__version__,
        "model": MODEL_NAME
    }

@app.post("/ask")
def ask_model(request: PromptRequest):
    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "user", "content": request.prompt}
        ],
        "stream": False
    }

    try:
        response = requests.post(OLLAMA_URL, json=payload)
        response.raise_for_status()
        data = response.json()
        return {"response": data.get("message", {}).get("content", "No content returned")}
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))