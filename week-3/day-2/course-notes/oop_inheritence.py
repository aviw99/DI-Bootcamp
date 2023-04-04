class Animal:          #parent

    def __init__(self, name: str):
        self.name = name

    def breathing(self):
        out = f'{self.name} breathes'
        print(out)

class Mammal(Animal):  #child
    
    def produce_milk(self):
        out = f'{self.name} produces milk'
        print(out)

    def __init__(self, name: str, lungs: int):
        super().__init__(name)
        self.lungs = lungs

class SeaMammal(Mammal):

    def hold_breath(self):
        out = f'{self.name} holds breath'
        print(out)

dolphin = SeaMammal('dolphin')

