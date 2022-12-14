from flask import Flask, request, jsonify
from selenium import webdriver
import os
from celery import Celery
from flask_cors import CORS

# FLASK
app = Flask(__name__)
CORS(app)

# CELERY
broker = os.environ['REDIS_URL']
name = os.environ.get('CELERY_NAME', 'default_name')
backend = os.environ['REDIS_URL']
celery = Celery(name, broker=broker, backend=backend)

# SELENIUM
chrome_options = webdriver.ChromeOptions()
chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
chrome_options.add_experimental_option('useAutomationExtension', False)


@app.route('/')
def test():
    """GET / returns this text. The purpose is the test that the API is deployed correctly."""
    return 'The API is running. To get started, POST /submit, which will return a task ID. To track the status of that task, GET /tasks/<task_id>.'


@app.route('/submit', methods=["POST"])
def submit():
    task = celery.send_task('celery_worker.scrape', args=[request.get_json(force=True)])
    response = check_task(task.id)
    return response


@app.route('/tasks/<task_id>')
def check_task(task_id):
    task = celery.AsyncResult(task_id)

    if task.state == 'FAILURE':
        result = None
        error = str(task.result)
    else:
        result = task.result
        error = None

    response = {
        'id': task_id,
        'state': task.state,
        'result': result,
        'error': error,
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
