import requests


def elapsed_time(url):
    response = requests.get(url)
    elapsed = response.elapsed
    return elapsed


youtube_url = 'https://www.youtube.com/'
google_url = 'https://www.google.com/'
ynet_url = 'https://www.ynet.co.il/home/0,7340,L-8,00.html'
imdb_url = 'https://www.imdb.com/'

print(f"YouTube load time: {elapsed_time(youtube_url)}")
print(f"Google load time: {elapsed_time(google_url)}")
print(f"Ynet load time: {elapsed_time(ynet_url)}")
print(f"Imdb load time: {elapsed_time(imdb_url)}")
