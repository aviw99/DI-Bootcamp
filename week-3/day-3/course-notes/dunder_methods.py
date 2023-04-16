class Car:

    def __init__(self, speed, acceleration) -> None:
        self.speed = speed
        self.acceleration = acceleration

    def __gt__(self, other_car):
        return self.speed > other_car.speed
    
    def __lt__(self, other_car):
        return self.speed < other_car.speed
    
    def __eq__(self, other_car):
        return self.speed == other_car.speed
    
    #    +,   -,   +=
    def __add__(self, other_car):
        return self.speed +other_car.speed
    
    def __iadd__(self, other_car):
        self.speed += other_car.speed
        return self

car1 = Car(200, 100)
car2 =Car(300,80)

car1 += car2
print(car1.speed)