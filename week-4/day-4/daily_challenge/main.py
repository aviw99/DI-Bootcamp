import requests
from random import choice
import psycopg2


# url = 'https://restcountries.com/v3.1/all'


def get_data(url):
    response = requests.get(url)
    data = response.json()
    return data

def get_random_instances(data_list: list, n: int):
    instances = []
    for _ in range(n):
        random_inst = choice(data_list)
        instances.append(random_inst)
    return instances

def extract(instance: dict):
    try:
        name = instance['name']['common']
        # capitol = instance['capitol'][0]
        flag_emoji = instance['flag']
        flag_url = instance['flag']['png'] #  https://flagcdn.com/w320/bb.png
        subregion = instance['subregion']
        population = instance['population']

    except KeyError:
        return None

    return (name,  flag_emoji, flag_url, subregion, population)


def preprocess(instances: list[dict]):

    preprocessed = []

    for instance in instances:
        preprocessed_inst = extract(instance)
        if preprocessed_inst is None:
            continue

    preprocessed.append(preprocessed_inst)
        
        
url = 'https://restcountries.com/v3.1/all'

data= get_data(url)

random_inst = get_random_instances(data,10)

clean_inst = preprocess(random_inst)

print(clean_inst)
# print(name,capitol,flag_emoji,flag_url,subregion,population)