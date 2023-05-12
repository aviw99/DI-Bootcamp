from sql import MenuItem
import psycopg2



HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'awmac'
DATABASE = 'restaurant'
PORT = '5432'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT )
cursor = connection.cursor()


def load_manager(name, description, price):
    item = MenuItem(name, description, price)
    # if method == 'add':
    #     item.save()
    # elif method  == 'delete':
    #     item.delete()
    # elif method == 'update':
    #     set_name = input('new name: ')
    #     where_name = input('old name: ')
    #     item.update(set_name, where_name)
    item.all()


def show_user_menu(name, description, price):
    item = MenuItem(name, description, price)
    user_menu = input('choose function:(add/delete/update) ')
    if user_menu == 'add':
        item.save()
    elif user_menu == 'delete':
        item.delete()
    elif user_menu == 'update':
        set_name = input('new name: ')
        where_name = input('old name: ')
        item.update(set_name, where_name)
    

def add_item_to_menu(name, description, price):
    item = MenuItem(name, description, price)
    add_item = input('choose item to add: ')
    query = f"insert into menu (name, description, price) values (name, description, price)"
    cursor.execute(query)
    connection.commit()


def remove_item_from_menu(name, description, price):
    item = MenuItem(name, description, price)
    remove_item = input('choose item to remove: ')
    query = f"delete from menu where name = '{remove_item}'"
    cursor.execute(query)
    connection.commit()



def show_restaurant_menu(name, description, price):
    item = MenuItem(name, description, price)
    item.all()


# load_manager('great pizza', 'large pizza', 60)
# show_user_menu('fries', 'some fries', 30)
# show_restaurant_menu('great pizza', 'large pizza', 60)
# remove_item_from_menu('great pizza', 'large pizza', 60)
add_item_to_menu('great pizza', 'large pizza', 60)