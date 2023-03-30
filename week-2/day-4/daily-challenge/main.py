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
# Combine characters from the same column and ignore non-alpha characters
text = ''
for col in range(len(matrix[0])):
    for row in range(len(matrix)):
        if matrix[row][col].isalpha():
            text += matrix[row][col]
# for char in matrix:
#     if char.isalpha == True:
#         continue
#     else: 
#         if char enumerate(matrix[+1]).isalpha == False:
#             char = '  '
print(text)
 