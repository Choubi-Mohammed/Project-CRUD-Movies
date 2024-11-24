const express =require("express")
const connectDB=require("./connection/movConnection")
const routerPath=require("./routes/movRouter")
// const modelsPath=require("./models/movModel")
const App=express();

App.use(express.json());

connectDB();

App.use("/api/movies/",routerPath)

const PORT=3000
App.listen(PORT,()=>console.log(`Server is runing in port :${PORT}`))




  