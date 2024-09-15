const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({

busnumber:{
  type:String,
  required:true,
},
from:{
  type:String,
  required:true,
},
to:{
  type:String,
  required:true,
},
bustype:{
  type:String,
  required:true,
},
category:{
  type:String,
  required:true,
},
price:{
  type:Number,
  required:true,
},
contact:{
  type:Number,
  required:true,
},
seats:{
  type:Number,
  required:true,
},
}
);

const Bus = mongoose.model('Bus', busSchema);
module.exports= Bus;