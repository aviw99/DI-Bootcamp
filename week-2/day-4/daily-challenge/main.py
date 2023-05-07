matrix = [
    '7i3',
    'Tsi',
    'h%x',
    'i #',
    'sM ',
    '$a ',
    '#t%',
    '^r!'
]  

first = []
second = []
third = []

for index, el in enumerate(matrix):
    if el[0].isalpha():
        first.append(el[0])
    elif index < len(matrix)-1 and not matrix[index +1][0].isalpha():
        if not matrix[index-1][0].isalpha():
            first.append(' ')

    if el[1].isalpha():
        second.append(el[1])
    elif index < len(matrix)-1 and not matrix[index+1][1].isalpha():
        second.append(' ')  

    if el[2].isalpha():
        third.append(el[2])    
    elif index < len(matrix) -1 and not matrix[index+1][2].isalpha(): 
        third.append(' ')

first = ''.join(first)
second = ''.join(second)
third = ''.join(third)
the_list = [first,second,third]
result = ''.join(the_list)

print(result)
