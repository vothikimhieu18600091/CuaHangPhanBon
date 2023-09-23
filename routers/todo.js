const User= require('../models/user');
const todo=[];
//const todo = require('../models/todo');
const ensureLoggedIn = require('../middlewares/ensure_logged_in');
const express = require("express");
const { name } = require('ejs');
const router= express.Router();

router.use(ensureLoggedIn);
router.use(function(req,res,next){
    res.locals.title='Todo';
    next();
});

router.get('/', function(req, res){
    
    res.render('todo/form');
});

router.post('/',function(req,res){
    console.log(req.body);
    const number= req.body.name;
   
    todo.push(number);
    //console.log(todo.findAll());
   
    //res.send(`${todo1}`);
   //console.log(todo);
   //res.render('todo/result',{todo});
    res.render('todo/result',{todo});
});

module.exports= router;