import requests

def get_genders(names):
    url = "https://api.genderize.io/"
    genders = {}
    for name in names:
        params = {"name": name}
        response = requests.get(url, params=params)
        if response.status_code == 200:
            data = response.json()
            if data["gender"]:
                genders[name] = data["gender"]
            else:
                genders[name] = "unknown"
        else:
            genders[name] = "error"
    return genders

names = ["Aarav", "Akira", "Amelia", "Aria", 
         "Arya", "Caleb", "Charlotte", "Chloe", 
         "Elijah", "Emily", "Emma", "Ethan", 
         "Isabella", "Jasmine", "Jayden", 
         "Jorge", "Jose", "Leilani", "Levi", 
         "Liam", "Makayla", "Maria", "Mia", 
         "Mohammed", "Nadia", "Nathan", "Noah", 
         "Oliver", "Sofia", "Yuna"]

genders = get_genders(names)
print(genders)
