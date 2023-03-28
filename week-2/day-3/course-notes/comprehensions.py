numbers = []

for num in range(100):
    if num % 2 == 0:
        numbers.append(num)
        
# print(numbers)

numbers = [num for num in range(100) if num % 2 == 0]

# print(numbers)

alpha = 'abcdefg'
dict_en = dict(enumerate(alpha))

even_letters = {key: value for key, value in dict_en.items() if key % 2 == 0}

# print(even_letters)

word = 'hello'

word_list = [char for char in word]

# print(word_list)
