import json

json_file = 'week-3/day-4/course-notes/json/file.json'

with open(json_file, 'r')as file_obj:
    family = json.load(file_obj)
print(family)
children_info = family['children']

# for child in children_info:
    # print(f"Child name: {child['firstName']}")
    # print(f"Child age: {child['age']}")
#     if child['firstName'] == 'Alice':
#         child['favorite_color'] = 'Blue'
#     elif child['firstName'] == 'Bob':
#         child['favorite_color'] = 'Orange'

# with open(json_file,'w')as file_obj:
#     json.dump(family, file_obj, indent = 2, sort_keys=True)
