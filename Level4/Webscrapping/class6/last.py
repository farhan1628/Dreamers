import time
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://books.toscrape.com/")
time.sleep(7)


producttitle = driver.find_elements(By.ID, "promotions")
for i in producttitle:
    print(i.text)
driver.quit()