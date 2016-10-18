/**
 * Created by vgopali on 16-10-2016.
 */
var mongoose = require('mongoose');
var assert = require('assert');

var bookingsDb = mongoose.connection;
bookingsDb.on('error', console.error.bind(console,'connection error :'));
bookingsDb.once('open', function () {
    console.log('connected to bookingsDb');
});

mongoose.connect('mongodb://localhost/Bookings_test');

var schema = mongoose.Schema;
var bookingsSchema = new schema({
    restName: {
        type : String,
        required : true
    },
    custEmail: {
        type : String,
        required : true
    },
    createdOn: {
        type : Date,
        default : new Date(),
        required : true
    },
    bookedTime: {
        type : Date,
        required : true
    },
    duration : {
        type : Number,
        required : true
    },
    restaurant_id : {
        type : Number,
        required : true
    }
});


var bookings = mongoose.model('bookings',bookingsSchema);

module.exports = bookings;
