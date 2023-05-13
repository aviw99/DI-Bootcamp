import requests
import psycopg2


HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'awmac'
DATABASE = 'restcountries'
PORT = '5432'


connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE, port=PORT)
cursor = connection.cursor()


def get_data():
    countries =['Laos','Morocco','Aruba','Estonia','Bahamas','Kuwait','Tunisia','Suriname','Luxembourg','Nauru']
    data = []
    for country in countries:
        url = f"https://restcountries.com/v3.1/name/{country}?fields=name,capital,flag,subregion,population"
        response = requests.get(url).json()
        name = response[0]['name']['common']
        capital = response[0]['capital'][0]
        flag = response[0]['flag']
        subregion = response[0]['subregion']  
        population = response[0]['population']      
        data.append([name, capital, flag, subregion, population])
    return data


def add_to_database():
    data = get_data()
    for item in data:
        query = f"insert into countries (name, capital, flag, subregion, population) values ('{item[0]}', '{item[1]}', '{item[2]}', '{item[3]}', '{item[4]}')"
        cursor.execute(query)
    connection.commit()


add_to_database()