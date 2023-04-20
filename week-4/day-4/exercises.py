import psycopg2 

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'awmac'
DATABASE = 'restaurant'

class MenuItem:

    name = None
    price = None

    def __init__(self, name, price):
        self.name = name
        self.price = price

    def run_query(self, query):
        connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
        cursor = connection.cursor()
        cursor.execute(query)
        connection.commit()
        connection.close()

    def save(self):
        try:
            query = f'insert into restaurant (name, price) values ({self.name},{self.price})'
            self.run_query(query) 
        except:
            return False

    def delete(self):
        query = f'delete from restaurant where name = {self.name}'
        self.run_query(query) 

    def update(self):
        query = f'update restaurant set name = {self.name} where name = {old.name}'

    # def all(self):
    #     pass

    # def get_by_name(self):
    #     pass