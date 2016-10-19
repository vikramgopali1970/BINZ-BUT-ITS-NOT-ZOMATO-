/**
 * Created by vgopali on 16-10-2016.
 */
var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('mongodb://localhost/123456');

var restuarentsDb = mongoose.connection;
restuarentsDb.on('error', console.error.bind(console,'connection error :'));
restuarentsDb.once('open', function () {
    console.log('connected to restaurents Db');
});



var schema = mongoose.Schema;

var restuarentsSchema = new schema({
    name: {
        type : String,
        required : true
    },
    location: {
        type : String,
        required : true
    },
    contactInfo: {
        type : String,
        required : true
    },
    tables: {
        type : Number,
        required : true
    },
    cuisines: {
        type: [String],
        required : false
    },
    cost: {
        type : Number,
        required : true
    },
    capacity: {
        type : Number,
        required : true
    },
    image_src : {
        type : 'string',
        required : false
    }
});


//dummy data
var data = [
    {
        'name' : 'udupi hotel',
        'location' : 'Btm 2nd Stage,bangalore',
        'contactInfo' : '080-2216782',
        'tables' : '15',
        'cuisines' : ['Indian','chinese'],
        'cost' : 500,
        'capacity' : 4,
        'image_src' : 'hotel-preview.jpg'
    },
    {
        'name' : 'swad punjab da',
        'location' : 'kormangala 4th Stage,bangalore',
        'contactInfo' : '080-2216738',
        'tables' : '5',
        'cuisines' : ['Italian','Indian','Seafood'],
        'cost' : 900,
        'capacity' : 6,
        'image_src' : 'hotel-preview1.jpg'
    },
    {
        'name' : 'punjabi by nature',
        'location' : 'Btm 2nd Stage,bangalore',
        'contactInfo' : '080-22167890',
        'tables' : '8',
        'cuisines' : ['Indian'],
        'cost' : 500,
        'capacity' : 4,
        'image_src' : 'hotel-preview-3.png'
    },
    {
        'name' : 'buff buffet buff',
        'location' : 'Kormangala 2nd Stage,bangalore',
        'contactInfo' : '080-1236782',
        'tables' : '20',
        'cuisines' : ['Italian','Chinese'],
        'cost' : 590,
        'capacity' : 2,
        'image_src' : 'hotel-preview-4.jpg'
    },
    {
        'name' : 'cafe noir',
        'location' : 'marathalli ,bangalore',
        'contactInfo' : '080-2219682',
        'tables' : '13',
        'cuisines' : ['Chinese','Seafood'],
        'cost' : 1500,
        'capacity' : 7,
        'image_src' : 'hotel-preview-5.jpg'
    },
    {
        'name' : 'Barbeque Nation',
        'location' : 'Btm 2nd Stage,bangalore',
        'contactInfo' : '080-2216782',
        'tables' : '20',
        'cuisines' : ['Indian','Chinese','Seafood','Italian'],
        'cost' : 800,
        'capacity' : 4,
        'image_src' : 'hotel-preview-6.jpg'
    },
    {
        'name' : 'sagar fast food',
        'location' : 'Btm 1st Stage,bangalore',
        'contactInfo' : '080-2216782',
        'tables' : '9',
        'cuisines' : ['Chinese','Seafood','Italian'],
        'cost' : 500,
        'capacity' : 2,
        'image_src' : 'hotel-preview-7.jpg'
    },
    {
        'name' : 'Dominos',
        'location' : 'Btm 2nd Stage, angotri circle, bangalore',
        'contactInfo' : '080-2211234',
        'tables' : '8',
        'cuisines' : ['Indian','Seafood'],
        'cost' : 740,
        'capacity' : 5,
        'image_src' : 'hotel-preview-8.jpg'
    }

];


var restuarents = mongoose.model('restuarents',restuarentsSchema);


/*restuarents.collection.insertMany(data, function(err,r){
    assert.equal(null, err);
    assert.equal(data.length, r.insertedCount);

})*/

/*restuarents.remove({},function (err) {
    if (err) throw err;
});*/
/*restuarents.find({}, function (err, res) {
    if (err) throw err;

    console.log(res);
});*/

module.exports = restuarents;