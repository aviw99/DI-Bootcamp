filename = 'sample.txt'

text_lines = []

#reading
with open (filename, 'r') as file:
    text_lines = file.readlines()

new_str = 'IN BETWEEN\n'

text_lines.insert(2, new_str)




#writing
with open(filename, 'w') as file:
    file.writelines(text_lines)