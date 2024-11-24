const express = require("express");
const router=express.Router();
const {Movies,ValidateCreateMov,ValidateUpdateMov}=require('../models/movModel')


//get page home movies
router.get("/home",(req,res)=>{
    res.send("this is page home movies.")
})
// get all movies
router.get("/", async (req,res)=>{
    const movie = await Movies.find()
    res.status(200).json(movie)
})
// get movies by id
router.get("/:id",async (req,res)=>{
    try {
        const movie= await Movies.findById(req.params.id)
        if(movie){
            res.status(200).json(movie)
        }else{
            res.status(404).json({message :"id not found"})
        }
    } catch (error) {
        console.error("somthing is wrong !", error)
        res.status(403).json({message:"somthing is wrong !"})
    }
})
// ajouter un movie
router.post("/",async (req,res)=>{
    try {
        const {error}=ValidateCreateMov(req.body)
        if(error){
            res.status(401).json({message: error.details[0].message})
        }
        const movie= new Movies({
            name:req.body.name,
            genre:req.body.genre,
            year:req.body.year,
        })
        const result=await movie.save()
        res.status(201).json(result)
    } catch (error) {
        console.error("somthing is wrong !", error)
        res.status(403).json({message:"somthing is wrong !"})
    }

})
// update movie by id 
router.put("/:id",async (req,res)=>{
    try {
        const {error}=ValidateUpdateMov(req.body)
        if(error){
            res.status(401).json({message: error.details[0].message})}
        const movie=await Movies.findByIdAndUpdate(req.params.id,{$set:{
            name:req.body.name,
            genre:req.body.genre,
            year:req.body.year,
        }},{new:true})
        if(movie){
            res.status(201).json(movie)
        }else{
            res.status(401).json({message:"id not found !"})
            
        }
    } catch (error) {
        console.error("somthing is wrong !", error)
        res.status(403).json({message:"somthing is wrong !"})
    }
})
// delete movie by id
router.delete("/:id",async (req,res)=>{
    try {
        const movie=await Movies.findByIdAndDelete(req.params.id)
        if(movie){
            res.status(200).json({message:"movie has been deleted ."})
        }else{
            res.status(401).json({message:"id not found !"})
        }
    } catch (error) {
        console.error("somthing is wrong !", error)
        res.status(403).json({message:"somthing is wrong !"})
    }
})
module.exports=router