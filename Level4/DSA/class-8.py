#Recursion is a common mathematical and programming concept. It means that a function calls itself. This has the benefit of meaning that you can loop through data to reach a result.

#Recursion has two parts:
    # 1.Base case: this is the condition that stops the recursion. it is the stopping point of the fucntion. 

    #  2.Recursive case: this is the condition that calls the function again. it is the looping point of the function. 


#basic structure of recursive function:
def recursive_function(n):
    if n == 21:
        return
    print(n, end='')
    recursive_function(n+1)


recursive_function(1)


def factorial(n):
    if n ==0 or n ==1:
        return 1
    return n * factorial(n-1)
print(factorial(5))


def fibo(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    return fibo(n-1) + fibo(n-2)
print(fibo(6))