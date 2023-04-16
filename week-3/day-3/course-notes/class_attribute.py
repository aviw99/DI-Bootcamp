class Object:

    number_objects_created = 0
                               

    def __init__(self) -> None:
        Object.number_objects_created += 1

Object()
Object()
Object()

print(Object.number_objects_created)
