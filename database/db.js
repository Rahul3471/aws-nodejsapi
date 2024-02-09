import mongoose from "mongoose";


const Connection = async() => {

    const DB_URI = "mongodb+srv://rahul:rahulrawat@job-portal.ux0n48i.mongodb.net/"
  try {
       await mongoose.connect(DB_URI,{UseUnifiedTopology:true})
       console.log('Database connected Successfully')
  } catch (error) {
    console.log('error',error.message)
  }
}

export default Connection;