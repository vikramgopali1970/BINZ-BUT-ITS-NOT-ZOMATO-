/**
 * Created by vgopali on 18-10-2016.
 */
var express = require('express');
var restaurantSchema = require('../database/RestuarantsDB');
var BookingSchema = require('../database/BookingsDb');
var customerSchema = require('../database/customersDb');
var router = express.Router();


router.post('/', function (req,res,next) {
    console.log('came inside this post',req.body);

    var created = new Date();
    var booked  = new BookingSchema({restName:req.body.restName, custEmail:req.body.mail_id, bookedTime:Date(req.body.date), duration:parseInt(req.body.duration), restaurant_id:parseInt(req.body.restaurant_id), createdOn:created});

    return new Promise(function(resolve, reject) {
        booked.save(function (err) {
            if (err) throw err;
            console.log('User saved successfully!');
            resolve();
        });
    });


});


router.get('/getBooking', function (req, res, next) {
    var obj = JSON.parse(req.query.bookDetails);
    console.log('inside get bookings node',obj.name);
    //exec query to find all bookings of this restaurants
    BookingSchema.find({restName:obj.name}, function (err,results) {
        if(err) throw err;
        console.log(results);
        res.json({result:results});
    });
});

router.post('/deleteThisBooking', function (req, res, next) {
    console.log('inside delete route nodejs',req.body);
    //exec query to delete
    BookingSchema.remove({_id:req.body._id},function (err) {
        if (err) throw err;
        console.log('successfully deleted '+req.body.restName+' booking');
        res.json({status:'successfully deleted '+req.body.restName+' booking'});
    });
});

router.get('/getAllBooking', function (req, res, next) {
    //exec query to find all bookings of this restaurants
    BookingSchema.find({}, function (err,results) {
        if(err) throw err;
        console.log(results);
        res.json({result:results});
    });
});


module.exports = router;