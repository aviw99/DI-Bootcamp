## exercise 1 - pets
#  class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# all_cats = [Bengal('Sam', 6), Chartreux('Pete', 2), Siamese('George',7)]
# sara_pets = Pets(all_cats)
# sara_pets.walk()

# exercise 2 - dogs
class Dog:
    def __init__(self,name,age,weight):
        self.name = name
        self.age = age 
        self.weight= weight
    
    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        speed = self.weight/self.age*10
        return f"{self.name} has a speed of {speed}"
    
    def fight(self,other_dog):
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight
        if self_score > other_score:
            return f"{self.name} won the fight"
        else:
            return f"{other_dog.name} won the fight"
        
dog1 = Dog('steve', 3, 12)
dog2 = Dog('pete', 5, 7)
dog3 = Dog('henry', 16, 8)

# print(dog1.bark())
# print(dog2.run_speed())
# print(dog2.fight(dog3))


