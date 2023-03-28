from random import shuffle

# Using the input function, ask the user for a string. The string must be 10 characters long.
user_string = input('Input a string containing exactly 10 characters: ')


if len(user_string) < 10:
    print('string not long enough')
elif len(user_string) > 10 :
    print('string too long')

#  Then, print the first and last characters of the given text.   
print(user_string[0] + user_string[-1])

c = ''
for char in user_string:
    c += char
    print(c)


user_list = list(user_string)
shuffle(user_list)
print(''.join(user_list))