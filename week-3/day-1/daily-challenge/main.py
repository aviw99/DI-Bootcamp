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
        
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.farm_info()