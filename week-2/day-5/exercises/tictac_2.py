from numpy import array

class TicTacToe:

    """
    0 0 0
    0 0 0
    0 0 0
    """

    def __init__(self, player1, player2):
        self.board = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]]
        
        
    def move(self, pid, col, row):
        if self.board[col][row] is None:
            self.board[col][row] = pid
    
    def assess_wins(self):

        # For all horizontal wins
        for i in self.board:
            if sum(self.board[i]) in [0, 3]:
                return True
            

        # For all vertical wins
        transposed_array = array(self.board).transpose()
        for i in self.board:
            if sum(transposed_array[i]) in [0, 3]:
                return True
            

        # For all diagonal wins
        if self.board[0][0] == self.board[1][1] == self.board[2][2] or self.board[2][0] == self.board[1][1] == self.board[0][0]:
            return True

    def print_board(self):
        for i in self.board:
            print(' '.join(self.board[i]))
            
    

if __name__ == "__main__":
    name1 = input("What is the name of player 1?")
    name2 = input("What is the name of player 2?")

    ttt = TicTacToe(name1, name2)
    while (not ttt.assess_wins):
        ttt.print_board()
        for player in [name1, name2]:
            row = input("What row?")
            col = input("What col?")
            ttt.move(player, col, row)
