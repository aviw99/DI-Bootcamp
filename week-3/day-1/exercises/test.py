class MenuManager():
    def __init__(self, menu):
        self.menu = menu

    def add_item(self, name, price, spice, gluten):
        if name in self.menu:
            raise ValueError("There is already a menu item with this name.")
        else:
            self.menu[name] = {
                "name": name,
                "price": price,
                "spice": spice,
                "gluten": gluten
            }

    def update_item(self, name, price, spice, gluten):
        pass

    def remove_item(self, name):
        pass

x = [   # list of dictionaries containing the menu
    {
        'name':'Soup', 
        'price':10, 
        'spice':'B', 
        'gluten':False
    }, 
    {
        'name':'Hamburger', 
        'price':15, 
        'spice':'A',
        'gluten':True
    },
    {
        'name':'Salad', 
        'price':18, 
        'spice':'A',
        'gluten':False
    },
    {
        'name':'French Fries', 
        'price':5, 
        'spice':'C',
        'gluten':False
    },
    {
        'name':'Beef Bourguignon', 
        'price':25, 
        'spice':'B',
        'gluten':True
    }   
]

dishes = MenuManager(x)
dishes.add_item('Soup',10,'B',False)

