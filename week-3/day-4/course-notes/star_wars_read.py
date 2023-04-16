filename = 'star_wars.txt'

# Read the file line by line 
with open(filename, 'r') as file:
    text_lines = file.readlines()
    file.seek(0)
# print(text_lines)

# Read only the 5th line of the file
with open(filename, 'r') as file:
    for _ in range(4):
        file.readline()
    text_line_5 = file.readline()
    file.seek(0)
# print(text_line_5)

# Read only the 5th first characters of the file
with open(filename, 'r') as file:
    text_5th_char = file.read(5)
    file.seek(0)
# print(text_5th_char)

# Read all the file and return it as a list of strings. Then split each word
with open(filename, 'r') as file:
    text_file = file.read()
    text_file = text_file.split('\n')
    file.seek(0)
# print(text_file)

# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
with open(filename, 'r') as file:
    text_check = file.readlines()
    darth = []
    luke = []
    lea = []
    avi =[]
    for item in text_check:
        if item == 'Darth\n':
            darth.append(item)
        elif item == 'Luke\n':
            luke.append(item)
        elif item == 'Lea\n':
            lea.append(item)
        elif item == 'Avi\n':
            avi.append(item)
    occurences = f'Darth appears {len(darth)} times, Luke appears {len(luke)} times, Lea appears {len(lea)} times, and Avi appears {len(avi)} time.'
    file.seek(0)
    print(occurences)

# Append your first name at the end of the file
# first_name = 'Avi\n'
# with open(filename, 'a') as file:
#     file.write(first_name)

# Append "SkyWalker" next to each first name "Luke"
# sky_walk = 'SkyWalker'
# with open(filename, 'r') as file:
#     lines = file.readlines()
# with open(filename, 'a') as file:
#     for line in lines:
#         if line.strip() == 'Luke':
#             file.write(line.strip()+sky_walk+'\n')
