import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTAURANT",
    })
    .then(() => {
        console.log("Connected to database successfuly!");
    }).catch(err=>{
        console.log(`Some eroor occured while connecting to database !${err}`);
    });
};