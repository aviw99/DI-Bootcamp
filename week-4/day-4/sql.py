import psycopg2


class MenuItem:


    def __init__(self, name, description, price) -> None:
        self.name = name
        self.description = description
        self.price = price
        HOSTNAME = 'localhost'
        USERNAME = 'postgres'
        PASSWORD = 'awmac'
        DATABASE = 'restaurant'
        PORT = '5432'
        self.connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT )
        self.cursor = self.connection.cursor()
        

    def save(self):
        self.query = f"insert into menu (name, description, price) values ('{self.name}', '{self.description}', {self.price});"
        self.cursor.execute(self.query)
        self.connection.commit()
        

    def delete(self):
        self.query = f"delete from menu where name = '{self.name}'"
        self.cursor.execute(self.query)
        self.connection.commit()


    def update(self, new_name, name):   # can only update name
        self.new_name = new_name
        self.name = name
        self.query = f"update menu set name = '{self.new_name}' where name = '{self.name}'"
        self.cursor.execute(self.query)
        self.connection.commit()


    def all(self):          
        self.query = "SELECT * FROM menu;"
        self.cursor.execute(self.query)
        results = self.cursor.fetchall()
        self.connection.close()
        for item in results:
            print(item)


    def get_by_name(self, name):        
        self.name = name
        self.query = f"select * from menu where name = '{self.name}'"  
        self.cursor.execute(self.query)
        results = self.cursor.fetchall()
        self.connection.close()
        for item in results:
            print(item)
                       

# item = MenuItem('coffee', 'some coffee', 15)

# item.save()
# item.delete()
# item.update('great pie', 'pie' )
# item.get_by_name('pie')
# item.all()

