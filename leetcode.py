from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import pandas as pd
import time

from bs4 import BeautifulSoup
# define the website to scrape and path where the chromediver is located
website = 'https://leetcode.com/list/5yp0hcqj/'
path = 'D:\downloads\chromedriver_win32\chromedriver.exe'
root = 'https://leetcode.com/'
ser = Service(path)
# define 'driver' variable
driver = webdriver.Chrome(service=ser)
# open Google Chrome with chromedriver
driver.get(website)
html = BeautifulSoup(driver.page_source,'lxml')
time.sleep(2)
# print(html)

# # locate and click on a button
questions_list= driver.find_elements(By.XPATH, "//div[@class='question-title']")
ques_lists=[]
ques_name=[]
for question in questions_list:
    ques_lists.append(question.find_element(By.TAG_NAME,'a').get_attribute('href'))
    ques_name.append(question.find_element(By.TAG_NAME,'a').get_attribute('innerHTML'))
driver.quit()

df=pd.DataFrame({'Question Name':ques_name,'Question_Link':ques_lists})
df.to_csv('leetcode_pramodh.csv',index=True)
df1 = pd.read_csv('leetcode_pramodh.csv')
df1.to_excel('pramodh.xlsx')
