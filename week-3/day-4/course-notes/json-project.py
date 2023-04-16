import json


my_family = {
    'parents': ['Beth', 'Jerry'],
    'children': ['Mordy', 'Summer']
}

json_file = "my_file.json"

# with open(json_file,'w')as file_obj:
#     json.dump(my_family, file_obj)
# json_my_family = json.dumps(my_family)
# print(type(json_my_family))
# with open(json_file,'w')as file_obj:
#         json.dump(my_family, file_obj, indent = 2, sort_keys=True)
# with open(json_file,'r')as file_obj:
#     my_family = json.load(file_obj)
# print(my_family)
