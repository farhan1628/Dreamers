import requests
from bs4 import BeautifulSoup
url = "https://quotes.toscrape.com/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")
quotes = soup.find_all("div", class_="quote")
for i in quotes:
    text = i.find("span", class_="text").text
    author = i.find("small",class_="author").text
    print("Quote:",text)
    print("Author:",author)
