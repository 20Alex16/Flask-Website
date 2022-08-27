from flask import Flask, render_template, send_file, redirect, url_for, request
import json

app = Flask(__name__, static_folder='scripts')

@app.route('/')
def index():
    return redirect('/welcome')

@app.route('/welcome')
def welcome():
    return render_template('login.html') # vor fi luate din folderul 'static'

@app.route('/login', methods=['POST'])
def login():
    error = None
    print(request.form)
    # if request.form['username'] != 'admin' or request.form['password'] != 'admin':
    #     error = 'Invalid Credentials. Please try again.'
    # else:
    #     return redirect(url_for('profile'))
    return render_template('login.html', error=error)

@app.route('/profile')
def profile():
    return render_template('profile.html')




@app.route('/style_login.css')
def style_login():
    return send_file('scripts/style_login.css')

@app.route('/colorChangingBkgr.js')
def colorChangingBkgr():
    return send_file('scripts/colorChangingBkgr.js')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)