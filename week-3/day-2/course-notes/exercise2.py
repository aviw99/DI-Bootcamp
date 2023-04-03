# password =1234
# user_pass = ''
# try:
#     user_pass = int(input('password: '))
#     while user_pass != password:
#         if user_pass == password:
#             print('password exepted!')
#         else:
#             user_pass = int(input('wrong password. input password: '))
#             if user_pass == password:
#                 print('password exepted!')
            
# except ValueError:
#     while type(user_pass) != int:
#         user_pass = int(input('enter a valid integer: '))
#         if type(user_pass) == int:
#             if user_pass == password:
#                 print('password exepted!')
#             else:
#                 user_pass = int(input('wrong password. input password: '))
#             if user_pass == password:
#                 print('password exepted!')
#         else:
#             user_pass = int(input('wrong password. input password: '))
#             if user_pass == password:
#                 print('password exepted!')
#     while user_pass != password:
#         if type(user_pass) == int:
#             if user_pass == password:
#                 print('password exepted!')
#             else:
#                 print('wrong password')
#                 break
#                 if user_pass == password:
#                     print('password exepted!')

# password = 1234
# user_pass = ''
# def password_exepted():
#     print('password exepted!')
# def wrong_password():
#     print('wrong password')
#     input_password()
# def not_int():
#     print('enter a valid integer')
#     input_password()
# def input_password():
#     try:
#         user_pass = int(input('enter password: '))
#         if user_pass == password:
#             password_exepted()
#         else:
#             wrong_password()
#     except ValueError:
#         not_int()
# input_password()

password =1234
logged_in = False
while not logged_in:
    try:
        user_pass = int(input('enter password: '))
        if user_pass == password:
            print('password exepted!')
            logged_in = True
        else:
            print('wrong password')
    except ValueError:
        print('enter a valid integer')





        # if __name__=='__main__":

# input pass()
# if  type = int:
    # if pass = pass:
    #   exepted()
# else - input int()

