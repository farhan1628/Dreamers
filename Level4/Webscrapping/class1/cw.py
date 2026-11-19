# import requests
# url = "https://example.com/"
# res = requests.get(url)
# print(res.text)


import requests
from bs4 import BeautifulSoup
url = "https://example.com/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")
print(soup.prettify())