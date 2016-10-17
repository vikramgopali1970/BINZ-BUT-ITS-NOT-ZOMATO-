/**
 * Created by vgopali on 16-10-2016.
 */
var mongoose = require('mongoose');
var assert = require('assert');

var customersDb = mongoose.connection;
customersDb.on('error', console.error.bind(console, 'connection error : '));
customersDb.once('open', function () {
    console.log('connected to customersDb');
});

mongoose.connect('mongodb://localhost/Customers_test');

var schema = mongoose.Schema;

var customerSchema = new schema({
    name: {
        type : String,
        required : true
    },
    emailId: {
        type : String,
        required : true
    },
    mobileNum: {
        type : Number,
        required : true
    },
    password:{
        type : String,
        required : true
    }
});

var User = mongoose.model('User', customerSchema);


module.exports = User;