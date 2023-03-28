import numpy as np
  
# # exercise 1
# # Create a set called my_fav_numbers with all your favorites numbers.
# my_fav_numbers = {1, 3, 43, 24, 76}
# print(my_fav_numbers)
# # Add two new numbers to the set.
# for i in [42, 55]:
#     my_fav_numbers.add(i)
# print(my_fav_numbers)
# # Remove the last number.
# my_fav_numbers_list = list(my_fav_numbers)
# resultList = my_fav_numbers_list[:-1]
# my_fav_numbers = set(resultList)
# print(my_fav_numbers)
# # Create a set called friend_fav_numbers with your friend’s favorites numbers.
# friend_fav_numbers = {44, 90,3 ,41}
# # Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)
  
# # exercise 2 - Given a tuple which value is integers, is it possible to add more integers to the tuple?
# #  - NO
# example = """
# my_tuple = (1, 2, 3, 4)
# my_tuple.add(6)
# AttributeError: 'tuple' object has no attribute 'add'
# """
# print(example)
  
# # exercise 3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# # Remove “Banana” from the list.
# basket.remove("Banana")
# # Remove “Blueberries” from the list
# basket.remove("Blueberries")
# # Add “Kiwi” to the end of the list.
# basket.append("Kiwi")
# # Add “Apples” to the beginning of the list.
# basket.insert(0, "Apples")
# # Count how many apples are in the basket.
# x = basket.count("Apples")
#  # Empty the basket.
# basket.clear()
# # Print(basket)
# print(basket)        

# # exercise 4
# # integer is a whole number, float is a number with a decimal point
# start = 1.5
# stop = 5.5
# step = 0.5
# float_range_array = np.arange(start, stop, step)
# float_range_list = list(float_range_array)
# print(float_range_list)

# # exercise 5
# # Use a for loop to print all numbers from 1 to 20, inclusive.
# for i in range (1, 21):
#     print(i)  
# # Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
# for x in range(1, 21):
#     if x % 2 == 0:
#         print(x)

# # exercise 6
# my_name = "Avi"
# user_name = ""
# while user_name != my_name:
#     user_name = input("Please input your name. ")

# # exercise 7
# user_fruits = input('Input you favorite fruits (seperate each fruit by a space). ').split()
# user_fruits_list = list(user_fruits)
# new_fruit = input('input a new fruit. ')
# # if statement below doesnt really work right
# if new_fruit in user_fruits_list:
#     print('You chose one of your favorite fruits! Enjoy!')
# else:
#     print('You chose a new fruit. I hope you enjoy')

toppings = []
choice = ''
while True:
    choice = input('input a topping or "quit": ')
    if choice != 'quit':
        toppings.append(choice)
    else:
        break
print("Toppings: ", toppings)


# exercise 8
# toppings = ''
# pie = ''
# while toppings == '':
#     toppings = input('input a pizza topping. ')
#     if toppings == 'quit':
#         break
#     else:
#         pie += toppings
#         print("I'll add that topping to your pizza")    
# while True:
#     toppings = input('input a new pizza topping. ')
#     if toppings == 'quit':
#         break
#     else:
#         pie += toppings
#         print("I'll add that topping to your pizza")

# print(pie)
