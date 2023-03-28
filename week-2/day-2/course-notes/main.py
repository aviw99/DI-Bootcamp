# exercise 1
list1 = [5, 10, 15, 20, 25, 50, 20]

idx = list1.index(20)
list1[idx] = 200

print(list1)

# exercise 2
a_tuple = (10, 20, 30, 40)
a, b, c, d = a_tuple
print(a)
print(b)
print(c)
print(d)

# exercise 3 - Accept a number from the user and print its multiplication table
number = int(input('input a number: '))
for i in range(1, 11):
   print(i * number)
   
# exercise 4 - Print the numbers from 1 to 10 using while loop
i = 1
while i <= 10:
    print(i)
    i += 1
    