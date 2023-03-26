user_string = input('Input a string containing exactly 10 characters: ')

if len(user_string) < 10:
    print('string not long enough')
elif len(user_string) > 10 :
    print('string too long')
print(user_string[0] + user_string[-1])

var = ''
for char in user_string:
    var += char
    print(var)

import random
user_list = list(user_string)
random.shuffle(user_list)
# user_string = ''.join(hi)
print(''.join(user_list))
# print(user_string)


