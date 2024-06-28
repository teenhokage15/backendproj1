import express from "express"

const app = express()  


import connectDB from "./db/index.db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed");
  });







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
