from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests

app = FastAPI()

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "llama3.2:3b"

class PromptRequest(BaseModel):
    prompt: str

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/ask")
def ask_model(request: PromptRequest):
    payload = {
        "model": MODEL_NAME,
        "prompt": request.prompt,
        "stream": False
    }

    try:
        response = requests.post(OLLAMA_URL, json=payload)
        response.raise_for_status()
        data = response.json()
        return {"response": data.get("response")}
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))