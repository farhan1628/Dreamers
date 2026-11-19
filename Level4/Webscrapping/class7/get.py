import csv
import time
import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By

data = []
driver = webdriver.Chrome()
driver.get("https://realpython.github.io/fake-jobs/")
time.sleep(1)
job = driver.find_elements(By.CSS_SELECTOR, "div.card-content")

for i in job:
    title = i.find_element(By.CSS_SELECTOR, "h2.title").text
    location = i.find_element(By.CSS_SELECTOR, "p.location").text
    data.append([[title,location]])
driver.quit()

with open("jobs.csv", mode="w") as file:
    writer = csv.writer(file)
    writer.writerow({"Job", "Location"})
    writer.writerows(data)
print("Complete!")


