def search(array, key):
    for i in range(len(array)):
        if array[i] == key:
            return i 
    return None

array = [23,34,55,67,10,233,545,678]
result = search(array, 545)
print(result)