# # exercise 1
# import random

# filename= 'list.txt'
# word_list = []

# def get_words_from_file():
#     with open(filename, 'r') as file:
#         for i in range(100):
#             word = file.readline().strip()
#             word_list.append(word)
#     return word_list


# def get_random_sentence(length: int):
#     word_list = get_words_from_file()
#     random_word = ''
#     new_sentence = []
#     for i in range(length):
#         random_word = random.choice(word_list)
#         new_sentence.append(random_word) 
#         res = ' '.join(new_sentence)
#     return res


# def lowercase(number: int):
#     word_list = get_random_sentence(number)
#     lowercase = word_list.lower()
#     print(lowercase)


# def main():
#     description = """
#         This Python program imports the random 
#         module and defines functions to read a 
#         list of words from a file, generate a 
#         random sentence of a specified length 
#         by selecting random words from the list, 
#         and convert the generated sentence to lowercase. 
#         When the program is run, the lowercase() function 
#         is called, which generates a random sentence of length 
#         8, converts it to lowercase, and prints it to the console. 
#         This program demonstrates how to use the random module 
#         to generate random sentences and how to manipulate strings 
#         using built-in methods such as lower().
#         """
#     print(description)
#     while True:
#         user_input = int(input('how long should the sentence be?(between 2-20) '))
#         if user_input < 2:
#             print('input valid number')
#             user_input = int(input('how long should the sentence be?(between 2-20) '))
#         elif user_input > 20:
#             print('input valid number')
#             user_input = int(input('how long should the sentence be?(between 2-20) '))
#         else:
#             lowercase(user_input)
#             get_random_sentence(user_input)
#             break


# main()
    

# # exercise 2
import json


filename = 'exercises/file.json'

with open(filename, 'r')as file:
   company = json.load(file)
   employee = company['company']['employee']
   salary = employee['payable']['salary']
   print(salary)
   
   
employee['birth_date']='1998'


with open(filename, 'w')as file:
   json.dump(company, file, indent=4)

