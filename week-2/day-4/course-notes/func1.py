def print_something():
    print('something')

def add_two(num1, num2):
    return num1 + num2

def sep_str(text):
    str1, str2 = text.split(' ')
    return str1, str2

# exercise
def calculation(a, b):
    return a + b, a - b

res = calculation(40,10)
print(res)