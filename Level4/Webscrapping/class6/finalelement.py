from selenium import webdriver
import time
from selenium.webdriver.common.by import By
driver = webdriver.Chrome()
driver.get("https://books.toscrape.com/")
time.sleep(7)
producttitle = driver.find_elements(By.CLASS_NAME, "product_pod")
for i in producttitle:
    print(i.text)
driver.quit()


