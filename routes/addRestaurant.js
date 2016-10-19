/**
 * Created by vgopali on 18-10-2016.
 */
var express = require('express');
var restaurantSchema = require('../database/RestuarantsDB');
var BookingSchema = require('../database/BookingsDb');
var customerSchema = require('../database/customersDb');
var router = express.Router();


router.post('/', function (req,res,next) {
    console.log('came inside this post', req.body);
    var addResto = new restaurantSchema({name:req.body.name, location:req.body.location, contactInfo:req.body.contact_num, tables:parseInt(req.body.tables), cost:parseInt(req.body.cost), capacity:parseInt(req.body.capacity), image_src:req.body.img_src });

    return new Promise(function(resolve, reject) {
        addResto.save(function (err) {
            if (err) throw err;
            console.log('Restaurant saved successfully!');
            resolve();
        });
    });
});


module.exports = router;
