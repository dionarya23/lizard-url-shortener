const express = require('express');
var randomstring = require('randomstring');
const route = express.Router();
const Urls = require('../models/url');

route.get('/:url?', (req, res) => {
    var url = req.params.url;

    if (!url) {
        res.render('index');
    } else {
        
        Urls.findOne({short: url}, function(err, data) {

            if (err) {
                res.send(err)
            } else if (!data) {
                res.send(`Data Tidak Ditemukan`)
            } else {
                res.render('url', {
                    original: data.original
                })
            }

        });
    }
    
});

route.post('/', (req, res) => {
 
    var urlOriginal = req.body.original;
    var params = randomstring.generate(7);

    Urls.findOne({short: params}, function(err, data) {
        
        if (!err && !data) {

            var saveData = new Urls({
                short: params,
                original: urlOriginal
            });

            saveData.save(function(error, data) {
                if (error) {
                    res.json(error)
                    console.log(error);
                } else {
                    res.json(data);
                    console.log(data);
                }
            });

        }else{
            res.send("ada Kesalahan")
        }

    });

});

module.exports = route;

