# # exercise 1
# user_word = {}
# user_input = input('input a word: ')
# for i, char in enumerate(user_input): 
#     if char not in user_word:
#         user_word[char] = [i]
#     else:
#         user_word[char].append(i)

# print(user_word)

# exercise 2
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1000",
  "Fertilizer": "$20"
}

wallet = "$300"
wallet_int = int(wallet[1:])
items_list = []

for key, value in items_purchase.items():
    items_purchase[key] = int(value[1:])

for key, value in items_purchase.items():
    if value <= wallet_int:
        items_list.append(key)
    else:
        continue
items_list.sort()
if items_list == []:
    print('Nothing')
print(items_list)
        

    
