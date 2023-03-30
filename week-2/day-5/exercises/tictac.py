cell = [' ' for x in range(9)]
current_player = 'X'

def display_board():
    row1 = f'*  {cell[0]}  |  {cell[1]}| {cell[2]}   *'
    row2 = f'*  {cell[3]}  |  {cell[4]}| {cell[5]}   *'
    row3 = f'*  {cell[6]}  |  {cell[7]}| {cell[8]}   *' 
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

def player_input(player):
    global current_player
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
    if cell[index] != 'X' and cell[index] != 'O':
        cell[index] = player
    else:
        print('That cell is not available. Please try again. ')
        if current_player != 'X':
            current_player = 'X'
        else:
            current_player = 'O'


def play():
    print('Welcome to TIC TAC TOE!')
    print('Player 1 is "X", Player 2 is "O"')
    global current_player
    while True:
        display_board()
        player_input(current_player)
        if current_player == 'X':
            current_player = 'O'
        else:
            current_player = 'X'
        if (cell[0] == cell[1] == cell[2] != ' ' or
            cell[3] == cell[4] == cell[5] != ' ' or
            cell[6] == cell[7] == cell[8] != ' ' or
            cell[0] == cell[3] == cell[6] != ' ' or
            cell[1] == cell[4] == cell[7] != ' ' or
            cell[2] == cell[5] == cell[8] != ' ' or
            cell[0] == cell[4] == cell[8] != ' ' or            
            cell[2] == cell[4] == cell[6] != ' '):
            display_board()
            if current_player == 'X':
                current_player = 'O'
            else:
                current_player = 'X'
            print(f"Congratulations, Player {current_player}! You've won!!!")
            break
        elif ' ' not in cell:
            display_board()
            print("Game over. It's a tie!!!")
            break

play()