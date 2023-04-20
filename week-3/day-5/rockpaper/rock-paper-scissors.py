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
    initial_input = get_user_menu_choice()
    if initial_input == '1':
        print('new game starting...')
        game = Game()
        while True:
            user_input = game.get_user_item() 
            
            print(user_input + ' - first iteration')
            if user_input in ['rock','paper','scissors']:
                print(user_input + ' - final iteration')
                break
    elif initial_input == '2':
        print('showing scores...')
    elif initial_input == '':
        print('goodbye')
    
main()
