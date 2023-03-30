# Create the initial game board
board = [' ' for x in range(9)]

# Define the function to display the board
def display_board():
    row1 = f"| {board[0]} | {board[1]} | {board[2]} |"
    row2 = f"| {board[3]} | {board[4]} | {board[5]} |"
    row3 = f"| {board[6]} | {board[7]} | {board[8]} |"
    print(f"""
      TIC  TAC  TOE  
    *****************
    {row1}
    *  ---|---|---  *
    {row2}
    *  ---|---|---  *
    {row3}
    *****************
    """)

# Define the function to get the player's move
def player_input(player):
    row_move = int(input('Player ' + player + ', input row (1, 2, 3): '))
    col_move = input('Player ' + player + ', input column (a, b, c): ')
    col_map = {'a': 0, 'b': 1, 'c': 2}
    index = (row_move - 1) * 3 + col_map[col_move]
    board[index] = player

# Define the main game loop
def play_game():
    print('Welcome to Tic Tac Toe!')
    print('Player 1 is X, Player 2 is O')
    current_player = 'X'
    while True:
        display_board()
        player_input(current_player)
        if current_player == 'X':
            current_player = 'O'
        else:
            current_player = 'X'
        # Check for a win
        if (board[0] == board[1] == board[2] != ' ' or
            board[3] == board[4] == board[5] != ' ' or
            board[6] == board[7] == board[8] != ' ' or
            board[0] == board[3] == board[6] != ' ' or
            board[1] == board[4] == board[7] != ' ' or
            board[2] == board[5] == board[8] != ' ' or
            board[0] == board[4] == board[8] != ' ' or
            board[2] == board[4] == board[6] != ' '):
            display_board()
            print('Congratulations, Player ' + current_player + ' wins!')
            break
        # Check for a tie
        elif ' ' not in board:
            display_board()
            print("It's a tie!")
            break

# Start the game
play_game()
