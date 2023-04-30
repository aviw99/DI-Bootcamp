def text_to_dict():
    user_text = input('Input some text: ')
    user_dict = {}
    for index, letter in enumerate(user_text):
        if letter not in user_dict:
            user_dict[letter] = [index]
        else:
            user_dict[letter].append(index)
    return user_dict

def encode_dict(dict_encode):
    for key, value in dict_encode.items():
        value *= 20
    return dict_encode

def new_text(dict_text):
    new_text = []
    for key, values in enumerate(dict_text):
        if values not in new_text:
            new_text.append(values)
        else:
            continue
    new_str = ''.join(new_text)
    print(new_str)


user_dict = text_to_dict()
dict_encode = encode_dict(user_dict)
new_text = new_text(dict_encode)