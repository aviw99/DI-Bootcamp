# def add_two(num1, num2):
#     return num1 + num2

add_two = lambda num1, num2: num1 + num2

print(add_two(1,2))


numbers = [1,2,3,4,5,6,7,8]

multiply_2 = lambda num: num * 2

words = ['dog', 'cat', 'ball']
capt = list(map(lambda word: word.capitalize(), words)) 
print(capt)