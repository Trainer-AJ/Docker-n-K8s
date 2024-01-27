from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form['name']
        return render_template('greeting.html', name=name)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)


# ---------------------------------------------- THe container will setup all below items -----------------------------------
# PREREQUISTES
# 1. INSTALL PYTHON
# 2. INSTALL PYTHON FRAMEWORK => Flask
# 3. GET YOUR CODE => FOLDERS ETC
# 4. RUN YOUR CODE