filename = '/Users/aviweiss/Desktop/projects/DI-Bootcamp/week-3/day-4/nameslist.txt'

with open(filename, 'r')as file:   
    lines = [line.rstrip('\n') for line in file.readlines()]
    file.seek(0)
# print(list(lines))

with open(filename, 'r')as file:
    for _ in range(4):
        file.readline()
    text_line_5 = file.readline()
    file.seek(0)
# print(text_line_5)

with open(filename, 'r')as file:
    text_5th_char = file.read(5)
    file.seek(0)
# print(text_5th_char)


with open(filename, 'r')as file:
    text_check = file.readlines()
    darth = []
    luke = []
    lea = []
    for item in text_check:
        if item == 'Darth\n':
            darth.append(item)
        elif item == 'Luke\n':
            luke.append(item)
        elif item == 'Lea\n':
            lea.append(item)
    # print(f'Darth appears {len(darth)} times, Luke appears {len(luke)} times, and Lea appears {len(lea)} times.')


# first_name = '\nAvi\n'
# with open(filename, 'a')as file:
#     file.write(first_name)

with open(filename, 'r')as file:
    text_list = file.readlines()
    modified_list = []
    last = ' Weiss\n'
    for item in text_list:
        item = item.strip()
        if 'Avi' in item:
            modified_list.append(item + last)
        else:
            modified_list.append(item + '\n')
print(modified_list)

# with open(filename, 'w') as file:
#     for item in modified_list:
#         file.write(item)
        
          
       
