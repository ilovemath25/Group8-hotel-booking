from datetime import datetime
from flask import Flask, render_template
from flask import jsonify, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask import request

app = Flask(__name__)

# Configure the SQLAlchemy part of the app instance
app.config['SECRET_KEY'] = 'YourSecretKey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:FeFe7404@localhost/my_hotel'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create the SQLAlchemy db instance
db = SQLAlchemy(app)

 
# Define the data models
class Booking(db.Model):
    __tablename__ = 'booking'
    booking_id = db.Column(db.Integer, primary_key=True)
    guest_id = db.Column(db.Integer, db.ForeignKey('guest.guest_id'))
    room_number = db.Column(db.String, db.ForeignKey('room.room_number'))
    room_type= db.Column(db.String)
    check_in_date = db.Column(db.Date)
    check_out_date = db.Column(db.Date)
    total_price = db.Column(db.Float)
    booking_date = db.Column(db.Date)

    guest = db.relationship('Guest', backref='bookings')
    room = db.relationship('Room', backref='bookings')


class Guest(db.Model):
    __tablename__ = 'guest'
    guest_id = db.Column(db.Integer, primary_key=True)
    guest_name = db.Column(db.String)
    contact_info = db.Column(db.String)
  
  
class Room(db.Model):
    __tablename__ = 'room'
    room_number = db.Column(db.String, primary_key=True)
    room_type = db.Column(db.String)
    price_per_night = db.Column(db.Float)
    max_guests = db.Column(db.Integer)


# Route to show the booking list
@app.route('/')
def index():
    prices_list = Booking.query.with_entities(Booking.total_price).all()
     # Calculate the total number of bookings
    total_bookings = Booking.query.count()

    # Fetch total prices and sum manually as before
    prices_list = Booking.query.with_entities(Booking.total_price).all()
    total_price_sum = sum(price_tuple[0] for price_tuple in prices_list if price_tuple[0])
    
    room_types = Booking.query.with_entities(Booking.room_type).all()
  
    
    # Extract room types from the list of tuples
    print (room_types)
    count_room =[0,0,0,0]
    for room_type in room_types:

        room_type= room_type[0]
        print (room_type)
        if room_type == "Single Room": count_room[0]+=1
        elif room_type =="Twin Room" : count_room[1]+=1
        elif room_type =="King Room": count_room[2]+=1
        elif room_type =="Queen Room": count_room[3]+=1
    print (count_room)
            
    return render_template('index.html', total_bookings=total_bookings, total_price_sum=total_price_sum ,count_room=count_room)

    
     
       
# Route to show the booking list
@app.route('/bookings')
def bookings():
    booking_id = request.args.get('booking_id', None)
    guest_name = request.args.get('guest_name', None)
    room_number = request.args.get('room_number', None)
    check_in_date = request.args.get('check_in_date', None)
    check_out_date = request.args.get('check_out_date', None)

    # Add logic to filter bookings based on the provided parameters
    bookings = Booking.query

    if booking_id:
        bookings = bookings.filter(Booking.booking_id == booking_id)

    if guest_name:
        bookings = bookings.join(Guest).filter(Guest.guest_name.ilike(f'%{guest_name}%'))

    if room_number:
        bookings = bookings.filter(Booking.room_number.ilike(f'%{room_number}%'))

    if check_in_date:
        check_in_date = datetime.strptime(check_in_date, '%Y-%m-%d').date()
        bookings = bookings.filter(Booking.check_in_date <= check_in_date)

    if check_out_date:
        check_out_date = datetime.strptime(check_out_date, '%Y-%m-%d').date()
        bookings = bookings.filter(Booking.check_out_date >= check_out_date)

    bookings = bookings.all()

    return render_template('bookings.html', bookings=bookings)

   
  
@app.route('/cancel_booking', methods=['POST'])
def cancel_booking():
    data = request.get_json()
    booking_id = data.get('booking_id')
    print(f"booking_id: {booking_id}")
     
    try:
        booking = Booking.query.get(booking_id)
        if booking:
            db.session.delete(booking)
            db.session.commit()
            return jsonify({"status": "success", "message": "Booking deleted"})
        else:
            return jsonify({"status": "error", "message": "Booking not found"}), 404
    except Exception as e:
        db.session.rollback()
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route('/update_booking_date', methods=['POST'])
def update_booking_date():
    data = request.get_json()
    booking_id = data['booking_id']
    date_type = data['date_type']
    new_date = data['new_date']
    print(f"booking_id: {booking_id}, date_type: {date_type}, new_date: {new_date}")
    
    try:
        booking = Booking.query.get(booking_id)
        if booking:
            if date_type == 'check_in_date':
                booking.check_in_date = datetime.strptime(new_date, '%Y-%m-%d').date()
            elif date_type == 'check_out_date':
                booking.check_out_date = datetime.strptime(new_date, '%Y-%m-%d').date()
            db.session.commit()
            return jsonify({"status": "success", "message": "Booking date updated"})
        else:
            return jsonify({"status": "error", "message": "Booking not found"}), 404
    except Exception as e:
        db.session.rollback()
        return jsonify({"status": "error", "message": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
