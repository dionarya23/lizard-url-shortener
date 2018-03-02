const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    short : {
        required: true,
        type: String
    },
    original: {
        required: true,
        type: String
    }
});

var Url = mongoose.model('Url', UrlSchema);
module.exports = Url;