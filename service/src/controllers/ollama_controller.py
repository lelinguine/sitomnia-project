import httpx
import json
import os
from fastapi import HTTPException
from dotenv import load_dotenv
from ..models.ollama import PromptRequest

load_dotenv()

OLLAMA_HOST = os.getenv("OLLAMA_HOST", "192.168.1.24")
OLLAMA_PORT = os.getenv("OLLAMA_PORT", "11434")
MODEL_NAME = os.getenv("OLLAMA_MODEL", "llama3.2:1b")
OLLAMA_URL = f"http://{OLLAMA_HOST}:{OLLAMA_PORT}/api/chat"

async def stream_ollama_response(request: PromptRequest):
    payload = {
        "model": MODEL_NAME,
        "messages": [msg.model_dump() for msg in request.messages],
        "stream": True
    }

    async with httpx.AsyncClient(timeout=None) as client:
        async with client.stream("POST", OLLAMA_URL, json=payload) as response:
            if response.status_code != 200:
                raise HTTPException(status_code=response.status_code, detail=await response.aread())

            async for line in response.aiter_lines():
                if not line.strip():
                    continue
                try:
                    data = json.loads(line)
                    content = data.get("message", {}).get("content")
                    if content:
                        yield content
                except json.JSONDecodeError:
                    continue
                except Exception as e:
                    raise HTTPException(status_code=500, detail=f"Error processing response: {str(e)}")