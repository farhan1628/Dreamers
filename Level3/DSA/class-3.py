numbers = [2,4,6,8,10]
size = 3
for i in range(3):
    total=0
    for j in range(i, i + size):
        total = total+numbers[j]
    print(total)



numbers = [2,4,6,8,10]
size = 3
maximum = 0
for i in range(3):
    total = 0
    for j in range(i, i + size):
        total = total+numbers[j]
    if total > maximum:
        maximum = total

print(maximum)