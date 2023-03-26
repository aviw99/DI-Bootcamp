# exercise 1
print('Hello world ' * 4 )

# exercise 2 
print((99 ** 3) * 8)

# exercise 3
# false
# true
# false
# false
# false

# exercise 4
computer_brand = "apple"
print("I have an " + computer_brand + " computer")

# exercise 5
name = "Avi"
age = "23"
shoe_size = "43"
# info = "My name is " + name + ". I am " + age + " years old. My shoe size is " + shoe_size + "."
info = f"My name is {name}. I am {age} years old. My shoe size is {shoe_size}."
print(info)

# exercise 6
a = 3
b = 6
if a > b:
    print("Hello World")

# exercise 7
user_input = input("input a number: ")
user_input = int(user_input)
if user_input % 2 == 0:
    print('even')
else:
    print('odd')

# exercise 8 
user_name = input("what is your name? ")
if user_name == "Avi":
    print("funny message")

# exercise 9
user_height = input("what is your height in inches? ")
user_height = int(user_height)
if user_height > 145:
    print("you are tall enough to ride")
else:
    print("You need to grow some more to ride")
