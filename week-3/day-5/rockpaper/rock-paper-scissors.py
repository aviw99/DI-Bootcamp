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
        user_input = Game().get_user_item()
      
        
         
        print(user_input)




    elif initial_input == '2':
        print('showing scores...')
    elif initial_input == '':
        print('goodbye')
    
  


main()
