from datetime import datetime

user_birthdate_input = input('input your birthday: (DD/MM/YYYY)')

user_birthdate_datetime = datetime.strptime(user_birthdate_input, "%d/%m/%Y")

age = datetime.now() - user_birthdate_datetime

years_ago = age.days // 365

last_digit = years_ago % 10

# candles = ''
candle = 'i'

# for i in range(0, last_digit):
#     candles += 'i '

cake = """
       |:H:a:p:p:y:|
     __|___________|__
    |^^^^^^^^^^^^^^^^^|
    |:B:i:r:t:h:d:a:y:|
    |                 |
    ~~~~~~~~~~~~~~~~~~~
"""

whole_cake = f"""
       ___{candle * last_digit}___
{cake}
"""

print(whole_cake)