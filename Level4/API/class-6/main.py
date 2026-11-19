# from fastapi import FastAPI
# app = FastAPI()
# @app.get("/")
# def info():
#     return{
#         "Success": True,
#         "Message": "Information retrieved.",
#         "Name": "jack",
#         "Age": 34,
#     }




from fastapi import FastAPI
from pydantic  import BaseModel
app = FastAPI()
users = [
    {
        "id": 1,
        "name": "david",
        "age": 20,
        "country": "Bangladesh"
    },
    {
            "id": 2,
            "name": "Yuan",
            "age": 22,
            "country": "China"
        }
]
@app.get("/users")
def get_users():
    filtered_users = []
    for user in users:
        filtered_users.append({
            "id": user["id"],
            "name": user["name"],
            "country": user["country"]
        })
    return filtered_users




class User(BaseModel):
    id: int
    name: str
    age: int
    city: str
    country: str
    password: str


@app.post("/user-create", status_code=201)
def create_user(user: User):
    users.append(user)
    return {
        "success": True,
        "message": "User created successfully!",
        "user": user
    }

@app.get("/users/{user_id}")