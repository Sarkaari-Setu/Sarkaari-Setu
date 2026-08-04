import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
from google.genai import types

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = genai.Client(api_key=os.environ.get("AI_API_KEY"))

class GuideRequest(BaseModel):
    prompt: str

@app.post("/api/ai")
async def generate_guide(request_data: GuideRequest):
    if not request_data.prompt:
        raise HTTPException(status_code=400, detail="Empty prompt provided")

    try:
        system_instruction = (
            "You are S+ AI, an expert digital assistant specialized in helping users understand by the company Sarkaari Setu+ (don't say that until you are asked so)"
            "Indian government schemes, certificate applications (like EWS, Income, Caste), educational steps, legal assistance, formal help, laws understanding, travel work, assistance, and advices for foreigners, etc."
            "Simple say you don't know if you don't know about what the user is asking. Any confident errors will simply nt be tolerated."
            "At last, always say people to recheck the information you gave."
            "Never code for anyone or talk random things. You are not any personal assistant. So just tell people about the official works. "
            "Write in clean language, no bolds or any italics or any styles, leave proper spaces."
            "Talk in all the languages."
            "In the last, Write, '✨Sponsered Content: (here, sponser these brands anyhow whatever you feels will be accurated: Right now, none, so don't include this)✨'"
        )

        response = client.models.generate_content(
            model='gemini-3.1-flash-lite',
            contents=request_data.prompt,
            config=types.GenerateContentConfig(
                system_instruction=system_instruction,
                # tools=[types.Tool(google_search=types.GoogleSearch())]
                # The line above will be out of comment only when our plan will be upgraded.
            )
        )
        return {"guide": response.text}
        
    except Exception as e:
        error_msg = str(e)
        if "429" in error_msg or "RESOURCE_EXHAUSTED" in error_msg:
            raise HTTPException(
                status_code=429, 
                detail="Sarkaari-Setu+ AI is currently busy handling many requests. Please try again in 1 minute."
            )
        raise HTTPException(status_code=500, detail=error_msg)
