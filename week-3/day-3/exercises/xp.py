# exercise 1
def exercise_one():
    """
    This is an example of how to use built-in Python functions.
    The code demonstrates the use of the abs(), int(), and input() functions. 
    The abs() function returns the absolute value of a number, while the int() function converts a string or float to an integer. 
    The input() function is used to read input from the user.
    This program first uses the abs() function to calculate the absolute value of a number. 
    Then, it uses the int() function to convert three different values to integers.
    Finally, it prompts the user to enter their name using the input() function, and prints a personalized greeting.
    """

    abs_num = -24.2
    abs_res = abs(abs_num)
    print(f'The absolute value of {abs_num} is: {abs_res}.')

    int_num_1 = 11.3
    int_num_2 = "33"
    int_num_3 = "1010"
    int_res_1 = int(int_num_1)
    int_res_2 = int(int_num_2)
    int_res_3 = int(int_num_3, base=2)
    print(f'The integer value of "{int_num_1}" is: {int_res_1}.')
    print(f'The integer value of "{int_num_2}" is: {int_res_2}.') 
    print(f'The integer value of "{int_num_3}" is: {int_res_3}.')  

    user_name = input("Enter your name: ")
    print(f'Welcome {user_name}!')

# exercise_one()
# print(exercise_one.__doc__)

# exercise 2
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):           # I dont understand how this is different from __str__()
        return f'{self.amount} {self.currency}s'
    
    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        elif isinstance(other, Currency):
            if self.currency == other.currency:
                return self.amount + other.amount
            else:
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            return NotImplemented      # I dont understand this
            
    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
        elif isinstance(other, Currency):
            if self.currency == other.currency:
                self.amount += other.amount
            else:
                raise ValueError("Cannot add different currencies")
        else:
            return NotImplemented
        return self
        
    


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

# print(str(c1))
# print(int(c1))
# print(repr(c1))
# print(c1 + 5)
# print(c1 + c2)
# print(c1)
# c1 += 5
# print(c1)
# c1 += c2
# print(c1)
print(c1 + c3)