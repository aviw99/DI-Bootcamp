class Farm():
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, new_animal, num_animal=1):
        if new_animal in self.animals:
            self.animals[new_animal] += num_animal
        else:
            self.animals[new_animal] = num_animal
            
    def farm_info(self):
        print(f"{self.name}'s farm")
        for key, value in self.animals.items():
            print(f"{key}: {value}")
        print('E-I-E-I-O!')
        
    def get_animal_types(self):
        new_list = []
        for key, value in self.animals.items():
            new_list += [key]
        return new_list
    
    def get_short_info(self):
        newer_list = []
        for i in self.get_animal_types():
            newer_list += [i]
        print(f"McDonald's farm has {newer_list[0]}s, {newer_list[2]}s and {newer_list[1]}.")

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.farm_info()
print(macdonald.get_animal_types())
macdonald.get_short_info()