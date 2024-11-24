const Joi = require("joi");
const { required, date } = require("joi");
const { default: mongoose, models } = require("mongoose");


const MovSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:100
    },
    genre:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:100
    },
    year:{
        type:Number,
        required:true,
    }
},{Timestamp:true})
function ValidateCreateMov(obj){
    const schema=Joi.object({
        name:Joi.string().min(3).max(100).required(),
        genre:Joi.string().min(3).max(150).required(),
        year: Joi.number().integer().min(1888).max(new Date().getFullYear()).required()
    })
    return schema.validate(obj)
}
function ValidateUpdateMov(obj){
    const schema=Joi.object({
        name:Joi.string().min(3).max(100),
        genre:Joi.string().min(3).max(150),
        year:Joi.number().integer().min(1888).max(new Date().getFullYear())
    })
    return schema.validate(obj)
}
const Movies=mongoose.model('Movies_Collection',MovSchema)
module.exports={
    Movies,
    ValidateCreateMov,
    ValidateUpdateMov
}

