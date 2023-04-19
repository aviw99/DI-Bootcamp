import psycopg2 

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'awmac'
DATABASE = 'Hollywood'

connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)

# # query runner
cursor = connection.cursor()

query = 'select * from actors'

cursor.execute(query)

result = cursor.fetchall()

print(result)

connection.close
def run_query(query: str):
    with connection.cursor() as cursor: # query runner
        cursor.execute(query)
        result = cursor.fetchall() # returns all data from cursor
    return result

def select_columns(columns: list[str], table_name: str):
    query = 'select '
    for idx, column in enumerate(columns):
        query += column 
        if idx < len(columns) -1 :
            query += ", "

    query += f' from {table_name}'
    return query

query = select_columns(['first_name', 'last_name'], 'actors')
print(query)
'select fist_name, last_name fom actors'