

import connectDB from "./db/index.js";
 import dotenv from "dotenv"

 dotenv.config({
    path: './.env'
 })

connectDB()


















// import express from "express"

// const app = express()



// ( async () => {
//  1       ;try {
//         mongoose.conect(`${process.env.MONGODB_URI}`);
//         app.on("errror", (error)=>{
//             console.log('ERRR: ', error);
//             throw error
            
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listewnign on port ${process.env.PORT}`);
            
//         })
//  }
//  catch (error) {
//     console.error("ERROR: ", error)
//     throw err
//  }
// })()