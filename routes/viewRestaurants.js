/**
 * Created by vgopali on 19-10-2016.
 */
var express = require('express');
var restaurantSchema = require('../database/RestuarantsDB');
var BookingSchema = require('../database/BookingsDb');
var customerSchema = require('../database/customersDb');
var router = express.Router();


router.post('/delete', function (req, res, next) {
    console.log('inside delete route nodejs',req.body._id);
    //exec query to delete
    restaurantSchema.remove({_id:req.body._id},function (err) {
        if (err) throw err;
        console.log('successfully deleted '+req.body.name+' Restaurant');
        res.json({status:'successfully deleted '+req.body.name+' Restaurant'});
    });
});


router.post('/update', function (req, res, next) {
    console.log('inside update route nodejs',req.body._id);
    //exec update query
    restaurantSchema.update({_id:req.body._id}, {$set: {tables:req.body.tables, capacity:req.body.capacity}}, function (err) {
        if(err) throw err;
        console.log('successfullty updated the '+req.body.name+' Restaurant');
        res.json({success:true});
    });
});

module.exports = router;