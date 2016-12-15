var express = require('express');
var Article = require('../db').Article;
var router = express.Router();
/*  articles.forEach(function(article){
 User.findById(article.user,function(err,user){
 article.user = user;
 })
 });*/
router.get('/',function(req,res){
    // user代表一个属性的名字，
    // populate 指的是填充，用于把当前对象的一个属性从对象ID转成对象类型
    Article.find({}).populate('user').exec(function(err,articles){
        res.render('index',{title:'首页',articles});
    });
});
module.exports = router;