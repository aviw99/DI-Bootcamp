from random import choice

class Game():

    def __init__(self,):
        self.user = self.get_user_item()
        self.computer = self.get_computer_item()

    def get_user_item(self):
        while True:
            user_item = ''
            user_item = input("select: 'rock/'paper'/'scissors' ")
            # print(f'you chose: {user_item}')
            if user_item not in ['rock','paper','scissors']:
                print('please input a valid choice')
            else:
                # print(user_item)
                return user_item 

    def get_computer_item(self):
        options = ['rock','paper','scissors']
        computer_item = choice(options)
        print(f'_________________computer chose: {computer_item}')
        return computer_item
    
    def get_game_result(self):
        if self.user == self.computer:
            return "it's a draw"
        elif self.user == 'rock' and self.computer == 'scissors' or self.user == 'paper' and self.computer == 'rock' or self.user == 'scissors' and self.computer == 'paper':
            return 'you win!'
        else:
            return 'the computer wins :('

    def play(self):
        print(f'you chose: "{self.user}", the computer chose: "{self.computer}". The result is {self.get_game_result()}')
        return self.get_game_result()
    




    