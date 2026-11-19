def reverse_string(string):
    return string[::-1]

def vowel_checker(sentence):
    vowels = "aeiouAEIOU"
    count = 0
    for i in sentence:
        if i in vowels:
            count +=1
    return count
def word_finder(sentence):
    word = "bus"
    return word in sentence.lower()