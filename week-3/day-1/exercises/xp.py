# # exercise 1 - cats
# class Cat():
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

#     # def __str__(self):
#     #     return f'{self.name}, {self.age}'

# steve = Cat('Steve', 12)
# pete = Cat('Pete', 4)
# john = Cat('John', 7)

# cats = [steve, pete, john]
# def oldest_cat(cats):
#     oldest = cats[0]
#     for cat in cats:
#         if cat.age > oldest.age:
#             oldest = cat
#     print(f'The oldest cat is {oldest.name}, and is {oldest.age} years old.')

# oldest_cat(cats)

# # exercise 2 - dogs
# class Dog():
#     def __init__(self, dog_name, dog_height):
#         self.name = dog_name
#         self.height = dog_height

#     def __str__(self):
#         return f'{self.name}, {self.height}'

#     def bark(self):
#         print(f'{self.name} goes woof!')

#     def jump(self):
#         x = self.height * 2
#         print(f'{self.name} jumps {x} cm high!')


# davids_dog = Dog('Rex', 50)

# print(davids_dog)

# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog('Teacup', 20)

# print(sarahs_dog)

# sarahs_dog.bark()
# sarahs_dog.jump()

# dogs = [davids_dog, sarahs_dog]
# bigger = dogs[0]
 
# for dog in dogs:
#     if dog.height > bigger.height:
#         bigger = dog
     
# print(f'{bigger.name} is the bigger dog.')        

# # exercise 3 - song producer
# class Song():
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
    
#     # def __str__(self):
#     #     return f'{self.lyrics}'
        
#     def sing_me_a_song(self):
#         for x in self.lyrics:
#             print(x)

# stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()

# # exercise 4 - zoo
# class Zoo():
#     def __init__(self, zoo_name):
#         self.animals = []
#         self.name = zoo_name
    
#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals += new_animal
#             self.get_animals()

#     def get_animals(self):
#         print(self.animals)
#         return self.animals

#     def sell_animal(self, animal_sold):
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)
#             self.get_animals()

#     def sort_animals(self):
#         sorted = self.animals
#         sorted.sort()
#         sorted_list = []
#         x = []
#         for i in range(len(sorted)):
#             x.append(i+1)
#         res_dict = dict((key, value) for key, value in zip(x, sorted))
#         print(res_dict)

#     def ramat_gan_safari(self):
#         self.get_animals()
#         self.add_animal(['Elephant'])
#         self.sell_animal('Tiger')
#         self.sort_animals()

# my_zoo = Zoo('My Zoo')
# my_zoo.add_animal(['Zebra', 'Antelope', 'Lion'])
# my_zoo.add_animal(['Beaver', 'Tiger', 'Pig', 'Toad', 'Eagle', 'Aardvark'])
# my_zoo.ramat_gan_safari()
