import json


my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}


json_file = 'my_file.json'


# with open(json_file, 'w')as file:
#     json.dump(my_family, file, indent = 2, sort_keys=True)

with open(json_file, 'r')as file:
    my_family = json.load(file)

print(my_family)










# file_name = open('list.txt')



# with open(file_name, 'r')as file:
#     my_list = [line.strip() for line in file]

# print(my_list[0])
# def get_words_from_file():
#     pass