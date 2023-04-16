filename = 'sample.txt'

new_line = 'BBBBB'

# a - append
with open(filename, 'a') as file:
    file.write(new_line)