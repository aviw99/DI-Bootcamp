import json

json_file = 'practice/file.json'

with open(json_file, 'r')as file:
    family = json.load(file)

children = family['children']

colors = ['red','blue']

# with open(json_file, 'w')as file:
for i, child in enumerate(children):
    child['favorite_color'] = colors[i]

# with open(json_file, 'w')as file:
#     json.dump(family, file, indent=2, sort_keys=True)




