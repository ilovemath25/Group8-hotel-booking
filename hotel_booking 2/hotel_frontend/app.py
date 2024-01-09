from flask import Flask, render_template, request, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from wtforms.validators import ValidationError
app = Flask(__name__)
app.config['SECRET_KEY'] = 'YourSecretKey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:FeFe7404@localhost/my_hotel'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
# Example room data (in a real application, this would come from a database)
rooms = [
   ('101', 'Single Room'),
   ('102', 'Twin Room'),
   ('103', 'Queen Room'),
   ('104', 'King Room')
]
def calculate_total_price(check_in_date, check_out_date, price_per_night):
   # Calculate the duration of the stay
   duration = (check_out_date - check_in_date).days
   # Ensure a minimum duration of 1 day
   duration = max(duration, 1)
   # Calculate the total price based on the duration and price per night
   total_price = duration * price_per_night
   return total_price
class Guest(db.Model):
   guest_id = db.Column(db.Integer, primary_key=True)
   guest_name = db.Column(db.String(255), nullable=False)
   contact_info = db.Column(db.String(255))
class Room(db.Model):
   room_number = db.Column(db.String(10), primary_key=True)
   price_per_night = db.Column(db.Float)  # Add this line
   room_type = db.Column(db.String(50))
   # other room fields...
class Booking(db.Model):
   booking_id = db.Column(db.Integer, primary_key=True)
   guest_id = db.Column(db.Integer, db.ForeignKey('guest.guest_id'), nullable=False)
   room_number = db.Column(db.Integer, db.ForeignKey('room.room_number'), nullable=False)
   check_in_date = db.Column(db.Date, nullable=False)
   check_out_date = db.Column(db.Date, nullable=False)
   total_price = db.Column(db.Float)  # Add this line
   room_type = db.Column(db.String(50))
   # other booking fields...
class BookingForm(FlaskForm):
   guest_name = StringField('Guest Name', validators=[DataRequired()])
   room_number = SelectField('Room Number', choices=rooms, validators=[DataRequired()])
   check_in_date = DateField('Check-In Date', format='%Y-%m-%d', validators=[DataRequired()])
   check_out_date = DateField('Check-Out Date', format='%Y-%m-%d', validators=[DataRequired()])
   contact_info = StringField('Contact Information', validators=[DataRequired()])
   submit = SubmitField('Confirm Book')
   def validate_check_out_date(self, field):
        if self.check_in_date.data and field.data:
            if self.check_in_date.data > field.data:
               print('Check-out date must be later than the check-in date.')
               raise ValidationError('Check-out date must be later than the check-in date.')
@app.route('/')
def index():
   return render_template('index.html')
@app.route('/booking', methods=['GET', 'POST'])
def booking():
   form = BookingForm()
   if form.validate_on_submit():
       for field in form:
           print(f"{field.name}: {field.data}")
       new_guest = Guest(guest_name=form.guest_name.data, contact_info=form.contact_info.data)
       db.session.add(new_guest)
       db.session.flush()  # Flush to get the ID of the new guest
       room = Room.query.filter_by(room_number=form.room_number.data).first()
       if not room:
           return render_template('error.html', error='Room not found')
       # Calculate total_price based on room price_per_night and booking duration
       total_price = calculate_total_price(form.check_in_date.data, form.check_out_date.data, room.price_per_night)
       new_booking = Booking(
           guest_id = new_guest.guest_id,
           room_number = form.room_number.data,
           check_in_date = form.check_in_date.data,
           check_out_date = form.check_out_date.data,
           total_price=total_price,
           room_type=room.room_type
       )
       db.session.add(new_booking)
       db.session.commit()
       return redirect(url_for('success'))
   return render_template('booking.html', form=form)
@app.route('/success')
def success():
   return render_template('confirmed.html')
if __name__ == '__main__':
    app.run(debug=True, port=5000)



