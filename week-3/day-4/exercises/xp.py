

# filename= 'word_list.txt'
# word_list = []

# def get_words_from_file():
#     with open(filename, 'r') as file:
#         for i in range(100):
#             word = file.readline().strip()
#             word_list.append(word)
#     print(file.tell())

# get_words_from_file()



# numbers = [5, 2, 8, 1, 9]
# sorted_numbers = sorted(numbers, key=lambda x: x)
# print(sorted_numbers)  # Output: [1, 2, 5, 8, 9]

numbers = [1,4,3,2,4,5,32,4,3,2,32,54,5,6,5,3,4,76,8,7,4,9,8,0,56,80,21,76]
sorted_numbers = list(sorted(numbers, key=lambda x: x))
# print(sorted_numbers)
even_numbers = list(filter(lambda x: x % 2 == 0,sorted_numbers))
odd_numbers = list(filter(lambda x: x % 2 != 0,sorted_numbers))
print(even_numbers)
print(odd_numbers)