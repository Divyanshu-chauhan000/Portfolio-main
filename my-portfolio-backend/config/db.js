const express =  require('express');
const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
])

const connectDB = async () =>{
try{
await mongoose.connect(process.env.MONGODB_URI);
console.log("*********************** (: MongoDB connected Successfully  :) ***********************" );
}
catch(error){
  console.log("Mongo DB connection failed", error);
}

}
module.exports = connectDB;