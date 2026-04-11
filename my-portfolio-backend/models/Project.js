const mongoose  = require('mongoose');

const projectSchema = new mongoose.Schema({
  image:{
    type: String,
    required : true,
  },
  title :{
    type: String,
    required : true,
  },
  description : {
    type : String,
    required : true,
  },
  techStack :[
    {
      type: String,
    },
  ],
  GithubUrl :{
    type: String,
  },
  Live : {
    type : String,
  }

}, {timestamps : true})


module.exports =  mongoose.model('Project' , projectSchema);