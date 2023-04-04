from typing import List

class Person(object):

    name: str
    age: int
    gender: str

    def __init__(self, name: str, age: int, gender: str):
        self.name = name
        self.age = age
        self.gender = gender

    def __str__(self):
        return f"{self.name} is a {self.age} year old {self.gender}."

    def is_minor(self) -> bool:
        return self.age < 18
    
class Incredible(Person):
    
    incredible_name: str
    power: str

    def __init__(self, name: str, age: int, gender: str, incredible_name: str, power: str):
        self.super(name, age, gender)
        self.incredible_name = incredible_name
        self.power = power

    def __str__(self):
        return f"{self.name} is a {self.age} year old {self.gender}. S/he is nicknamed {self.incredible_name} and has the power of {self.power}."


    def use_power(self):
        print(self.power)


class Family(object):

    members: List[Person]

    def __init__(self):
        self.members = []

    def add_member(self, name, age, gender):
        p = Person(name, age, gender)
        self.members.append(p)
    
    def __str__(self):
        lst = [str(x) for x in self.members]
        if len(lst) < 1:
            return "[]"
        else:
            return '["' + '", "'.join(lst) + '"]'

class IncredibleFamily(Family):

    members: List[Incredible]

    def __init__(self):
        self.members = []

    
    def add_member(self, name, age, gender, incredible_name, power):
        p = Incredible(name, age, gender, incredible_name, power)
        self.members.append(p)

    def use_power(self, name):
        for fm in self.members:
            if fm.name == name:
                if not fm.is_minor():
                    fm.use_power()
                    return
                else:
                    raise LookupError(f"{name} is a minor.")
        raise LookupError(f"There is no incredible named {name}.")

if __name__ == "__main__":
    fam = Family()
    fam.add_member('steve',16,'male') 
    fam.add_member('pete',36,'male') 
    fam.add_member('sarah',26,'female') 
    fam.add_member('emma',11,'female')
    print(fam)

    