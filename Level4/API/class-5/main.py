from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()

class User(BaseModel):
    name: str
    email: EmailStr
    password: str

@app.post("/signup")
def signup(user: User):
    return {
        "message": "Account created successfully",
        "user": user
    }