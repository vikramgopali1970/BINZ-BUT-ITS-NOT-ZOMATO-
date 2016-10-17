var express = require('express');
var restaurantSchema = require('../database/RestuarantsDB');
var BookingSchema = require('../database/BookingsDb');
var customerSchema = require('../database/customersDb');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
});



router.get('/getdata', function (req, res, next) {
    restaurantSchema.find({},function (err, queryRes) {
        if(err) throw error;
        //console.log(queryRes);
        res.json({restaurantList : queryRes});
    })
});
module.exports = router;
