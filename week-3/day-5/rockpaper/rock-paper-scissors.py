from game import Game 

def get_user_menu_choice():
    choice = input("""
           Menu:
    (1) Play a new game
    (2) Show scores
    Press Enter to leave
       """)
    while choice not in ['1','2','']:
        choice = input("please input a valid choice: ")
    return choice    

def print_results(results): 
    pass

def main():
    while True:
        initial_input = get_user_menu_choice()
        if initial_input == '1':
            print('NEW GAME STARTING...')
            # user_item: str
            # computer_item: str
            game = Game()
            a = Game.get_user_item
            b = game.get_computer_item
            print(f'results: you chose {a}, the computer chose {b}' )
            if a == b:
                print("it's not a draw")
            # elif user_item == computer_item:
            #     print("it's a draw")
            break
        elif initial_input == '2':
            print('SHOWING SCORES...')
            break
        elif initial_input == '':
            print('GOODBYE')
            break
    # if game.get_user_item() == game.get_computer_item():
        
main()
