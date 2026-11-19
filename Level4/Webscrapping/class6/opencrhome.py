from selenium import webdriver
import time
driver = webdriver.Chrome()
driver.get("https://www.amazon.com/s?k=novels&crid=2SR9QTXA3KEK8&sprefix=nov%2Caps%2C380&ref=nb_sb_noss_2")
time.sleep(25)