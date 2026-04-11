const express =  require('express');

const getUserHome = (req, res) =>{
 res.send(`<h1>This is user home page</h1>
   <form action="/test/user" method ="POST">
   <input type="text" name="username" placeholder = "Enter your name">
   <input type = "submit"/>
   </form>
  `)


  console.log("user Router user-home route is define successfully");
  
}

const postUserHome = (req, res) =>{
  res.send(`<h1>Form submitted Successfully</h1>`)
  console.log(req.body);
}

module.exports =  {getUserHome, postUserHome };
