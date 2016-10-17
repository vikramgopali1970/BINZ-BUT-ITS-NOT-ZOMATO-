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
    res.json({status: 'vapas bant pa'});
});

module.exports = router;