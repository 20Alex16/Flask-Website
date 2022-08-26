from flask import Flask, render_template, send_file

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html') # vor fi luate din folderul 'static'

@app.route('/style.css')
def style():
    return send_file('static/style.css')

@app.route('/colorChangingBkgr.js')
def colorChangingBkgr():
    return send_file('static/colorChangingBkgr.js')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)