import mongoose from "mongoose"

const connectDB = ()=>{
   try {
    mongoose.connect(process.env.MONGO_URI).then((con)=>{
     console.log(`connected to : ${con.connection.host}`)
    })
    
   } catch (error) {
    console.log(`connection error ${error}`)
    
   }
}

export default connectDB