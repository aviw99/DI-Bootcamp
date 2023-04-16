import requests
# themes = ["animal","career",
# "celebrity","dev","explicit",
# "fashion","food","history","money",
# "movie","music","political",
# "religion","science","sport","travel"]
url = 'https://api.chucknorris.io/jokes/random'
category = "science"
params = {"category": category}

response = requests.get(url, params=params)

# check if the request was successful (status code 200)
if response.status_code == 200:
    # extract the JSON data from the response
    data = response.json()
    # extract the joke from the data and print it
    joke = data["value"]
    print(joke)
else:
    # print an error message if the request was not successful
    print("Error: could not retrieve Chuck Norris joke")
    
