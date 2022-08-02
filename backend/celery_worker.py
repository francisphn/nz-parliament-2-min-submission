import os
import random
import time

from celery import Celery
from fake_useragent import UserAgent
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

broker = os.environ['REDIS_URL']
backend = os.environ['REDIS_URL']
name = os.environ.get('CELERY_NAME', 'default_name')


celery = Celery(name, broker=broker, backend=backend)

# SELENIUM
chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
chrome_options.add_experimental_option('useAutomationExtension', False)


@celery.task(name='celery_worker.test', bind=True)
def scrape(self, data):
    """The actual scrape engine"""

    self.update_state(state="Submission data has been received!")

    # RANDOMISING WINDOW SIZE

    random_1 = random.randint(1, 4)

    if random_1 == 1:
        chrome_options.add_argument("--window-size=1100x1000")
    elif random_1 == 2:
        chrome_options.add_argument("--window-size=1100x800")
    elif random_1 == 3:
        chrome_options.add_argument("--window-size=1300x1200")
    else:
        chrome_options.add_argument("--window-size=1350x1100")

    self.update_state(state="Processing... Browser window size has been set")


    # GET THE WEB PAGE

    try:
        ua = UserAgent()
        user_agent = ua.random
        print(user_agent)
        chrome_options.add_argument(f'user-agent={user_agent}')
        driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), chrome_options=chrome_options)
        driver.get('https://www.parliament.nz/en/ECommitteeSubmission/53SCFE_SCF_BILL_124081/CreateSubmission')
        time.sleep(random.randint(20, 30))
    except:
        return "Error"  # Error

    self.update_state(state="Processing... Browser has retrieved submission page")


    # CLICK BUTTONS (ONLINE SUBMISSION ONLY AND PERSONAL)

    try:
        driver.find_element_by_xpath('//*[@id="submission"]/ol/li[1]/fieldset[1]/div/div[1]/label').click()
        time.sleep(random.randint(20, 30))
        driver.find_element_by_xpath('//*[@id="submission"]/ol/li[1]/fieldset[2]/div/div[2]/label').click()
    except:
        return "Error"  # Error

    self.update_state(state="Processing... Browser has clicked on the two buttons")


    # ENTER DATA

    try:
        time.sleep(random.randint(20, 30))
        driver.execute_script('window.scrollBy(0,700)')

        driver.find_element_by_xpath('//*[@id="submission"]/ol/li[1]/div[2]/div/button').click()

        time.sleep(random.randint(20, 30))
        driver.find_element_by_xpath('//*[@id="FirstName"]').send_keys(data['firstName'])
        time.sleep(random.randint(20, 30))
        driver.find_element_by_xpath('//*[@id="LastName"]').send_keys(data['lastName'])
        time.sleep(random.randint(20, 30))
        driver.find_element_by_xpath('//*[@id="EmailAddress"]').send_keys(data['email'])
        time.sleep(random.randint(20, 30))
        driver.find_element_by_xpath('//*[@id="EmailAddress"]').send_keys(Keys.ENTER)

        driver.execute_script("window.scrollBy(0,700)")

        time.sleep(random.randint(20, 30))
        driver.find_element_by_xpath('//*[@id="submission-comments_ifr"]').click()
        time.sleep(random.randint(20, 30))
        text = 'tinyMCE.activeEditor.setContent("{}")'.format(data['submission'])
        driver.execute_script(text)
        time.sleep(random.randint(30, 40))
        driver.find_element_by_xpath('//*[@id="submission-comments_ifr"]').click()
        time.sleep(random.randint(20, 30))
        driver.execute_script("window.scrollBy(0,700)")
        driver.find_element_by_xpath('//*[@id="submission"]/ol/li[3]/div[5]/div/button[3]').click()
        time.sleep(random.randint(20, 30))
        driver.find_element_by_xpath('//*[@id="Vaccination"]').click()
        time.sleep(random.randint(20, 30))
        driver.find_element_by_xpath('//*[@id="Privacy"]').click()
        driver.execute_script("window.scrollBy(0,700)")
        time.sleep(random.randint(20, 30))
        driver.find_element_by_xpath('//*[@id="submission"]/ol/li[4]/div[5]/div[2]/input').click()

        time.sleep(5)

        try:
            hey = driver.find_element_by_xpath('//*[@id="main-content"]/div[1]/div/div/div[2]/p[1]/strong').text
        except:
            return "Error"

        driver.quit()

    except:
        return "Error"

    self.update_state(state="Completed!")

    task_id = self.request.id
    return '{} OK'.format(task_id)

