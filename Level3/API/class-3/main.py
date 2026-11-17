from fastapi import FastAPI
app = FastAPI()

students = [
    {
        "Name:","djkf",
        "ID:", "50",
        "Age:","30"
    },
    {
        "Name:","wjf",
        "ID:", "243",
        "Age:","13"
    },
    {
        "Name:","euibf",
        "ID:", "15",
        "Age:","15"
    }
]
@app.get("/students")
def get_all_students():
    return students
@app.get("/students/{student_ID}")
def get_student_by_id(student_ID:int):
    for i in students:
        if i["ID"] == student_ID:
            return i
    return{
        "Message:","Student is not found"
    }
