from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

data = [
    {
        "id": 1,
        "title": "detective teenager",
        "author": "bot",
        "price": 400,
        "publisher": "our canvas",
    },
    {
        "id": 2,
        "title": "detective",
        "author": "asdfd",
        "price": 200,
        "publisher": "oasdfasdf",
    },
]


class Book(BaseModel):
    id: int
    title: str
    author: str
    price: float
    publisher: str


# Create a book
@app.post("/create-new-book")
def create_new_book(book: Book):
    data.append(book.dict())
    return {"message": "Book created successfully", "data": data}


# Read all books
@app.get("/books")
def get_all_books():
    return {"message": "All books retrieved successfully", "data": data}


# Get a specific book by ID
@app.get("/books/{id}")
def get_book_by_id(id: int):
    for book in data:
        if book["id"] == id:
            return {"message": "Book retrieved successfully", "data": book}

    raise HTTPException(status_code=404, detail="Book not found")


@app.put("/books/{id}")
def update_book_by_id(id: int, update_book: Book):
    for book in data:
        if book["id"] == id:
            book["title"] = update_book.title
            book["author"] = update_book.author
            book["price"] = update_book.price
            book["publisher"] = update_book.publisher
            return {"message": "Book updated successfully", "data": book}

    raise HTTPException(status_code=404, detail="Book not found")


@app.delete("/books/{id}")
def delete_book_by_ID(id: int):
    for book in data:
        if book["id"] == id:
            data.remove(book)
            return {"message": "Book deleted successfully", "data": book}

    raise HTTPException(status_code=404, detail="Book not found")