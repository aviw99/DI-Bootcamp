

class Game:

    def __init__():
        self.cell = [' ' for x in range(9)]
        self.current_player = 'X'

        self.cell = [[None, None, None], [None, None, None], [None, None, None]]

    def display_board(self):
        row1 = f'*  {self.cell[0]}  |  {self.cell[1]}| {self.cell[2]}   *'
        row2 = f'*  {self.cell[3]}  |  {self.cell[4]}| {self.cell[5]}   *'
        row3 = f'*  {self.cell[6]}  |  {self.cell[7]}| {self.cell[8]}   *' 


        board = f"""
        TIC  TAC  TOE  
        *****************
        {row1}
        *  ---|---|---  *
        {row2}
        *  ---|---|---  *
        {row3}
        *****************
        """
        print(board)

    def player_input(self, player):
        row_move = ''
        while row_move not in [1,2,3]:
            row_move = int(input(f'Player {player}, input row (1, 2, 3): '))
            if row_move not in [1,2,3]:
                print('That is not an excepted input. Please try again. ')
        col_move = ''
        while col_move not in [1,2,3]:
            col_move = int(input(f'Player {player}, input column (1, 2, 3): '))
            if col_move not in [1,2,3]:
                print('That is not an excepted input. Please try again. ')
            
        index = (row_move - 1) * 3 + (col_move - 1)
        if self.cell[index] != 'X' and self.__class__cell[index] != 'O':
            self.cell[index] = player
        else:
            print('That cell is not available. Please try again. ')
            if self.current_player != 'X':
                self.current_player = 'X'
            else:
                self.current_player = 'O'


    def play(self):
        print('Welcome to TIC TAC TOE!')
        print('Player 1 is "X", Player 2 is "O"')
        global current_player
        while True:
            self.display_board()
            self.player_input(current_player)
            if self.current_player == 'X':
                self.current_player = 'O'
            else:
                self.current_player = 'X'
            if (self.cell[0] == self.cell[1] == self.cell[2] != ' ' or
                self.cell[3] == self.cell[4] == self.cell[5] != ' ' or
                self.cell[6] == self.cell[7] == self.cell[8] != ' ' or
                self.cell[0] == self.cell[3] == self.cell[6] != ' ' or
                self.cell[1] == self.cell[4] ==self. cell[7] != ' ' or
                self.cell[2] == self.cell[5] == self.cell[8] != ' ' or
                self.cell[0] == self.cell[4] == self.cell[8] != ' ' or            
                self.cell[2] == self.cell[4] == self.cell[6] != ' '):
                self.display_board()
                if self.current_player == 'X':
                    self.current_player = 'O'
                else:
                    self.current_player = 'X'
                print(f"Congratulations, Player {self.current_player}! You've won!!!")
                break
            if ' ' not in self.cell:
                self.display_board()
                print("Game over. It's a tie!!!")
                break



if __name__ == "__main__":
    game = Game()
    game.play()