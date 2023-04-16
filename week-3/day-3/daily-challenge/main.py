from math import pi
import turtle

class Circle(object):
 
    def __init__(self,radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2

    def perimeter(self):
        the_perimeter = pi * 2 * self.radius
        return the_perimeter

    def area(self):
        the_area = pi * self.radius ** 2
        return the_area
    
    def __add__(self, other):
        return self.radius * pi * 2 + other.radius * pi * 2
    
    def __eq__(self, other):
        return self.radius == other.radius

    def __gt__(self, other):
        return self.radius > other.radius

    def __lt__(self, other):
        return self.radius < other.radius

    def sorted_list(self, *other):
        list_one = [self.radius]
        for item in other:
            list_one.append(item.radius)
        sorted_list = sorted(list_one, reverse=True)
        return sorted_list

circle1 = Circle(radius = 5.0)
circle2 = Circle(radius = 4.0)
# print(circle1.perimeter())
# print(circle2.perimeter())
# print(f'the combined circle has a perimeter of: {circle1 + circle2}')
# print(circle1 == circle2)
# print(circle1 > circle2)
# print(circle1 < circle2)
# print(circle1.sorted_list(circle2))
# turtle.circle(circle1.radius ** 2)