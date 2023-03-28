# exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dict1 = dict(zip(keys,values))
print(dict1)

# exercise 2
price = 0
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_price = 0
for name, age in family.items():
    if age <= 3:
        price = 0
        print(f"{name}, your ticket price is ${price}!")
        total_price += price
    elif 3 < age <= 12:
        price = 10
        print(f"{name}, your ticket price is ${price}!")
        total_price += price
    else:
        price = 15
        print(f"{name}, your ticket price is ${price}!")
        total_price += price
print(f'the total price is ${total_price}')

# exercise 3
brand = {
        'name': 'Zara', 
        'creation_date': 1975, 
        'creator_name': 'Amancio Ortega Gaona',
        'type_of_clothes': ['men', 'women', 'children', 'home'],
        'international_competitors': ["Gap", "H&M", "Benetton"],
        'number_stores': 7000,
        'major_color': {
            'France': 'blue',
            'Spain': 'red',
            'US': ['pink', 'green']
        }      
        }
brand['number_stores'] = 2
print('sentence about zaras clients')

brand['country_creation'] = 'Spain'

if brand.get("international_competitors") is not None:
    brand['international_competitors'] += ['Desigual']
else:
    print("Does not exist")

del brand['creation_date']

print(brand['international_competitors'][-1])

print(brand['major_color']['US'])

print(len(brand))

print(brand.keys())

more_on_zara = {'creation_date': 1975, 'number_stores': 10000}

brand.update(more_on_zara)

print(brand['number_stores'])