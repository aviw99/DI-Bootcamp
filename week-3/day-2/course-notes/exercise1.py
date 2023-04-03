# class Door:
#     def __init__(self, is_opened):
#         self.opened = is_opened
#         print(f'{self.opened} is open')

#     def open_door(self):
#         pass

#     def close_door(self):
#         pass

# class BlockedDoor(Door):
#     pass

# door = Door('door')
# blocked = BlockedDoor('door')


class Door:

    def __init__(self):
        self.is_opened = False

    def open(self):
        self.is_open = True

    def close(self):
        self.is_open = False
        
class BlockedDoor(Door):
    
    def open(self):
        func_name = open.__name__
        raise TypeError(f'{func_name}: Blocked door cannot be opened!')
    
    def close(self):
        raise TypeError('Blocked door cannot be closed!')
    
blocked = BlockedDoor()
blocked.open()
