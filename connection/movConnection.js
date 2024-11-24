const mongoose=require("mongoose");
const URL="mongodb://localhost/MoviesDb"
const connectDB=async()=>{
    try {
        await mongoose.connect(URL)
        console.log("Connection to MongoDB was successful.")
        
    } catch (error) {
        console.log("Erreur de connexion à MongoDB :",error)
    }
}
module.exports=connectDB