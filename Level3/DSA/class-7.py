def binary_search(my_list, targetSearch):
    low = 0 
    high = len(my_list)-1
    while low <= high:
       mid = int((low+high)/2)
       midValue = my_list[mid]
       if midValue == targetSearch:
           return mid
       elif midValue < targetSearch:
           low = midValue+1
       elif midValue > targetSearch:
           high = mid-1
    return -1

my_list = [1,2,3,4,5,6,7,8,9,10]

position = binary_search(my_list, 9)
print("Target found at position: ", position)