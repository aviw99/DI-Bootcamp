# exercises gold exercise 1: retire
# def get_age(year, month, day):
#     year = 2023
#     month = 3
    # age = 
 
# exercises gold exercise 2: sum
#              3     6        
def calculate(num, limit):
    one = '1'
    out = 0
    for i in range(1, limit +1):
        multi = one * i
        res = num * int(multi)
        out += res
    return out

print(calculate(3, 4)) 

