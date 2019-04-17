const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Goal = new Schema({
    title: {
        type: String
    },
    points: {
        type: Number
    },
    // business_gst_number: {
    //     type: Number
    // }
}, {
    collection: 'goals'
});

module.exports = mongoose.model('Goal', Goal);
