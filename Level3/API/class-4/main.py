from fastapi import FastAPI
from pydantic import BaseModel
app = FastAPI()
class Student(BaseModel):
    name: str
    age: int
    email: str
    department: str
    cgpa:float

@app.post("/create-student")
def create_student(student:Student):
    return{
        "Message:","Student created",
        "Student:", student
    }