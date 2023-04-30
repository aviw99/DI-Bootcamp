class Person:

    population = 0

    forbidden_letter = 'A'

    # attribute - a variable that is referenced to self
    
    def __init__(self, name, email):
        self.name = name 
        if self.name[0] == Person.forbidden_letter:
            raise ValueError()
        self.email = email
        Person.population += 1

    # design patterns 
    def add_bank_account(self, bank_account):
        self.bank_acount = bank_account



person1 = Person('Yossi', 'yossi@gmail.com')

print(person1.name)

person1.add_bank_account('12345')

print(person1.bank_acount)

person2 = Person('Steve', 'steve@gmail.com')
person1.country = 'USA'
# person3 = Person('Avi', 'avi@gmail')
print(person1.population)
