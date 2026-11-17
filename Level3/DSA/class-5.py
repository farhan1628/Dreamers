from collections import deque
def gen(n):
    queue = deque()
    queue.append("1")
    print("First", n , "binary numbers are:")
    for i in range(n):
        front = queue.popleft()
        print(front)
        queue.append(front + "0")
        queue.append(front + "1")
gen(5)