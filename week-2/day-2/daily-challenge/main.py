# user_num = int(input('input a number: '))
# user_len = int(input('input a length: '))

# def muliplier():
#     for i in range(1,user_len + 1):
#         m = user_num * i
#         print(m)

# muliplier()

user_str = input('input word: ')
user_list = list(user_str)   #school
length = len(user_list)-2    #3
index = 0                    #4
# while 4   <=   3
while index <= length:
    if user_list[index] == user_list[index + 1]:
        del user_list[index]
        length -= 1
    else:
        index += 1

new_str = ''.join(user_list)
print(new_str)


    
    
    
# list1 = ['t','h','i','n','g']
# string = ''.join(list1)
# print(list1)
# print(string)