import requests
from bs4 import BeautifulSoup
import pandas as pd

url = "https://quotes.toscrape.com/"
response = requests.get(url)
soup = BeautifulSoup(response.text,"html.parser")
quotes = soup.find_all("div", class_="quote")
data = []
for quote in quotes:
    text = quote.find("span", class_="text").text
    author = quote.find("small", class_="author").text

    data_quote = {
        "Quote": text,
        "Author": author,
    }
    data.append(data_quote)

file = pd.DataFrame(data)
file.to_csv("Quotest.csv" ,index=False)