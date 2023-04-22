from random import choice

def menu():
    menu_choice = input("""
    ............Menu............
    . Press (1) for a new game .
    . Press (2) to show scores .
    . Press (Enter) to leave   .
    ............................
    """)
    while menu_choice not in ['1','2','']:
        menu_choice = input("please input a valid choice: ")
    return menu_choice     

def get_user_item():
    while True:
        user_item = input("select: 'rock/'paper'/'scissors' ")
        if user_item not in ['rock','paper','scissors']:
                print('please input a valid choice')
        else:
            return user_item
        
def get_computer_item():
    options = ['rock','paper','scissors']
    computer_item = choice(options)
    return computer_item

scores = {'Player': 0, 'Computer': 0}

def add_point(player):
    scores[player] += 1
    print(f"{player} scored! The current score is: {scores}")

def display_score():
    print("""
    
    
    current score: """)
    for _ in range(1):
        print(f'{scores}')

def main():
    while True:
        menu_choice = menu()
        if menu_choice == '1':
            print("""
            
            


            

            



            ...NEW GAME STARTING...""")
            a = get_user_item()
            b = get_computer_item()
            print(f"""




            you chose:          {a}
            the computer chose: {b}""")
            if a == b:
                print("it's a draw")
            else:
                if a == 'rock' and b == 'paper':
                    add_point('Computer')
                    print("you lose :(")
                elif a == 'rock' and b == 'scissors':
                    add_point('Player')
                    print('you win!')
                elif a == 'paper' and b == 'rock':
                    add_point('Player')
                    print('you win!')
                elif a == 'paper' and b == 'scissors':
                    add_point('Computer')
                    print('you lose :(')
                elif a == 'scissors' and b == 'paper':
                    add_point('Player')
                    print('you win!')
                elif a == 'scissors' and b == 'rock':
                    add_point('Computer')
                    print('you lose :(')
        elif menu_choice ==  '2':
            print('...SHOWING SCORES...')
            display_score()
        else:
            print('-GOODBYE')
            break

main()