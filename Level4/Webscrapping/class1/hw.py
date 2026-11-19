import requests
from bs4 import BeautifulSoup
url = "https://quotes.toscrape.com/?utm_source=chatgpt.com"
res = requests.get(url)
soup = BeautifulSoup(res.text, "html.parser")
print(soup.prettify())