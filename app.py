import time

from flask import Flask, render_template, request, redirect, session, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import desc

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SECRET_KEY'] = 'the random string'
db = SQLAlchemy(app)


#################### All the databases ################################
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50))
    password = db.Column(db.String(50))
    typeOfAccount = db.Column(db.String(10))
    credentials = db.Column(db.String(50))
    image = db.Column(db.String(50))
    about = db.Column(db.String(50))


@app.route('/register/', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        new_user = User(username=request.form['username'],
                        password=request.form['password'], typeOfAccount=request.form['typeOfAccount'],
                        credentials=request.form['credentials'], institute=request.form['institute'],
                        skills=request.form['skills'], image=request.form['image'], about=request.form['about'],
                        github=request.form['github'], linkedin=request.form['linkedin'])

        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html')



if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
