from fastapi import FastAPI, File, UploadFile
import aiofiles
import os
from typing import List

app = FastAPI(title="File Manager Api")

UPLOAD_DIR = 'uploads'
os.makedirs(UPLOAD_DIR, exist_ok=True)


@app.post('upload-single-file')
async def upload_single_file(file: UploadFile = File(...)):
    safe_name = os.path.basename(file.filename)
    file_path = os.path.join(UPLOAD_DIR, safe_name)
    contents = await file.read()

    async with aiofiles.open(file_path, 'wb') as out_file:
        await out_file.write(contents)

    return {
        "message": "File uploaded successfully",
        "filename": safe_name,
        "size_in_bytes": len(contents)
    }


@app.post('/upload-multiple-files')
async def upload_multiple_files(files: List[UploadFile] = File(...)):
    saved_files = []

    for file in files:
        safe_name = os.path.basename(file.filename)
        file_path = os.path.join(UPLOAD_DIR, safe_name)
        contents = await file.read()

        async with aiofiles.open(file_path, 'wb') as out_file:
            await out_file.write(contents)

        saved_files.append(safe_name)

    return {
        "message": f"{len(files)} files uploaded successfully",
        "filenames": saved_files
    }