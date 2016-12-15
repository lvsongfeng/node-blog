var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://127.0.0.1/201610blog');
var ObjectId = mongoose.Schema.Types.ObjectId;
//定义schema
var UserSchema = new mongoose.Schema({
    username:String,//用户名
    password:String,//密码
    email:String,//邮箱
    avatar:String//头像
},{collection:'user'});
//定义model并导出 如果上面没有给出集合的名称，集合名称=模型名->小写->复数
exports.User = mongoose.model('User',UserSchema);

var ArticleSchema = new mongoose.Schema({
    title:String,
    content:{type:String},
    createAt:{type:Date,default:new Date},
    user:{type:ObjectId,ref:'User'}//reference我这个主键是引用哪个模型的主键
},{collection:'article'});//在此指定集合的名称
exports.Article = mongoose.model('Article',ArticleSchema);

