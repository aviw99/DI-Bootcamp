from random import choice

class Game():

    def __init__(self):
        self.user = self.get_user_item()
        self.computer = self.get_computer_item()

    def get_user_item(self):
        self.user_choice = input("select: 'rock/'paper'/'scissors' ")
        while self.user_choice not in ['rock','paper','scissor']:
            self.user_choice = input("please input a valid choice: ")
        return self.user_choice

    def get_computer_item(self):
        return choice(['rock','paper','scissors'])
    
    def get_game_result(self):
        if self.user == self.computer:
            return "it's a draw"
        elif self.user == 'rock' and self.computer == 'scissors' or self.user == 'paper' and self.computer == 'rock' or self.user == 'scissors' and self.computer == 'paper':
            return 'you win!'
        else:
            return 'the computer wins :('

    def play(self):
        print(f'you chose: "{self.user}", the computer chose: "{self.computer}". The reselt is {self.get_game_result()}')
        return self.get_game_result()
    





    