import psycopg2 

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'awmac'
DATABASE = 'restaurant'

connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)

cursor = connection.cursor()