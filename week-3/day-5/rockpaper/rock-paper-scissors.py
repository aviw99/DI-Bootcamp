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
    # new_game = Game()
    choice = ''
    get_user_menu_choice()
    # if choice == '1':
    #     new_game.get_user_item()


main()
# get_user_menu_choice()