import random

# exercise 1
def display_message():
    print('Everything I am learning in the course. ')
# display_message()

# exercise 2
def favorite_book(title):
    print(f'One of my favorite books is {title}. ')
# favorite_book('My favorite book')

# exercise 3
def describe_city(city, country = 'Israel'):
    print(f'{city} is in {country}. ')
# describe_city('Herzliya')

# exercise 4
def compare(i):
    new = random.randint(0,100)
    if i == new:
        print('success')
    else:
        print('fail', i, new)
# compare(6)

# exercise 5

def make_shirt(size = 'l', text = 'python'):
    print(f'The size of the shirt is {size}, and the text is {text}. ')
# make_shirt()
# make_shirt('lrg', 'I love Python')
# make_shirt('lrg')
# make_shirt('med')
# make_shirt('any size','a different message')
# make_shirt(text = 'text_example', size = 'size_example')

# exercise 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magician_names):
    for name in magician_names:
        print(name)
# show_magicians(magician_names)

def make_great():
    great_name = [name + ' the Great' for name in magician_names]
    return great_name
magician_names = make_great()
# show_magicians(magician_names)

# exercise 7
season = input('input season: ')    # season == winter                         

def get_random_temp(season):
    if season == 'winter':
        temp = random.randint(-10,16)
    elif season == 'summer':
        temp = random.randint(22,40)
    elif season == 'autumn':
        temp = random.randint(17,21)
    return temp

def main():
    new_temp = get_random_temp(season) 
    print(f'The temperature right now is {new_temp} degrees Celsius. ')
    if new_temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today ")
    elif 0 < new_temp <= 16:
        print("Quit chilly! Don't forget your coat")
    elif 16 < new_temp <= 23:
        print("Cool weather")
    elif 23 < new_temp <= 32:
        print('Nice weather')
    else:
        print("warm weather")
    
main()

    

