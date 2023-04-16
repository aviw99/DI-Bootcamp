from func import adding as ad
import random
import string
import datetime
# xp+ exercise 1
# ad(9,56)

# xp+ exercise 2
def random_check(x: int):
    random_number = random.randint(1, 100)
    if 1 > x or x > 100:
        raise ValueError('enter a number between 1 and 100')
    elif x == random_number:
        print('Success message')

random_check(14)

# exercise 3
length = 5
char_set = string.ascii_letters
random_string = ''.join(random.choice(char_set) for _ in range(length))

# print(random_string)

# exercise 4
def display_date():
    now = datetime.datetime.now()
    print(now)

# display_date()

# exercise 5
def abs_jan_first():
    now = datetime.datetime.now()
    jan_first = datetime.datetime(2024, 1, 1)
    time_left = jan_first - now
    days_left = time_left.days
    hours_left = time_left
    print(f'The 1st of January is in {time_left} hours.')
# abs_jan_first()