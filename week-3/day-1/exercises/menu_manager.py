import json

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
        if name not in self.menu:
            raise ValueError('There is no menu item with this name.')
        else:
            self.menu.update({name: {'name':name,'price':price,'spice':spice,'gluten':gluten}})

    def remove_item(self, name):
        if name not in self.menu:
            raise ValueError('There is no menu item with this name')
        else:
            del self.menu[name]

        
    def print_menu(self):
        print(json.dumps(self.menu, indent=2))

x = {"Soup":   # list of dictionaries containing the menu
    {
        'name':'Soup', 
        'price':10, 
        'spice':'B', 
        'gluten':False
    }, 
    "Hamburger":{
        'name':'Hamburger', 
        'price':15, 
        'spice':'A',
        'gluten':True
    },
    "Salad":{
        'name':'Salad', 
        'price':18, 
        'spice':'A',
        'gluten':False
    },
    "French Fries": {
        'name':'French Fries', 
        'price':5, 
        'spice':'C',
        'gluten':False
    },
    "Beef Bourguignon": {
        'name':'Beef Bourguignon', 
        'price':25, 
        'spice':'B',
        'gluten':True
    }   
}

dishes = MenuManager(x)
dishes.add_item('Pizza',16,'C',True)
dishes.print_menu()
dishes.update_item('Pizza',12,'A',True)
dishes.print_menu()
dishes.remove_item('Pizza')
dishes.print_menu()
