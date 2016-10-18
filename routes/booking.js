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

    res.json({success:true});
});

module.exports = router;