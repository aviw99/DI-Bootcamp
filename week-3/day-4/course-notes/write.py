text = '''This is the 1  line in the text
This is the 2nd
3rd
4th'''

text_list = ['This is the 1st line in the text\n', 'This is the 2nd\n', '3rd\n', '4th\n' '...\n']
print(text_list)

filename = 'sample.txt'

# w - write
with open(filename, 'w') as file:
    file.writelines(text_list)
