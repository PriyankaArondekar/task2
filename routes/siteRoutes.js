
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Site = require('../models/siteModel.js');

//get data from database  
var mysort = { 'site_vote': -1 };
router.get('/',function(req,res,next){
    Site.find(function(err, sdata){
        if(err) return next(err);
        res.json(sdata);
    }).sort(mysort);
});

//post data in database  
router.post('/',function(req,res,next){
    Site.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });

});

//update votes in database
router.put('/:id', function(req, res, next) {
   Site.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
     
      res.json(post);
    });
  });

module.exports = router;